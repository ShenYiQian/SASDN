/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../google/api/annotations_pb.js');
var order_order_pb = require('../order/order_pb.js');
goog.exportSymbol('proto.demo.GetDemoOrderRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.demo.GetDemoOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.demo.GetDemoOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.demo.GetDemoOrderRequest.displayName = 'proto.demo.GetDemoOrderRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.demo.GetDemoOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.demo.GetDemoOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.demo.GetDemoOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.demo.GetDemoOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    paramInt64: jspb.Message.getFieldWithDefault(msg, 1, 0),
    paramInt32: jspb.Message.getFieldWithDefault(msg, 2, 0),
    paramBool: jspb.Message.getFieldWithDefault(msg, 3, false),
    paramString: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.demo.GetDemoOrderRequest}
 */
proto.demo.GetDemoOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.demo.GetDemoOrderRequest;
  return proto.demo.GetDemoOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.demo.GetDemoOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.demo.GetDemoOrderRequest}
 */
proto.demo.GetDemoOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParamInt64(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParamInt32(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setParamBool(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParamString(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.demo.GetDemoOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.demo.GetDemoOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.demo.GetDemoOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.demo.GetDemoOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParamInt64();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParamInt32();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getParamBool();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getParamString();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 param_int64 = 1;
 * @return {number}
 */
proto.demo.GetDemoOrderRequest.prototype.getParamInt64 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.demo.GetDemoOrderRequest.prototype.setParamInt64 = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 param_int32 = 2;
 * @return {number}
 */
proto.demo.GetDemoOrderRequest.prototype.getParamInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.demo.GetDemoOrderRequest.prototype.setParamInt32 = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool param_bool = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.demo.GetDemoOrderRequest.prototype.getParamBool = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.demo.GetDemoOrderRequest.prototype.setParamBool = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string param_string = 4;
 * @return {string}
 */
proto.demo.GetDemoOrderRequest.prototype.getParamString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.demo.GetDemoOrderRequest.prototype.setParamString = function(value) {
  jspb.Message.setField(this, 4, value);
};


goog.object.extend(exports, proto.demo);
