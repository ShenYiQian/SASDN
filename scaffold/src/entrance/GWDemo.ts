import * as Koa from 'koa';
import * as koaBodyParser from 'koa-bodyparser';
import { KoaImpl, ZIPKIN_EVENT } from 'sasdn-zipkin';
import RouterLoader from '../router/Router';
import { Config, ConfigConst } from '../lib/Config';
import { LEVEL } from 'sasdn-log';
import { Logger } from '../lib/Logger';
import * as LibDotEnv from 'dotenv';
import { ContainerEnv } from '../constant/const';
import { Memcached } from '../lib/Memcached';
import * as LibPath from 'path';
import { MODULE_NAME } from '../constant/exception';
import * as koaCors from 'koa2-cors';

export default class GWDemo {
  private _initialized: boolean;
  public app: Koa;

  constructor() {
    this._initialized = false;
  }

  public async init(container: string = ContainerEnv.PM2): Promise<any> {
    if (container === ContainerEnv.PM2) {
      const loadEnv = LibDotEnv.config();
      if (loadEnv.error) {
        return Promise.reject(loadEnv.error);
      }
    }

    await Config.instance.initalize();

    await Logger.instance.initalize({
      loggerName: Config.instance.getConfig(ConfigConst.CONNECT_GATEWAY),
      loggerLevel: LEVEL.INFO,
    });

    await Memcached.instance.initalize();

    await RouterLoader.instance().init();

    KoaImpl.init({
      transType: 'FILE',
      filePath: LibPath.join(process.env.ZIPKIN_LOG_FILE_PATH, `${MODULE_NAME}.log`),
      serviceName: Config.instance.getConfig(ConfigConst.CONNECT_GATEWAY),
      port: Config.instance.getPort(ConfigConst.CONNECT_GATEWAY),
    });

    const ZipkinImpl = new KoaImpl();
    const app = new Koa();
    app.use(ZipkinImpl.createMiddleware());
    app.use(koaCors({
      origin(ctx) {
        let origin = '*';
        const allowDomain = Config.instance.getConfig(ConfigConst.ALLOW_DOMAIN).split(',');
        for (const i in allowDomain) {
          if (ctx.header.origin && (ctx.header.origin.indexOf(allowDomain[i]) > -1)) {
            origin = ctx.header.origin;
            break;
          }
        }
        return origin;
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 86400,
      credentials: true,
      allowMethods: ['GET', 'POST', 'DELETE'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }));
    app.use(koaBodyParser({ formLimit: '2048kb' })); // post body parser
    app.use(RouterLoader.instance().getRouter().routes());
    app.use(async (ctx, next) => {
      ZipkinImpl.setCustomizedRecords(ZIPKIN_EVENT.SERVER_SEND, {
        httpRequest: JSON.stringify(ctx.request.body),
        httpResponse: JSON.stringify(ctx.body),
      });
      await next();
    });
    this.app = app;

    this._initialized = true;

    return Promise.resolve();
  }

  public start(): void {
    if (!this._initialized) {
      return;
    }

    const host: string = '0.0.0.0';
    const port: number = Config.instance.getPort(ConfigConst.CONNECT_GATEWAY);
    this.app.listen(port, host, () => {
      Logger.instance.info(`API Gateway Start, Address: ${host}:${port}!`);
    });
  }
}
