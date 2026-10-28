// @ts-self-types="./proto.d.ts"
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const social = $root.social = (() => {

const social = {};

social.mixi = (function() {

const mixi = {};

mixi.application = (function() {

const application = {};

application.service = (function() {

const service = {};

service.application_api = (function() {

const application_api = {};

application_api.v1 = (function() {

const v1 = {};

v1.GetUsersRequest = (function() {

function GetUsersRequest(properties) {
this.userIdList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetUsersRequest.prototype.userIdList = $util.emptyArray;

GetUsersRequest.create = function create(properties) {
return new GetUsersRequest(properties);
};

GetUsersRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.userIdList != null && message.userIdList.length)
for (let i = 0; i < message.userIdList.length; ++i)
writer.uint32(10).string(message.userIdList[i]);
return writer;
};

GetUsersRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetUsersRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.userIdList && message.userIdList.length))
message.userIdList = [];
message.userIdList.push(reader.string());
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetUsersRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetUsersRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetUsersRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetUsersRequest();
if (object.userIdList) {
if (!Array.isArray(object.userIdList))
throw TypeError(".social.mixi.application.service.application_api.v1.GetUsersRequest.userIdList: array expected");
message.userIdList = [];
for (let i = 0; i < object.userIdList.length; ++i)
message.userIdList[i] = String(object.userIdList[i]);
}
return message;
};

GetUsersRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.userIdList = [];
if (message.userIdList && message.userIdList.length) {
object.userIdList = [];
for (let j = 0; j < message.userIdList.length; ++j)
object.userIdList[j] = message.userIdList[j];
}
return object;
};

GetUsersRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetUsersRequest;
})();

v1.GetUsersResponse = (function() {

function GetUsersResponse(properties) {
this.users = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetUsersResponse.prototype.users = $util.emptyArray;

GetUsersResponse.create = function create(properties) {
return new GetUsersResponse(properties);
};

GetUsersResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.users != null && message.users.length)
for (let i = 0; i < message.users.length; ++i)
$root.social.mixi.application.model.v1.User.encode(message.users[i], writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

GetUsersResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetUsersResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.users && message.users.length))
message.users = [];
message.users.push($root.social.mixi.application.model.v1.User.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetUsersResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetUsersResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetUsersResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetUsersResponse();
if (object.users) {
if (!Array.isArray(object.users))
throw TypeError(".social.mixi.application.service.application_api.v1.GetUsersResponse.users: array expected");
message.users = [];
for (let i = 0; i < object.users.length; ++i) {
if (!$util.isObject(object.users[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetUsersResponse.users: object expected");
message.users[i] = $root.social.mixi.application.model.v1.User.fromObject(object.users[i], long + 1);
}
}
return message;
};

GetUsersResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.users = [];
if (message.users && message.users.length) {
object.users = [];
for (let j = 0; j < message.users.length; ++j)
object.users[j] = $root.social.mixi.application.model.v1.User.toObject(message.users[j], options, q + 1);
}
return object;
};

GetUsersResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetUsersResponse;
})();

v1.GetPostsRequest = (function() {

function GetPostsRequest(properties) {
this.postIdList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetPostsRequest.prototype.postIdList = $util.emptyArray;

GetPostsRequest.create = function create(properties) {
return new GetPostsRequest(properties);
};

GetPostsRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.postIdList != null && message.postIdList.length)
for (let i = 0; i < message.postIdList.length; ++i)
writer.uint32(10).string(message.postIdList[i]);
return writer;
};

GetPostsRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetPostsRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.postIdList && message.postIdList.length))
message.postIdList = [];
message.postIdList.push(reader.string());
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetPostsRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetPostsRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostsRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetPostsRequest();
if (object.postIdList) {
if (!Array.isArray(object.postIdList))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostsRequest.postIdList: array expected");
message.postIdList = [];
for (let i = 0; i < object.postIdList.length; ++i)
message.postIdList[i] = String(object.postIdList[i]);
}
return message;
};

GetPostsRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.postIdList = [];
if (message.postIdList && message.postIdList.length) {
object.postIdList = [];
for (let j = 0; j < message.postIdList.length; ++j)
object.postIdList[j] = message.postIdList[j];
}
return object;
};

GetPostsRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetPostsRequest;
})();

v1.GetPostsResponse = (function() {

function GetPostsResponse(properties) {
this.posts = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetPostsResponse.prototype.posts = $util.emptyArray;

GetPostsResponse.create = function create(properties) {
return new GetPostsResponse(properties);
};

GetPostsResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.posts != null && message.posts.length)
for (let i = 0; i < message.posts.length; ++i)
$root.social.mixi.application.model.v1.Post.encode(message.posts[i], writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

GetPostsResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetPostsResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.posts && message.posts.length))
message.posts = [];
message.posts.push($root.social.mixi.application.model.v1.Post.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetPostsResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetPostsResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostsResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetPostsResponse();
if (object.posts) {
if (!Array.isArray(object.posts))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostsResponse.posts: array expected");
message.posts = [];
for (let i = 0; i < object.posts.length; ++i) {
if (!$util.isObject(object.posts[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostsResponse.posts: object expected");
message.posts[i] = $root.social.mixi.application.model.v1.Post.fromObject(object.posts[i], long + 1);
}
}
return message;
};

GetPostsResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.posts = [];
if (message.posts && message.posts.length) {
object.posts = [];
for (let j = 0; j < message.posts.length; ++j)
object.posts[j] = $root.social.mixi.application.model.v1.Post.toObject(message.posts[j], options, q + 1);
}
return object;
};

GetPostsResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetPostsResponse;
})();

v1.GetCommunitiesRequest = (function() {

function GetCommunitiesRequest(properties) {
this.communityIdList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunitiesRequest.prototype.communityIdList = $util.emptyArray;

GetCommunitiesRequest.create = function create(properties) {
return new GetCommunitiesRequest(properties);
};

GetCommunitiesRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communityIdList != null && message.communityIdList.length)
for (let i = 0; i < message.communityIdList.length; ++i)
writer.uint32(10).string(message.communityIdList[i]);
return writer;
};

GetCommunitiesRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.communityIdList && message.communityIdList.length))
message.communityIdList = [];
message.communityIdList.push(reader.string());
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunitiesRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunitiesRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesRequest();
if (object.communityIdList) {
if (!Array.isArray(object.communityIdList))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesRequest.communityIdList: array expected");
message.communityIdList = [];
for (let i = 0; i < object.communityIdList.length; ++i)
message.communityIdList[i] = String(object.communityIdList[i]);
}
return message;
};

GetCommunitiesRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.communityIdList = [];
if (message.communityIdList && message.communityIdList.length) {
object.communityIdList = [];
for (let j = 0; j < message.communityIdList.length; ++j)
object.communityIdList[j] = message.communityIdList[j];
}
return object;
};

GetCommunitiesRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunitiesRequest;
})();

v1.GetCommunitiesResponse = (function() {

function GetCommunitiesResponse(properties) {
this.communities = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunitiesResponse.prototype.communities = $util.emptyArray;

GetCommunitiesResponse.create = function create(properties) {
return new GetCommunitiesResponse(properties);
};

GetCommunitiesResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communities != null && message.communities.length)
for (let i = 0; i < message.communities.length; ++i)
$root.social.mixi.application.model.v1.Community.encode(message.communities[i], writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

GetCommunitiesResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.communities && message.communities.length))
message.communities = [];
message.communities.push($root.social.mixi.application.model.v1.Community.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunitiesResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunitiesResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesResponse();
if (object.communities) {
if (!Array.isArray(object.communities))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesResponse.communities: array expected");
message.communities = [];
for (let i = 0; i < object.communities.length; ++i) {
if (!$util.isObject(object.communities[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesResponse.communities: object expected");
message.communities[i] = $root.social.mixi.application.model.v1.Community.fromObject(object.communities[i], long + 1);
}
}
return message;
};

GetCommunitiesResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.communities = [];
if (message.communities && message.communities.length) {
object.communities = [];
for (let j = 0; j < message.communities.length; ++j)
object.communities[j] = $root.social.mixi.application.model.v1.Community.toObject(message.communities[j], options, q + 1);
}
return object;
};

GetCommunitiesResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunitiesResponse;
})();

v1.InitiatePostMediaUploadRequest = (function() {

function InitiatePostMediaUploadRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

InitiatePostMediaUploadRequest.prototype.contentType = "";
InitiatePostMediaUploadRequest.prototype.dataSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
InitiatePostMediaUploadRequest.prototype.mediaType = 0;
InitiatePostMediaUploadRequest.prototype.description = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(InitiatePostMediaUploadRequest.prototype, "_description", {
get: $util.oneOfGetter($oneOfFields = ["description"]),
set: $util.oneOfSetter($oneOfFields)
});

InitiatePostMediaUploadRequest.create = function create(properties) {
return new InitiatePostMediaUploadRequest(properties);
};

InitiatePostMediaUploadRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
writer.uint32(10).string(message.contentType);
if (message.dataSize != null && Object.hasOwnProperty.call(message, "dataSize"))
writer.uint32(16).uint64(message.dataSize);
if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
writer.uint32(24).int32(message.mediaType);
if (message.description != null && Object.hasOwnProperty.call(message, "description"))
writer.uint32(34).string(message.description);
return writer;
};

InitiatePostMediaUploadRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.contentType = reader.string();
break;
}
case 2: {
message.dataSize = reader.uint64();
break;
}
case 3: {
message.mediaType = reader.int32();
break;
}
case 4: {
message.description = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

InitiatePostMediaUploadRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest();
if (object.contentType != null)
message.contentType = String(object.contentType);
if (object.dataSize != null)
if ($util.Long)
message.dataSize = $util.Long.fromValue(object.dataSize, true);
else if (typeof object.dataSize === "string")
message.dataSize = parseInt(object.dataSize, 10);
else if (typeof object.dataSize === "number")
message.dataSize = object.dataSize;
else if (typeof object.dataSize === "object")
message.dataSize = new $util.LongBits(object.dataSize.low >>> 0, object.dataSize.high >>> 0).toNumber(true);
switch (object.mediaType) {
default:
if (typeof object.mediaType === "number") {
message.mediaType = object.mediaType;
break;
}
break;
case "TYPE_UNSPECIFIED":
case 0:
message.mediaType = 0;
break;
case "TYPE_IMAGE":
case 1:
message.mediaType = 1;
break;
case "TYPE_VIDEO":
case 2:
message.mediaType = 2;
break;
}
if (object.description != null)
message.description = String(object.description);
return message;
};

InitiatePostMediaUploadRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.contentType = "";
if ($util.Long) {
let long = new $util.Long(0, 0, true);
object.dataSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
} else
object.dataSize = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
object.mediaType = options.enums === String ? "TYPE_UNSPECIFIED" : 0;
}
if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
object.contentType = message.contentType;
if (message.dataSize != null && Object.hasOwnProperty.call(message, "dataSize"))
if (typeof BigInt !== "undefined" && options.longs === BigInt)
object.dataSize = typeof message.dataSize === "number" ? BigInt(message.dataSize) : $util.Long.fromBits(message.dataSize.low >>> 0, message.dataSize.high >>> 0, true).toBigInt();
else if (typeof message.dataSize === "number")
object.dataSize = options.longs === String ? String(message.dataSize) : message.dataSize;
else
object.dataSize = options.longs === String ? $util.Long.prototype.toString.call(message.dataSize) : options.longs === Number ? new $util.LongBits(message.dataSize.low >>> 0, message.dataSize.high >>> 0).toNumber(true) : message.dataSize;
if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
object.mediaType = options.enums === String ? $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest.Type[message.mediaType] === undefined ? message.mediaType : $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadRequest.Type[message.mediaType] : message.mediaType;
if (message.description != null && Object.hasOwnProperty.call(message, "description")) {
object.description = message.description;
if (options.oneofs)
object._description = "description";
}
return object;
};

InitiatePostMediaUploadRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

InitiatePostMediaUploadRequest.Type = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "TYPE_IMAGE"] = 1;
values[valuesById[2] = "TYPE_VIDEO"] = 2;
return values;
})();

return InitiatePostMediaUploadRequest;
})();

v1.InitiatePostMediaUploadResponse = (function() {

function InitiatePostMediaUploadResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

InitiatePostMediaUploadResponse.prototype.mediaId = "";
InitiatePostMediaUploadResponse.prototype.uploadUrl = "";

InitiatePostMediaUploadResponse.create = function create(properties) {
return new InitiatePostMediaUploadResponse(properties);
};

InitiatePostMediaUploadResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
writer.uint32(10).string(message.mediaId);
if (message.uploadUrl != null && Object.hasOwnProperty.call(message, "uploadUrl"))
writer.uint32(18).string(message.uploadUrl);
return writer;
};

InitiatePostMediaUploadResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.mediaId = reader.string();
break;
}
case 2: {
message.uploadUrl = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

InitiatePostMediaUploadResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.InitiatePostMediaUploadResponse();
if (object.mediaId != null)
message.mediaId = String(object.mediaId);
if (object.uploadUrl != null)
message.uploadUrl = String(object.uploadUrl);
return message;
};

InitiatePostMediaUploadResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.mediaId = "";
object.uploadUrl = "";
}
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
object.mediaId = message.mediaId;
if (message.uploadUrl != null && Object.hasOwnProperty.call(message, "uploadUrl"))
object.uploadUrl = message.uploadUrl;
return object;
};

InitiatePostMediaUploadResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return InitiatePostMediaUploadResponse;
})();

v1.GetPostMediaStatusRequest = (function() {

function GetPostMediaStatusRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetPostMediaStatusRequest.prototype.mediaId = "";

GetPostMediaStatusRequest.create = function create(properties) {
return new GetPostMediaStatusRequest(properties);
};

GetPostMediaStatusRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
writer.uint32(10).string(message.mediaId);
return writer;
};

GetPostMediaStatusRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.mediaId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetPostMediaStatusRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusRequest();
if (object.mediaId != null)
message.mediaId = String(object.mediaId);
return message;
};

GetPostMediaStatusRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.mediaId = "";
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
object.mediaId = message.mediaId;
return object;
};

GetPostMediaStatusRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetPostMediaStatusRequest;
})();

v1.GetPostMediaStatusResponse = (function() {

function GetPostMediaStatusResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetPostMediaStatusResponse.prototype.status = 0;

GetPostMediaStatusResponse.create = function create(properties) {
return new GetPostMediaStatusResponse(properties);
};

GetPostMediaStatusResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.status != null && Object.hasOwnProperty.call(message, "status"))
writer.uint32(8).int32(message.status);
return writer;
};

GetPostMediaStatusResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.status = reader.int32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetPostMediaStatusResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse();
switch (object.status) {
default:
if (typeof object.status === "number") {
message.status = object.status;
break;
}
break;
case "STATUS_UNSPECIFIED":
case 0:
message.status = 0;
break;
case "STATUS_UPLOAD_PENDING":
case 1:
message.status = 1;
break;
case "STATUS_PROCESSING":
case 2:
message.status = 2;
break;
case "STATUS_COMPLETED":
case 3:
message.status = 3;
break;
case "STATUS_FAILED":
case 4:
message.status = 4;
break;
}
return message;
};

GetPostMediaStatusResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.status = options.enums === String ? "STATUS_UNSPECIFIED" : 0;
if (message.status != null && Object.hasOwnProperty.call(message, "status"))
object.status = options.enums === String ? $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse.Status[message.status] === undefined ? message.status : $root.social.mixi.application.service.application_api.v1.GetPostMediaStatusResponse.Status[message.status] : message.status;
return object;
};

GetPostMediaStatusResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

GetPostMediaStatusResponse.Status = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "STATUS_UNSPECIFIED"] = 0;
values[valuesById[1] = "STATUS_UPLOAD_PENDING"] = 1;
values[valuesById[2] = "STATUS_PROCESSING"] = 2;
values[valuesById[3] = "STATUS_COMPLETED"] = 3;
values[valuesById[4] = "STATUS_FAILED"] = 4;
return values;
})();

return GetPostMediaStatusResponse;
})();

v1.CreatePostRequest = (function() {

function CreatePostRequest(properties) {
this.mediaIdList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CreatePostRequest.prototype.text = "";
CreatePostRequest.prototype.inReplyToPostId = null;
CreatePostRequest.prototype.quotedPostId = null;
CreatePostRequest.prototype.communityId = null;
CreatePostRequest.prototype.mediaIdList = $util.emptyArray;
CreatePostRequest.prototype.postMask = null;
CreatePostRequest.prototype.publishingType = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(CreatePostRequest.prototype, "_inReplyToPostId", {
get: $util.oneOfGetter($oneOfFields = ["inReplyToPostId"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(CreatePostRequest.prototype, "_quotedPostId", {
get: $util.oneOfGetter($oneOfFields = ["quotedPostId"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(CreatePostRequest.prototype, "_communityId", {
get: $util.oneOfGetter($oneOfFields = ["communityId"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(CreatePostRequest.prototype, "_postMask", {
get: $util.oneOfGetter($oneOfFields = ["postMask"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(CreatePostRequest.prototype, "_publishingType", {
get: $util.oneOfGetter($oneOfFields = ["publishingType"]),
set: $util.oneOfSetter($oneOfFields)
});

CreatePostRequest.create = function create(properties) {
return new CreatePostRequest(properties);
};

CreatePostRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
writer.uint32(10).string(message.text);
if (message.inReplyToPostId != null && Object.hasOwnProperty.call(message, "inReplyToPostId"))
writer.uint32(18).string(message.inReplyToPostId);
if (message.quotedPostId != null && Object.hasOwnProperty.call(message, "quotedPostId"))
writer.uint32(26).string(message.quotedPostId);
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(34).string(message.communityId);
if (message.mediaIdList != null && message.mediaIdList.length)
for (let i = 0; i < message.mediaIdList.length; ++i)
writer.uint32(42).string(message.mediaIdList[i]);
if (message.postMask != null && Object.hasOwnProperty.call(message, "postMask"))
$root.social.mixi.application.model.v1.PostMask.encode(message.postMask, writer.uint32(50).fork(), q + 1).ldelim();
if (message.publishingType != null && Object.hasOwnProperty.call(message, "publishingType"))
writer.uint32(56).int32(message.publishingType);
return writer;
};

CreatePostRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.CreatePostRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.text = reader.string();
break;
}
case 2: {
message.inReplyToPostId = reader.string();
break;
}
case 3: {
message.quotedPostId = reader.string();
break;
}
case 4: {
message.communityId = reader.string();
break;
}
case 5: {
if (!(message.mediaIdList && message.mediaIdList.length))
message.mediaIdList = [];
message.mediaIdList.push(reader.string());
break;
}
case 6: {
message.postMask = $root.social.mixi.application.model.v1.PostMask.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 7: {
message.publishingType = reader.int32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CreatePostRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.CreatePostRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.CreatePostRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.CreatePostRequest();
if (object.text != null)
message.text = String(object.text);
if (object.inReplyToPostId != null)
message.inReplyToPostId = String(object.inReplyToPostId);
if (object.quotedPostId != null)
message.quotedPostId = String(object.quotedPostId);
if (object.communityId != null)
message.communityId = String(object.communityId);
if (object.mediaIdList) {
if (!Array.isArray(object.mediaIdList))
throw TypeError(".social.mixi.application.service.application_api.v1.CreatePostRequest.mediaIdList: array expected");
message.mediaIdList = [];
for (let i = 0; i < object.mediaIdList.length; ++i)
message.mediaIdList[i] = String(object.mediaIdList[i]);
}
if (object.postMask != null) {
if (!$util.isObject(object.postMask))
throw TypeError(".social.mixi.application.service.application_api.v1.CreatePostRequest.postMask: object expected");
message.postMask = $root.social.mixi.application.model.v1.PostMask.fromObject(object.postMask, long + 1);
}
switch (object.publishingType) {
default:
if (typeof object.publishingType === "number") {
message.publishingType = object.publishingType;
break;
}
break;
case "POST_PUBLISHING_TYPE_UNSPECIFIED":
case 0:
message.publishingType = 0;
break;
case "POST_PUBLISHING_TYPE_NOT_PUBLISHING":
case 1:
message.publishingType = 1;
break;
}
return message;
};

CreatePostRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.mediaIdList = [];
if (options.defaults)
object.text = "";
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
object.text = message.text;
if (message.inReplyToPostId != null && Object.hasOwnProperty.call(message, "inReplyToPostId")) {
object.inReplyToPostId = message.inReplyToPostId;
if (options.oneofs)
object._inReplyToPostId = "inReplyToPostId";
}
if (message.quotedPostId != null && Object.hasOwnProperty.call(message, "quotedPostId")) {
object.quotedPostId = message.quotedPostId;
if (options.oneofs)
object._quotedPostId = "quotedPostId";
}
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId")) {
object.communityId = message.communityId;
if (options.oneofs)
object._communityId = "communityId";
}
if (message.mediaIdList && message.mediaIdList.length) {
object.mediaIdList = [];
for (let j = 0; j < message.mediaIdList.length; ++j)
object.mediaIdList[j] = message.mediaIdList[j];
}
if (message.postMask != null && Object.hasOwnProperty.call(message, "postMask")) {
object.postMask = $root.social.mixi.application.model.v1.PostMask.toObject(message.postMask, options, q + 1);
if (options.oneofs)
object._postMask = "postMask";
}
if (message.publishingType != null && Object.hasOwnProperty.call(message, "publishingType")) {
object.publishingType = options.enums === String ? $root.social.mixi.application.const_.v1.PostPublishingType[message.publishingType] === undefined ? message.publishingType : $root.social.mixi.application.const_.v1.PostPublishingType[message.publishingType] : message.publishingType;
if (options.oneofs)
object._publishingType = "publishingType";
}
return object;
};

CreatePostRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CreatePostRequest;
})();

v1.CreatePostResponse = (function() {

function CreatePostResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CreatePostResponse.prototype.post = null;

CreatePostResponse.create = function create(properties) {
return new CreatePostResponse(properties);
};

CreatePostResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.post != null && Object.hasOwnProperty.call(message, "post"))
$root.social.mixi.application.model.v1.Post.encode(message.post, writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

CreatePostResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.CreatePostResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.post = $root.social.mixi.application.model.v1.Post.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CreatePostResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.CreatePostResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.CreatePostResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.CreatePostResponse();
if (object.post != null) {
if (!$util.isObject(object.post))
throw TypeError(".social.mixi.application.service.application_api.v1.CreatePostResponse.post: object expected");
message.post = $root.social.mixi.application.model.v1.Post.fromObject(object.post, long + 1);
}
return message;
};

CreatePostResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.post = null;
if (message.post != null && Object.hasOwnProperty.call(message, "post"))
object.post = $root.social.mixi.application.model.v1.Post.toObject(message.post, options, q + 1);
return object;
};

CreatePostResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CreatePostResponse;
})();

v1.DeletePostRequest = (function() {

function DeletePostRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

DeletePostRequest.prototype.postId = "";

DeletePostRequest.create = function create(properties) {
return new DeletePostRequest(properties);
};

DeletePostRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
writer.uint32(10).string(message.postId);
return writer;
};

DeletePostRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.DeletePostRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.postId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

DeletePostRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.DeletePostRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.DeletePostRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.DeletePostRequest();
if (object.postId != null)
message.postId = String(object.postId);
return message;
};

DeletePostRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.postId = "";
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
object.postId = message.postId;
return object;
};

DeletePostRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return DeletePostRequest;
})();

v1.DeletePostResponse = (function() {

function DeletePostResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

DeletePostResponse.prototype.deleted = false;

DeletePostResponse.create = function create(properties) {
return new DeletePostResponse(properties);
};

DeletePostResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
writer.uint32(8).bool(message.deleted);
return writer;
};

DeletePostResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.DeletePostResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.deleted = reader.bool();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

DeletePostResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.DeletePostResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.DeletePostResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.DeletePostResponse();
if (object.deleted != null)
message.deleted = Boolean(object.deleted);
return message;
};

DeletePostResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.deleted = false;
if (message.deleted != null && Object.hasOwnProperty.call(message, "deleted"))
object.deleted = message.deleted;
return object;
};

DeletePostResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return DeletePostResponse;
})();

v1.GetCommunityTimelineRequest = (function() {

function GetCommunityTimelineRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunityTimelineRequest.prototype.communityId = "";
GetCommunityTimelineRequest.prototype.untilCursor = null;
GetCommunityTimelineRequest.prototype.sinceCursor = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetCommunityTimelineRequest.prototype, "_untilCursor", {
get: $util.oneOfGetter($oneOfFields = ["untilCursor"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetCommunityTimelineRequest.prototype, "_sinceCursor", {
get: $util.oneOfGetter($oneOfFields = ["sinceCursor"]),
set: $util.oneOfSetter($oneOfFields)
});

GetCommunityTimelineRequest.create = function create(properties) {
return new GetCommunityTimelineRequest(properties);
};

GetCommunityTimelineRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(10).string(message.communityId);
if (message.untilCursor != null && Object.hasOwnProperty.call(message, "untilCursor"))
writer.uint32(18).string(message.untilCursor);
if (message.sinceCursor != null && Object.hasOwnProperty.call(message, "sinceCursor"))
writer.uint32(26).string(message.sinceCursor);
return writer;
};

GetCommunityTimelineRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.communityId = reader.string();
break;
}
case 2: {
message.untilCursor = reader.string();
break;
}
case 3: {
message.sinceCursor = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunityTimelineRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunityTimelineRequest();
if (object.communityId != null)
message.communityId = String(object.communityId);
if (object.untilCursor != null)
message.untilCursor = String(object.untilCursor);
if (object.sinceCursor != null)
message.sinceCursor = String(object.sinceCursor);
return message;
};

GetCommunityTimelineRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.communityId = "";
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
object.communityId = message.communityId;
if (message.untilCursor != null && Object.hasOwnProperty.call(message, "untilCursor")) {
object.untilCursor = message.untilCursor;
if (options.oneofs)
object._untilCursor = "untilCursor";
}
if (message.sinceCursor != null && Object.hasOwnProperty.call(message, "sinceCursor")) {
object.sinceCursor = message.sinceCursor;
if (options.oneofs)
object._sinceCursor = "sinceCursor";
}
return object;
};

GetCommunityTimelineRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunityTimelineRequest;
})();

v1.GetCommunityTimelineResponse = (function() {

function GetCommunityTimelineResponse(properties) {
this.posts = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunityTimelineResponse.prototype.posts = $util.emptyArray;

GetCommunityTimelineResponse.create = function create(properties) {
return new GetCommunityTimelineResponse(properties);
};

GetCommunityTimelineResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.posts != null && message.posts.length)
for (let i = 0; i < message.posts.length; ++i)
$root.social.mixi.application.model.v1.Post.encode(message.posts[i], writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

GetCommunityTimelineResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.posts && message.posts.length))
message.posts = [];
message.posts.push($root.social.mixi.application.model.v1.Post.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunityTimelineResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse();
if (object.posts) {
if (!Array.isArray(object.posts))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse.posts: array expected");
message.posts = [];
for (let i = 0; i < object.posts.length; ++i) {
if (!$util.isObject(object.posts[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityTimelineResponse.posts: object expected");
message.posts[i] = $root.social.mixi.application.model.v1.Post.fromObject(object.posts[i], long + 1);
}
}
return message;
};

GetCommunityTimelineResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.posts = [];
if (message.posts && message.posts.length) {
object.posts = [];
for (let j = 0; j < message.posts.length; ++j)
object.posts[j] = $root.social.mixi.application.model.v1.Post.toObject(message.posts[j], options, q + 1);
}
return object;
};

GetCommunityTimelineResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunityTimelineResponse;
})();

v1.GetCommunityMemberListRequest = (function() {

function GetCommunityMemberListRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunityMemberListRequest.prototype.communityId = "";
GetCommunityMemberListRequest.prototype.paginationCursor = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetCommunityMemberListRequest.prototype, "_paginationCursor", {
get: $util.oneOfGetter($oneOfFields = ["paginationCursor"]),
set: $util.oneOfSetter($oneOfFields)
});

GetCommunityMemberListRequest.create = function create(properties) {
return new GetCommunityMemberListRequest(properties);
};

GetCommunityMemberListRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(10).string(message.communityId);
if (message.paginationCursor != null && Object.hasOwnProperty.call(message, "paginationCursor"))
writer.uint32(18).string(message.paginationCursor);
return writer;
};

GetCommunityMemberListRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.communityId = reader.string();
break;
}
case 2: {
message.paginationCursor = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunityMemberListRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunityMemberListRequest();
if (object.communityId != null)
message.communityId = String(object.communityId);
if (object.paginationCursor != null)
message.paginationCursor = String(object.paginationCursor);
return message;
};

GetCommunityMemberListRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.communityId = "";
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
object.communityId = message.communityId;
if (message.paginationCursor != null && Object.hasOwnProperty.call(message, "paginationCursor")) {
object.paginationCursor = message.paginationCursor;
if (options.oneofs)
object._paginationCursor = "paginationCursor";
}
return object;
};

GetCommunityMemberListRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunityMemberListRequest;
})();

v1.GetCommunityMemberListResponse = (function() {

function GetCommunityMemberListResponse(properties) {
this.members = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunityMemberListResponse.prototype.members = $util.emptyArray;
GetCommunityMemberListResponse.prototype.nextPaginationCursor = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetCommunityMemberListResponse.prototype, "_nextPaginationCursor", {
get: $util.oneOfGetter($oneOfFields = ["nextPaginationCursor"]),
set: $util.oneOfSetter($oneOfFields)
});

GetCommunityMemberListResponse.create = function create(properties) {
return new GetCommunityMemberListResponse(properties);
};

GetCommunityMemberListResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.members != null && message.members.length)
for (let i = 0; i < message.members.length; ++i)
$root.social.mixi.application.model.v1.User.encode(message.members[i], writer.uint32(10).fork(), q + 1).ldelim();
if (message.nextPaginationCursor != null && Object.hasOwnProperty.call(message, "nextPaginationCursor"))
writer.uint32(18).string(message.nextPaginationCursor);
return writer;
};

GetCommunityMemberListResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.members && message.members.length))
message.members = [];
message.members.push($root.social.mixi.application.model.v1.User.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 2: {
message.nextPaginationCursor = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunityMemberListResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse();
if (object.members) {
if (!Array.isArray(object.members))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse.members: array expected");
message.members = [];
for (let i = 0; i < object.members.length; ++i) {
if (!$util.isObject(object.members[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunityMemberListResponse.members: object expected");
message.members[i] = $root.social.mixi.application.model.v1.User.fromObject(object.members[i], long + 1);
}
}
if (object.nextPaginationCursor != null)
message.nextPaginationCursor = String(object.nextPaginationCursor);
return message;
};

GetCommunityMemberListResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.members = [];
if (message.members && message.members.length) {
object.members = [];
for (let j = 0; j < message.members.length; ++j)
object.members[j] = $root.social.mixi.application.model.v1.User.toObject(message.members[j], options, q + 1);
}
if (message.nextPaginationCursor != null && Object.hasOwnProperty.call(message, "nextPaginationCursor")) {
object.nextPaginationCursor = message.nextPaginationCursor;
if (options.oneofs)
object._nextPaginationCursor = "nextPaginationCursor";
}
return object;
};

GetCommunityMemberListResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunityMemberListResponse;
})();

v1.RestrictCommunityPostRequest = (function() {

function RestrictCommunityPostRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

RestrictCommunityPostRequest.prototype.postId = "";

RestrictCommunityPostRequest.create = function create(properties) {
return new RestrictCommunityPostRequest(properties);
};

RestrictCommunityPostRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
writer.uint32(10).string(message.postId);
return writer;
};

RestrictCommunityPostRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.postId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

RestrictCommunityPostRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.RestrictCommunityPostRequest();
if (object.postId != null)
message.postId = String(object.postId);
return message;
};

RestrictCommunityPostRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.postId = "";
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
object.postId = message.postId;
return object;
};

RestrictCommunityPostRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return RestrictCommunityPostRequest;
})();

v1.RestrictCommunityPostResponse = (function() {

function RestrictCommunityPostResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

RestrictCommunityPostResponse.create = function create(properties) {
return new RestrictCommunityPostResponse(properties);
};

RestrictCommunityPostResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
return writer;
};

RestrictCommunityPostResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

RestrictCommunityPostResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse)
return object;
return new $root.social.mixi.application.service.application_api.v1.RestrictCommunityPostResponse();
};

RestrictCommunityPostResponse.toObject = function toObject() {
return {};
};

RestrictCommunityPostResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return RestrictCommunityPostResponse;
})();

v1.GetCommunitiesUsingApplicationRequest = (function() {

function GetCommunitiesUsingApplicationRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunitiesUsingApplicationRequest.prototype.cursor = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetCommunitiesUsingApplicationRequest.prototype, "_cursor", {
get: $util.oneOfGetter($oneOfFields = ["cursor"]),
set: $util.oneOfSetter($oneOfFields)
});

GetCommunitiesUsingApplicationRequest.create = function create(properties) {
return new GetCommunitiesUsingApplicationRequest(properties);
};

GetCommunitiesUsingApplicationRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
writer.uint32(10).string(message.cursor);
return writer;
};

GetCommunitiesUsingApplicationRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.cursor = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunitiesUsingApplicationRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationRequest();
if (object.cursor != null)
message.cursor = String(object.cursor);
return message;
};

GetCommunitiesUsingApplicationRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor")) {
object.cursor = message.cursor;
if (options.oneofs)
object._cursor = "cursor";
}
return object;
};

GetCommunitiesUsingApplicationRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunitiesUsingApplicationRequest;
})();

v1.GetCommunitiesUsingApplicationResponse = (function() {

function GetCommunitiesUsingApplicationResponse(properties) {
this.communitiesUsingApplication = [];
this.applicationVersions = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetCommunitiesUsingApplicationResponse.prototype.communitiesUsingApplication = $util.emptyArray;
GetCommunitiesUsingApplicationResponse.prototype.applicationVersions = $util.emptyArray;
GetCommunitiesUsingApplicationResponse.prototype.nextCursor = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetCommunitiesUsingApplicationResponse.prototype, "_nextCursor", {
get: $util.oneOfGetter($oneOfFields = ["nextCursor"]),
set: $util.oneOfSetter($oneOfFields)
});

GetCommunitiesUsingApplicationResponse.create = function create(properties) {
return new GetCommunitiesUsingApplicationResponse(properties);
};

GetCommunitiesUsingApplicationResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communitiesUsingApplication != null && message.communitiesUsingApplication.length)
for (let i = 0; i < message.communitiesUsingApplication.length; ++i)
$root.social.mixi.application.model.v1.CommunityUsingApplication.encode(message.communitiesUsingApplication[i], writer.uint32(10).fork(), q + 1).ldelim();
if (message.applicationVersions != null && message.applicationVersions.length)
for (let i = 0; i < message.applicationVersions.length; ++i)
$root.social.mixi.application.model.v1.ApplicationVersion.encode(message.applicationVersions[i], writer.uint32(18).fork(), q + 1).ldelim();
if (message.nextCursor != null && Object.hasOwnProperty.call(message, "nextCursor"))
writer.uint32(26).string(message.nextCursor);
return writer;
};

GetCommunitiesUsingApplicationResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.communitiesUsingApplication && message.communitiesUsingApplication.length))
message.communitiesUsingApplication = [];
message.communitiesUsingApplication.push($root.social.mixi.application.model.v1.CommunityUsingApplication.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 2: {
if (!(message.applicationVersions && message.applicationVersions.length))
message.applicationVersions = [];
message.applicationVersions.push($root.social.mixi.application.model.v1.ApplicationVersion.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 3: {
message.nextCursor = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetCommunitiesUsingApplicationResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse();
if (object.communitiesUsingApplication) {
if (!Array.isArray(object.communitiesUsingApplication))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse.communitiesUsingApplication: array expected");
message.communitiesUsingApplication = [];
for (let i = 0; i < object.communitiesUsingApplication.length; ++i) {
if (!$util.isObject(object.communitiesUsingApplication[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse.communitiesUsingApplication: object expected");
message.communitiesUsingApplication[i] = $root.social.mixi.application.model.v1.CommunityUsingApplication.fromObject(object.communitiesUsingApplication[i], long + 1);
}
}
if (object.applicationVersions) {
if (!Array.isArray(object.applicationVersions))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse.applicationVersions: array expected");
message.applicationVersions = [];
for (let i = 0; i < object.applicationVersions.length; ++i) {
if (!$util.isObject(object.applicationVersions[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetCommunitiesUsingApplicationResponse.applicationVersions: object expected");
message.applicationVersions[i] = $root.social.mixi.application.model.v1.ApplicationVersion.fromObject(object.applicationVersions[i], long + 1);
}
}
if (object.nextCursor != null)
message.nextCursor = String(object.nextCursor);
return message;
};

GetCommunitiesUsingApplicationResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults) {
object.communitiesUsingApplication = [];
object.applicationVersions = [];
}
if (message.communitiesUsingApplication && message.communitiesUsingApplication.length) {
object.communitiesUsingApplication = [];
for (let j = 0; j < message.communitiesUsingApplication.length; ++j)
object.communitiesUsingApplication[j] = $root.social.mixi.application.model.v1.CommunityUsingApplication.toObject(message.communitiesUsingApplication[j], options, q + 1);
}
if (message.applicationVersions && message.applicationVersions.length) {
object.applicationVersions = [];
for (let j = 0; j < message.applicationVersions.length; ++j)
object.applicationVersions[j] = $root.social.mixi.application.model.v1.ApplicationVersion.toObject(message.applicationVersions[j], options, q + 1);
}
if (message.nextCursor != null && Object.hasOwnProperty.call(message, "nextCursor")) {
object.nextCursor = message.nextCursor;
if (options.oneofs)
object._nextCursor = "nextCursor";
}
return object;
};

GetCommunitiesUsingApplicationResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetCommunitiesUsingApplicationResponse;
})();

v1.SendChatMessageRequest = (function() {

function SendChatMessageRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SendChatMessageRequest.prototype.roomId = "";
SendChatMessageRequest.prototype.text = null;
SendChatMessageRequest.prototype.mediaId = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(SendChatMessageRequest.prototype, "_text", {
get: $util.oneOfGetter($oneOfFields = ["text"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(SendChatMessageRequest.prototype, "_mediaId", {
get: $util.oneOfGetter($oneOfFields = ["mediaId"]),
set: $util.oneOfSetter($oneOfFields)
});

SendChatMessageRequest.create = function create(properties) {
return new SendChatMessageRequest(properties);
};

SendChatMessageRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
writer.uint32(10).string(message.roomId);
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
writer.uint32(18).string(message.text);
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId"))
writer.uint32(26).string(message.mediaId);
return writer;
};

SendChatMessageRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.SendChatMessageRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.roomId = reader.string();
break;
}
case 2: {
message.text = reader.string();
break;
}
case 3: {
message.mediaId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SendChatMessageRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.SendChatMessageRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.SendChatMessageRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.SendChatMessageRequest();
if (object.roomId != null)
message.roomId = String(object.roomId);
if (object.text != null)
message.text = String(object.text);
if (object.mediaId != null)
message.mediaId = String(object.mediaId);
return message;
};

SendChatMessageRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.roomId = "";
if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
object.roomId = message.roomId;
if (message.text != null && Object.hasOwnProperty.call(message, "text")) {
object.text = message.text;
if (options.oneofs)
object._text = "text";
}
if (message.mediaId != null && Object.hasOwnProperty.call(message, "mediaId")) {
object.mediaId = message.mediaId;
if (options.oneofs)
object._mediaId = "mediaId";
}
return object;
};

SendChatMessageRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SendChatMessageRequest;
})();

v1.SendChatMessageResponse = (function() {

function SendChatMessageResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SendChatMessageResponse.prototype.message = null;

SendChatMessageResponse.create = function create(properties) {
return new SendChatMessageResponse(properties);
};

SendChatMessageResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
$root.social.mixi.application.model.v1.ChatMessage.encode(message.message, writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

SendChatMessageResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.SendChatMessageResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.message = $root.social.mixi.application.model.v1.ChatMessage.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SendChatMessageResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.SendChatMessageResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.SendChatMessageResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.SendChatMessageResponse();
if (object.message != null) {
if (!$util.isObject(object.message))
throw TypeError(".social.mixi.application.service.application_api.v1.SendChatMessageResponse.message: object expected");
message.message = $root.social.mixi.application.model.v1.ChatMessage.fromObject(object.message, long + 1);
}
return message;
};

SendChatMessageResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.message = null;
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
object.message = $root.social.mixi.application.model.v1.ChatMessage.toObject(message.message, options, q + 1);
return object;
};

SendChatMessageResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SendChatMessageResponse;
})();

v1.GetStampsRequest = (function() {

function GetStampsRequest(properties) {
this.communityIds = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetStampsRequest.prototype.officialStampLanguage = null;
GetStampsRequest.prototype.communityIds = $util.emptyArray;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(GetStampsRequest.prototype, "_officialStampLanguage", {
get: $util.oneOfGetter($oneOfFields = ["officialStampLanguage"]),
set: $util.oneOfSetter($oneOfFields)
});

GetStampsRequest.create = function create(properties) {
return new GetStampsRequest(properties);
};

GetStampsRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.officialStampLanguage != null && Object.hasOwnProperty.call(message, "officialStampLanguage"))
writer.uint32(8).int32(message.officialStampLanguage);
if (message.communityIds != null && message.communityIds.length)
for (let i = 0; i < message.communityIds.length; ++i)
writer.uint32(18).string(message.communityIds[i]);
return writer;
};

GetStampsRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetStampsRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.officialStampLanguage = reader.int32();
break;
}
case 2: {
if (!(message.communityIds && message.communityIds.length))
message.communityIds = [];
message.communityIds.push(reader.string());
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetStampsRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetStampsRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetStampsRequest();
switch (object.officialStampLanguage) {
default:
if (typeof object.officialStampLanguage === "number") {
message.officialStampLanguage = object.officialStampLanguage;
break;
}
break;
case "LANGUAGE_CODE_UNSPECIFIED":
case 0:
message.officialStampLanguage = 0;
break;
case "LANGUAGE_CODE_JP":
case 1:
message.officialStampLanguage = 1;
break;
case "LANGUAGE_CODE_EN":
case 2:
message.officialStampLanguage = 2;
break;
}
if (object.communityIds) {
if (!Array.isArray(object.communityIds))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsRequest.communityIds: array expected");
message.communityIds = [];
for (let i = 0; i < object.communityIds.length; ++i)
message.communityIds[i] = String(object.communityIds[i]);
}
return message;
};

GetStampsRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.communityIds = [];
if (message.officialStampLanguage != null && Object.hasOwnProperty.call(message, "officialStampLanguage")) {
object.officialStampLanguage = options.enums === String ? $root.social.mixi.application.const_.v1.LanguageCode[message.officialStampLanguage] === undefined ? message.officialStampLanguage : $root.social.mixi.application.const_.v1.LanguageCode[message.officialStampLanguage] : message.officialStampLanguage;
if (options.oneofs)
object._officialStampLanguage = "officialStampLanguage";
}
if (message.communityIds && message.communityIds.length) {
object.communityIds = [];
for (let j = 0; j < message.communityIds.length; ++j)
object.communityIds[j] = message.communityIds[j];
}
return object;
};

GetStampsRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetStampsRequest;
})();

v1.GetStampsResponse = (function() {

function GetStampsResponse(properties) {
this.officialStampSets = [];
this.communityStampSets = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

GetStampsResponse.prototype.officialStampSets = $util.emptyArray;
GetStampsResponse.prototype.communityStampSets = $util.emptyArray;

GetStampsResponse.create = function create(properties) {
return new GetStampsResponse(properties);
};

GetStampsResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.officialStampSets != null && message.officialStampSets.length)
for (let i = 0; i < message.officialStampSets.length; ++i)
$root.social.mixi.application.model.v1.OfficialStampSet.encode(message.officialStampSets[i], writer.uint32(10).fork(), q + 1).ldelim();
if (message.communityStampSets != null && message.communityStampSets.length)
for (let i = 0; i < message.communityStampSets.length; ++i)
$root.social.mixi.application.model.v1.CommunityStampSet.encode(message.communityStampSets[i], writer.uint32(18).fork(), q + 1).ldelim();
return writer;
};

GetStampsResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.GetStampsResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.officialStampSets && message.officialStampSets.length))
message.officialStampSets = [];
message.officialStampSets.push($root.social.mixi.application.model.v1.OfficialStampSet.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 2: {
if (!(message.communityStampSets && message.communityStampSets.length))
message.communityStampSets = [];
message.communityStampSets.push($root.social.mixi.application.model.v1.CommunityStampSet.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

GetStampsResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.GetStampsResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.GetStampsResponse();
if (object.officialStampSets) {
if (!Array.isArray(object.officialStampSets))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsResponse.officialStampSets: array expected");
message.officialStampSets = [];
for (let i = 0; i < object.officialStampSets.length; ++i) {
if (!$util.isObject(object.officialStampSets[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsResponse.officialStampSets: object expected");
message.officialStampSets[i] = $root.social.mixi.application.model.v1.OfficialStampSet.fromObject(object.officialStampSets[i], long + 1);
}
}
if (object.communityStampSets) {
if (!Array.isArray(object.communityStampSets))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsResponse.communityStampSets: array expected");
message.communityStampSets = [];
for (let i = 0; i < object.communityStampSets.length; ++i) {
if (!$util.isObject(object.communityStampSets[i]))
throw TypeError(".social.mixi.application.service.application_api.v1.GetStampsResponse.communityStampSets: object expected");
message.communityStampSets[i] = $root.social.mixi.application.model.v1.CommunityStampSet.fromObject(object.communityStampSets[i], long + 1);
}
}
return message;
};

GetStampsResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults) {
object.officialStampSets = [];
object.communityStampSets = [];
}
if (message.officialStampSets && message.officialStampSets.length) {
object.officialStampSets = [];
for (let j = 0; j < message.officialStampSets.length; ++j)
object.officialStampSets[j] = $root.social.mixi.application.model.v1.OfficialStampSet.toObject(message.officialStampSets[j], options, q + 1);
}
if (message.communityStampSets && message.communityStampSets.length) {
object.communityStampSets = [];
for (let j = 0; j < message.communityStampSets.length; ++j)
object.communityStampSets[j] = $root.social.mixi.application.model.v1.CommunityStampSet.toObject(message.communityStampSets[j], options, q + 1);
}
return object;
};

GetStampsResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return GetStampsResponse;
})();

v1.AddStampToPostRequest = (function() {

function AddStampToPostRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

AddStampToPostRequest.prototype.postId = "";
AddStampToPostRequest.prototype.stampId = "";

AddStampToPostRequest.create = function create(properties) {
return new AddStampToPostRequest(properties);
};

AddStampToPostRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
writer.uint32(10).string(message.postId);
if (message.stampId != null && Object.hasOwnProperty.call(message, "stampId"))
writer.uint32(18).string(message.stampId);
return writer;
};

AddStampToPostRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.AddStampToPostRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.postId = reader.string();
break;
}
case 2: {
message.stampId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

AddStampToPostRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.AddStampToPostRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.AddStampToPostRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.AddStampToPostRequest();
if (object.postId != null)
message.postId = String(object.postId);
if (object.stampId != null)
message.stampId = String(object.stampId);
return message;
};

AddStampToPostRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.postId = "";
object.stampId = "";
}
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
object.postId = message.postId;
if (message.stampId != null && Object.hasOwnProperty.call(message, "stampId"))
object.stampId = message.stampId;
return object;
};

AddStampToPostRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return AddStampToPostRequest;
})();

v1.AddStampToPostResponse = (function() {

function AddStampToPostResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

AddStampToPostResponse.prototype.post = null;

AddStampToPostResponse.create = function create(properties) {
return new AddStampToPostResponse(properties);
};

AddStampToPostResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.post != null && Object.hasOwnProperty.call(message, "post"))
$root.social.mixi.application.model.v1.Post.encode(message.post, writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

AddStampToPostResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.AddStampToPostResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.post = $root.social.mixi.application.model.v1.Post.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

AddStampToPostResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.AddStampToPostResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.AddStampToPostResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.AddStampToPostResponse();
if (object.post != null) {
if (!$util.isObject(object.post))
throw TypeError(".social.mixi.application.service.application_api.v1.AddStampToPostResponse.post: object expected");
message.post = $root.social.mixi.application.model.v1.Post.fromObject(object.post, long + 1);
}
return message;
};

AddStampToPostResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.post = null;
if (message.post != null && Object.hasOwnProperty.call(message, "post"))
object.post = $root.social.mixi.application.model.v1.Post.toObject(message.post, options, q + 1);
return object;
};

AddStampToPostResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return AddStampToPostResponse;
})();

v1.SendDirectMessageToCommunityMemberRequest = (function() {

function SendDirectMessageToCommunityMemberRequest(properties) {
this.mediaIds = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SendDirectMessageToCommunityMemberRequest.prototype.receiverId = "";
SendDirectMessageToCommunityMemberRequest.prototype.communityId = "";
SendDirectMessageToCommunityMemberRequest.prototype.text = null;
SendDirectMessageToCommunityMemberRequest.prototype.mediaIds = $util.emptyArray;
SendDirectMessageToCommunityMemberRequest.prototype.postId = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(SendDirectMessageToCommunityMemberRequest.prototype, "_text", {
get: $util.oneOfGetter($oneOfFields = ["text"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(SendDirectMessageToCommunityMemberRequest.prototype, "_postId", {
get: $util.oneOfGetter($oneOfFields = ["postId"]),
set: $util.oneOfSetter($oneOfFields)
});

SendDirectMessageToCommunityMemberRequest.create = function create(properties) {
return new SendDirectMessageToCommunityMemberRequest(properties);
};

SendDirectMessageToCommunityMemberRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
writer.uint32(10).string(message.receiverId);
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(18).string(message.communityId);
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
writer.uint32(26).string(message.text);
if (message.mediaIds != null && message.mediaIds.length)
for (let i = 0; i < message.mediaIds.length; ++i)
writer.uint32(34).string(message.mediaIds[i]);
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
writer.uint32(42).string(message.postId);
return writer;
};

SendDirectMessageToCommunityMemberRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.receiverId = reader.string();
break;
}
case 2: {
message.communityId = reader.string();
break;
}
case 3: {
message.text = reader.string();
break;
}
case 4: {
if (!(message.mediaIds && message.mediaIds.length))
message.mediaIds = [];
message.mediaIds.push(reader.string());
break;
}
case 5: {
message.postId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SendDirectMessageToCommunityMemberRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest();
if (object.receiverId != null)
message.receiverId = String(object.receiverId);
if (object.communityId != null)
message.communityId = String(object.communityId);
if (object.text != null)
message.text = String(object.text);
if (object.mediaIds) {
if (!Array.isArray(object.mediaIds))
throw TypeError(".social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberRequest.mediaIds: array expected");
message.mediaIds = [];
for (let i = 0; i < object.mediaIds.length; ++i)
message.mediaIds[i] = String(object.mediaIds[i]);
}
if (object.postId != null)
message.postId = String(object.postId);
return message;
};

SendDirectMessageToCommunityMemberRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.mediaIds = [];
if (options.defaults) {
object.receiverId = "";
object.communityId = "";
}
if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
object.receiverId = message.receiverId;
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
object.communityId = message.communityId;
if (message.text != null && Object.hasOwnProperty.call(message, "text")) {
object.text = message.text;
if (options.oneofs)
object._text = "text";
}
if (message.mediaIds && message.mediaIds.length) {
object.mediaIds = [];
for (let j = 0; j < message.mediaIds.length; ++j)
object.mediaIds[j] = message.mediaIds[j];
}
if (message.postId != null && Object.hasOwnProperty.call(message, "postId")) {
object.postId = message.postId;
if (options.oneofs)
object._postId = "postId";
}
return object;
};

SendDirectMessageToCommunityMemberRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SendDirectMessageToCommunityMemberRequest;
})();

v1.SendDirectMessageToCommunityMemberResponse = (function() {

function SendDirectMessageToCommunityMemberResponse(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SendDirectMessageToCommunityMemberResponse.prototype.message = null;

SendDirectMessageToCommunityMemberResponse.create = function create(properties) {
return new SendDirectMessageToCommunityMemberResponse(properties);
};

SendDirectMessageToCommunityMemberResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
$root.social.mixi.application.model.v1.ChatMessage.encode(message.message, writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

SendDirectMessageToCommunityMemberResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.message = $root.social.mixi.application.model.v1.ChatMessage.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SendDirectMessageToCommunityMemberResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse();
if (object.message != null) {
if (!$util.isObject(object.message))
throw TypeError(".social.mixi.application.service.application_api.v1.SendDirectMessageToCommunityMemberResponse.message: object expected");
message.message = $root.social.mixi.application.model.v1.ChatMessage.fromObject(object.message, long + 1);
}
return message;
};

SendDirectMessageToCommunityMemberResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.message = null;
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
object.message = $root.social.mixi.application.model.v1.ChatMessage.toObject(message.message, options, q + 1);
return object;
};

SendDirectMessageToCommunityMemberResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SendDirectMessageToCommunityMemberResponse;
})();

return v1;
})();

return application_api;
})();

service.application_stream = (function() {

const application_stream = {};

application_stream.v1 = (function() {

const v1 = {};

v1.SubscribeEventsRequest = (function() {

function SubscribeEventsRequest(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SubscribeEventsRequest.create = function create(properties) {
return new SubscribeEventsRequest(properties);
};

SubscribeEventsRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
return writer;
};

SubscribeEventsRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_stream.v1.SubscribeEventsRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SubscribeEventsRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_stream.v1.SubscribeEventsRequest)
return object;
return new $root.social.mixi.application.service.application_stream.v1.SubscribeEventsRequest();
};

SubscribeEventsRequest.toObject = function toObject() {
return {};
};

SubscribeEventsRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SubscribeEventsRequest;
})();

v1.SubscribeEventsResponse = (function() {

function SubscribeEventsResponse(properties) {
this.events = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SubscribeEventsResponse.prototype.events = $util.emptyArray;

SubscribeEventsResponse.create = function create(properties) {
return new SubscribeEventsResponse(properties);
};

SubscribeEventsResponse.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.events != null && message.events.length)
for (let i = 0; i < message.events.length; ++i)
$root.social.mixi.application.model.v1.Event.encode(message.events[i], writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

SubscribeEventsResponse.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.application_stream.v1.SubscribeEventsResponse();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.events && message.events.length))
message.events = [];
message.events.push($root.social.mixi.application.model.v1.Event.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SubscribeEventsResponse.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.application_stream.v1.SubscribeEventsResponse)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.application_stream.v1.SubscribeEventsResponse: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.application_stream.v1.SubscribeEventsResponse();
if (object.events) {
if (!Array.isArray(object.events))
throw TypeError(".social.mixi.application.service.application_stream.v1.SubscribeEventsResponse.events: array expected");
message.events = [];
for (let i = 0; i < object.events.length; ++i) {
if (!$util.isObject(object.events[i]))
throw TypeError(".social.mixi.application.service.application_stream.v1.SubscribeEventsResponse.events: object expected");
message.events[i] = $root.social.mixi.application.model.v1.Event.fromObject(object.events[i], long + 1);
}
}
return message;
};

SubscribeEventsResponse.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.events = [];
if (message.events && message.events.length) {
object.events = [];
for (let j = 0; j < message.events.length; ++j)
object.events[j] = $root.social.mixi.application.model.v1.Event.toObject(message.events[j], options, q + 1);
}
return object;
};

SubscribeEventsResponse.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SubscribeEventsResponse;
})();

return v1;
})();

return application_stream;
})();

service.client_endpoint = (function() {

const client_endpoint = {};

client_endpoint.v1 = (function() {

const v1 = {};

v1.SendEventRequest = (function() {

function SendEventRequest(properties) {
this.events = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

SendEventRequest.prototype.events = $util.emptyArray;

SendEventRequest.create = function create(properties) {
return new SendEventRequest(properties);
};

SendEventRequest.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.events != null && message.events.length)
for (let i = 0; i < message.events.length; ++i)
$root.social.mixi.application.model.v1.Event.encode(message.events[i], writer.uint32(10).fork(), q + 1).ldelim();
return writer;
};

SendEventRequest.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.service.client_endpoint.v1.SendEventRequest();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.events && message.events.length))
message.events = [];
message.events.push($root.social.mixi.application.model.v1.Event.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

SendEventRequest.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.service.client_endpoint.v1.SendEventRequest)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.service.client_endpoint.v1.SendEventRequest: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.service.client_endpoint.v1.SendEventRequest();
if (object.events) {
if (!Array.isArray(object.events))
throw TypeError(".social.mixi.application.service.client_endpoint.v1.SendEventRequest.events: array expected");
message.events = [];
for (let i = 0; i < object.events.length; ++i) {
if (!$util.isObject(object.events[i]))
throw TypeError(".social.mixi.application.service.client_endpoint.v1.SendEventRequest.events: object expected");
message.events[i] = $root.social.mixi.application.model.v1.Event.fromObject(object.events[i], long + 1);
}
}
return message;
};

SendEventRequest.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.events = [];
if (message.events && message.events.length) {
object.events = [];
for (let j = 0; j < message.events.length; ++j)
object.events[j] = $root.social.mixi.application.model.v1.Event.toObject(message.events[j], options, q + 1);
}
return object;
};

SendEventRequest.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return SendEventRequest;
})();

return v1;
})();

return client_endpoint;
})();

return service;
})();

application.const_ = (function() {

const const_ = {};

const_.v1 = (function() {

const v1 = {};

v1.LanguageCode = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "LANGUAGE_CODE_UNSPECIFIED"] = 0;
values[valuesById[1] = "LANGUAGE_CODE_JP"] = 1;
values[valuesById[2] = "LANGUAGE_CODE_EN"] = 2;
return values;
})();

v1.PostPublishingType = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "POST_PUBLISHING_TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "POST_PUBLISHING_TYPE_NOT_PUBLISHING"] = 1;
return values;
})();

v1.ApplicationRequirement = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "APPLICATION_REQUIREMENT_UNSPECIFIED"] = 0;
values[valuesById[1] = "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_READ"] = 1;
values[valuesById[2] = "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_CREATE"] = 2;
values[valuesById[3] = "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_RESTRICT"] = 3;
values[valuesById[4] = "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_MEMBER_LIST_READ"] = 4;
values[valuesById[10] = "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_STAMP_CREATE"] = 10;
values[valuesById[11] = "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_MEMBER_DIRECT_MESSAGE_CREATE"] = 11;
values[valuesById[5] = "APPLICATION_REQUIREMENT_EVENT_REACTION_REPLY"] = 5;
values[valuesById[6] = "APPLICATION_REQUIREMENT_EVENT_REACTION_MENTION"] = 6;
values[valuesById[7] = "APPLICATION_REQUIREMENT_EVENT_COMMUNITY_POST_CREATED"] = 7;
values[valuesById[8] = "APPLICATION_REQUIREMENT_EVENT_COMMUNITY_MEMBER_JOINED"] = 8;
values[valuesById[9] = "APPLICATION_REQUIREMENT_EVENT_DIRECT_MESSAGE_RECEIVED"] = 9;
return values;
})();

v1.CommunityAccessLevel = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "COMMUNITY_ACCESS_LEVEL_UNSPECIFIED"] = 0;
values[valuesById[1] = "COMMUNITY_ACCESS_LEVEL_PUBLIC"] = 1;
values[valuesById[2] = "COMMUNITY_ACCESS_LEVEL_APPROVAL_REQUIRED"] = 2;
return values;
})();

v1.CommunityVisibility = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "COMMUNITY_VISIBILITY_UNSPECIFIED"] = 0;
values[valuesById[1] = "COMMUNITY_VISIBILITY_VISIBLE"] = 1;
values[valuesById[2] = "COMMUNITY_VISIBILITY_INVISIBLE"] = 2;
return values;
})();

v1.MediaType = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "MEDIA_TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "MEDIA_TYPE_IMAGE"] = 1;
values[valuesById[2] = "MEDIA_TYPE_VIDEO"] = 2;
return values;
})();

v1.PostAccessLevel = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "POST_ACCESS_LEVEL_UNSPECIFIED"] = 0;
values[valuesById[1] = "POST_ACCESS_LEVEL_PUBLIC"] = 1;
values[valuesById[2] = "POST_ACCESS_LEVEL_PRIVATE"] = 2;
return values;
})();

v1.PostMaskType = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "POST_MASK_TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "POST_MASK_TYPE_SENSITIVE"] = 1;
values[valuesById[2] = "POST_MASK_TYPE_SPOILER"] = 2;
return values;
})();

v1.PostMediaType = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "POST_MEDIA_TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "POST_MEDIA_TYPE_IMAGE"] = 1;
values[valuesById[2] = "POST_MEDIA_TYPE_VIDEO"] = 2;
return values;
})();

v1.PostVisibility = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "POST_VISIBILITY_UNSPECIFIED"] = 0;
values[valuesById[1] = "POST_VISIBILITY_VISIBLE"] = 1;
values[valuesById[2] = "POST_VISIBILITY_INVISIBLE"] = 2;
return values;
})();

v1.StampSetType = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "STAMP_SET_TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "STAMP_SET_TYPE_DEFAULT"] = 1;
values[valuesById[2] = "STAMP_SET_TYPE_SEASONAL"] = 2;
return values;
})();

v1.UserAccessLevel = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "USER_ACCESS_LEVEL_UNSPECIFIED"] = 0;
values[valuesById[1] = "USER_ACCESS_LEVEL_PUBLIC"] = 1;
values[valuesById[2] = "USER_ACCESS_LEVEL_PRIVATE"] = 2;
return values;
})();

v1.UserVisibility = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "USER_VISIBILITY_UNSPECIFIED"] = 0;
values[valuesById[1] = "USER_VISIBILITY_VISIBLE"] = 1;
values[valuesById[2] = "USER_VISIBILITY_INVISIBLE"] = 2;
return values;
})();

v1.EventReason = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "EVENT_REASON_UNSPECIFIED"] = 0;
values[valuesById[1] = "EVENT_REASON_PING"] = 1;
values[valuesById[2] = "EVENT_REASON_POST_REPLY"] = 2;
values[valuesById[3] = "EVENT_REASON_POST_MENTIONED"] = 3;
values[valuesById[4] = "EVENT_REASON_POST_QUOTED"] = 4;
values[valuesById[5] = "EVENT_REASON_POST_COMMUNITY"] = 5;
values[valuesById[6] = "EVENT_REASON_COMMUNITY_MEMBER_JOINED"] = 6;
values[valuesById[7] = "EVENT_REASON_COMMUNITY_MEMBER_LEFT"] = 7;
values[valuesById[8] = "EVENT_REASON_DIRECT_MESSAGE_RECEIVED"] = 8;
values[valuesById[9] = "EVENT_REASON_COMMUNITY_PLUGIN_INSTALLED"] = 9;
values[valuesById[10] = "EVENT_REASON_COMMUNITY_PLUGIN_UNINSTALLED"] = 10;
return values;
})();

v1.EventType = (function() {
const valuesById = {}, values = Object.create(valuesById);
values[valuesById[0] = "EVENT_TYPE_UNSPECIFIED"] = 0;
values[valuesById[1] = "EVENT_TYPE_PING"] = 1;
values[valuesById[2] = "EVENT_TYPE_POST_CREATED"] = 2;
values[valuesById[3] = "EVENT_TYPE_COMMUNITY_MEMBER_CHANGED"] = 3;
values[valuesById[4] = "EVENT_TYPE_CHAT_MESSAGE_RECEIVED"] = 4;
values[valuesById[5] = "EVENT_TYPE_COMMUNITY_PLUGIN_MANAGED"] = 5;
return values;
})();

return v1;
})();

return const_;
})();

application.model = (function() {

const model = {};

model.v1 = (function() {

const v1 = {};

v1.ApplicationVersion = (function() {

function ApplicationVersion(properties) {
this.requirements = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

ApplicationVersion.prototype.applicationVersionId = "";
ApplicationVersion.prototype.applicationId = "";
ApplicationVersion.prototype.requirements = $util.emptyArray;

ApplicationVersion.create = function create(properties) {
return new ApplicationVersion(properties);
};

ApplicationVersion.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.applicationVersionId != null && Object.hasOwnProperty.call(message, "applicationVersionId"))
writer.uint32(10).string(message.applicationVersionId);
if (message.applicationId != null && Object.hasOwnProperty.call(message, "applicationId"))
writer.uint32(18).string(message.applicationId);
if (message.requirements != null && message.requirements.length) {
writer.uint32(26).fork();
for (let i = 0; i < message.requirements.length; ++i)
writer.int32(message.requirements[i]);
writer.ldelim();
}
return writer;
};

ApplicationVersion.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.ApplicationVersion();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.applicationVersionId = reader.string();
break;
}
case 2: {
message.applicationId = reader.string();
break;
}
case 3: {
if (!(message.requirements && message.requirements.length))
message.requirements = [];
if ((tag & 7) === 2) {
let end2 = reader.uint32() + reader.pos;
if (end2 > reader.len)
throw RangeError("index out of range");
reader.len = end2;
while (reader.pos < end2)
message.requirements.push(reader.int32());
if (reader.pos !== end2)
throw RangeError("index out of range");
reader.len = end;
} else
message.requirements.push(reader.int32());
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

ApplicationVersion.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.ApplicationVersion)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.ApplicationVersion: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.ApplicationVersion();
if (object.applicationVersionId != null)
message.applicationVersionId = String(object.applicationVersionId);
if (object.applicationId != null)
message.applicationId = String(object.applicationId);
if (object.requirements) {
if (!Array.isArray(object.requirements))
throw TypeError(".social.mixi.application.model.v1.ApplicationVersion.requirements: array expected");
message.requirements = [];
for (let i = 0; i < object.requirements.length; ++i)
switch (object.requirements[i]) {
default:
if (typeof object.requirements[i] === "number") {
message.requirements[i] = object.requirements[i];
break;
}
case "APPLICATION_REQUIREMENT_UNSPECIFIED":
case 0:
message.requirements[i] = 0;
break;
case "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_READ":
case 1:
message.requirements[i] = 1;
break;
case "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_CREATE":
case 2:
message.requirements[i] = 2;
break;
case "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_RESTRICT":
case 3:
message.requirements[i] = 3;
break;
case "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_MEMBER_LIST_READ":
case 4:
message.requirements[i] = 4;
break;
case "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_POST_STAMP_CREATE":
case 10:
message.requirements[i] = 10;
break;
case "APPLICATION_REQUIREMENT_PERMISSION_COMMUNITY_MEMBER_DIRECT_MESSAGE_CREATE":
case 11:
message.requirements[i] = 11;
break;
case "APPLICATION_REQUIREMENT_EVENT_REACTION_REPLY":
case 5:
message.requirements[i] = 5;
break;
case "APPLICATION_REQUIREMENT_EVENT_REACTION_MENTION":
case 6:
message.requirements[i] = 6;
break;
case "APPLICATION_REQUIREMENT_EVENT_COMMUNITY_POST_CREATED":
case 7:
message.requirements[i] = 7;
break;
case "APPLICATION_REQUIREMENT_EVENT_COMMUNITY_MEMBER_JOINED":
case 8:
message.requirements[i] = 8;
break;
case "APPLICATION_REQUIREMENT_EVENT_DIRECT_MESSAGE_RECEIVED":
case 9:
message.requirements[i] = 9;
break;
}
}
return message;
};

ApplicationVersion.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.requirements = [];
if (options.defaults) {
object.applicationVersionId = "";
object.applicationId = "";
}
if (message.applicationVersionId != null && Object.hasOwnProperty.call(message, "applicationVersionId"))
object.applicationVersionId = message.applicationVersionId;
if (message.applicationId != null && Object.hasOwnProperty.call(message, "applicationId"))
object.applicationId = message.applicationId;
if (message.requirements && message.requirements.length) {
object.requirements = [];
for (let j = 0; j < message.requirements.length; ++j)
object.requirements[j] = options.enums === String ? $root.social.mixi.application.const_.v1.ApplicationRequirement[message.requirements[j]] === undefined ? message.requirements[j] : $root.social.mixi.application.const_.v1.ApplicationRequirement[message.requirements[j]] : message.requirements[j];
}
return object;
};

ApplicationVersion.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return ApplicationVersion;
})();

v1.Community = (function() {

function Community(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

Community.prototype.communityId = "";
Community.prototype.name = "";
Community.prototype.purpose = "";
Community.prototype.isArchived = false;
Community.prototype.visibility = 0;
Community.prototype.accessLevel = 0;

Community.create = function create(properties) {
return new Community(properties);
};

Community.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(10).string(message.communityId);
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(18).string(message.name);
if (message.purpose != null && Object.hasOwnProperty.call(message, "purpose"))
writer.uint32(26).string(message.purpose);
if (message.isArchived != null && Object.hasOwnProperty.call(message, "isArchived"))
writer.uint32(32).bool(message.isArchived);
if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
writer.uint32(40).int32(message.visibility);
if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
writer.uint32(48).int32(message.accessLevel);
return writer;
};

Community.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.Community();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.communityId = reader.string();
break;
}
case 2: {
message.name = reader.string();
break;
}
case 3: {
message.purpose = reader.string();
break;
}
case 4: {
message.isArchived = reader.bool();
break;
}
case 5: {
message.visibility = reader.int32();
break;
}
case 6: {
message.accessLevel = reader.int32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

Community.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.Community)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.Community: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.Community();
if (object.communityId != null)
message.communityId = String(object.communityId);
if (object.name != null)
message.name = String(object.name);
if (object.purpose != null)
message.purpose = String(object.purpose);
if (object.isArchived != null)
message.isArchived = Boolean(object.isArchived);
switch (object.visibility) {
default:
if (typeof object.visibility === "number") {
message.visibility = object.visibility;
break;
}
break;
case "COMMUNITY_VISIBILITY_UNSPECIFIED":
case 0:
message.visibility = 0;
break;
case "COMMUNITY_VISIBILITY_VISIBLE":
case 1:
message.visibility = 1;
break;
case "COMMUNITY_VISIBILITY_INVISIBLE":
case 2:
message.visibility = 2;
break;
}
switch (object.accessLevel) {
default:
if (typeof object.accessLevel === "number") {
message.accessLevel = object.accessLevel;
break;
}
break;
case "COMMUNITY_ACCESS_LEVEL_UNSPECIFIED":
case 0:
message.accessLevel = 0;
break;
case "COMMUNITY_ACCESS_LEVEL_PUBLIC":
case 1:
message.accessLevel = 1;
break;
case "COMMUNITY_ACCESS_LEVEL_APPROVAL_REQUIRED":
case 2:
message.accessLevel = 2;
break;
}
return message;
};

Community.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.communityId = "";
object.name = "";
object.purpose = "";
object.isArchived = false;
object.visibility = options.enums === String ? "COMMUNITY_VISIBILITY_UNSPECIFIED" : 0;
object.accessLevel = options.enums === String ? "COMMUNITY_ACCESS_LEVEL_UNSPECIFIED" : 0;
}
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
object.communityId = message.communityId;
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
object.name = message.name;
if (message.purpose != null && Object.hasOwnProperty.call(message, "purpose"))
object.purpose = message.purpose;
if (message.isArchived != null && Object.hasOwnProperty.call(message, "isArchived"))
object.isArchived = message.isArchived;
if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
object.visibility = options.enums === String ? $root.social.mixi.application.const_.v1.CommunityVisibility[message.visibility] === undefined ? message.visibility : $root.social.mixi.application.const_.v1.CommunityVisibility[message.visibility] : message.visibility;
if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
object.accessLevel = options.enums === String ? $root.social.mixi.application.const_.v1.CommunityAccessLevel[message.accessLevel] === undefined ? message.accessLevel : $root.social.mixi.application.const_.v1.CommunityAccessLevel[message.accessLevel] : message.accessLevel;
return object;
};

Community.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return Community;
})();

v1.CommunityUsingApplication = (function() {

function CommunityUsingApplication(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CommunityUsingApplication.prototype.community = null;
CommunityUsingApplication.prototype.applicationVersionId = "";

CommunityUsingApplication.create = function create(properties) {
return new CommunityUsingApplication(properties);
};

CommunityUsingApplication.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.community != null && Object.hasOwnProperty.call(message, "community"))
$root.social.mixi.application.model.v1.Community.encode(message.community, writer.uint32(10).fork(), q + 1).ldelim();
if (message.applicationVersionId != null && Object.hasOwnProperty.call(message, "applicationVersionId"))
writer.uint32(18).string(message.applicationVersionId);
return writer;
};

CommunityUsingApplication.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.CommunityUsingApplication();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.community = $root.social.mixi.application.model.v1.Community.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 2: {
message.applicationVersionId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CommunityUsingApplication.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.CommunityUsingApplication)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.CommunityUsingApplication: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.CommunityUsingApplication();
if (object.community != null) {
if (!$util.isObject(object.community))
throw TypeError(".social.mixi.application.model.v1.CommunityUsingApplication.community: object expected");
message.community = $root.social.mixi.application.model.v1.Community.fromObject(object.community, long + 1);
}
if (object.applicationVersionId != null)
message.applicationVersionId = String(object.applicationVersionId);
return message;
};

CommunityUsingApplication.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.community = null;
object.applicationVersionId = "";
}
if (message.community != null && Object.hasOwnProperty.call(message, "community"))
object.community = $root.social.mixi.application.model.v1.Community.toObject(message.community, options, q + 1);
if (message.applicationVersionId != null && Object.hasOwnProperty.call(message, "applicationVersionId"))
object.applicationVersionId = message.applicationVersionId;
return object;
};

CommunityUsingApplication.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CommunityUsingApplication;
})();

v1.ChatMessage = (function() {

function ChatMessage(properties) {
this.mediaList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

ChatMessage.prototype.roomId = "";
ChatMessage.prototype.messageId = "";
ChatMessage.prototype.creatorId = "";
ChatMessage.prototype.text = "";
ChatMessage.prototype.createdAt = null;
ChatMessage.prototype.mediaList = $util.emptyArray;
ChatMessage.prototype.postId = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(ChatMessage.prototype, "_postId", {
get: $util.oneOfGetter($oneOfFields = ["postId"]),
set: $util.oneOfSetter($oneOfFields)
});

ChatMessage.create = function create(properties) {
return new ChatMessage(properties);
};

ChatMessage.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
writer.uint32(10).string(message.roomId);
if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
writer.uint32(18).string(message.messageId);
if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
writer.uint32(26).string(message.creatorId);
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
writer.uint32(34).string(message.text);
if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
$root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(42).fork(), q + 1).ldelim();
if (message.mediaList != null && message.mediaList.length)
for (let i = 0; i < message.mediaList.length; ++i)
$root.social.mixi.application.model.v1.Media.encode(message.mediaList[i], writer.uint32(50).fork(), q + 1).ldelim();
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
writer.uint32(58).string(message.postId);
return writer;
};

ChatMessage.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.ChatMessage();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.roomId = reader.string();
break;
}
case 2: {
message.messageId = reader.string();
break;
}
case 3: {
message.creatorId = reader.string();
break;
}
case 4: {
message.text = reader.string();
break;
}
case 5: {
message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 6: {
if (!(message.mediaList && message.mediaList.length))
message.mediaList = [];
message.mediaList.push($root.social.mixi.application.model.v1.Media.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 7: {
message.postId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

ChatMessage.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.ChatMessage)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.ChatMessage: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.ChatMessage();
if (object.roomId != null)
message.roomId = String(object.roomId);
if (object.messageId != null)
message.messageId = String(object.messageId);
if (object.creatorId != null)
message.creatorId = String(object.creatorId);
if (object.text != null)
message.text = String(object.text);
if (object.createdAt != null) {
if (!$util.isObject(object.createdAt))
throw TypeError(".social.mixi.application.model.v1.ChatMessage.createdAt: object expected");
message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt, long + 1);
}
if (object.mediaList) {
if (!Array.isArray(object.mediaList))
throw TypeError(".social.mixi.application.model.v1.ChatMessage.mediaList: array expected");
message.mediaList = [];
for (let i = 0; i < object.mediaList.length; ++i) {
if (!$util.isObject(object.mediaList[i]))
throw TypeError(".social.mixi.application.model.v1.ChatMessage.mediaList: object expected");
message.mediaList[i] = $root.social.mixi.application.model.v1.Media.fromObject(object.mediaList[i], long + 1);
}
}
if (object.postId != null)
message.postId = String(object.postId);
return message;
};

ChatMessage.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.mediaList = [];
if (options.defaults) {
object.roomId = "";
object.messageId = "";
object.creatorId = "";
object.text = "";
object.createdAt = null;
}
if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
object.roomId = message.roomId;
if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
object.messageId = message.messageId;
if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
object.creatorId = message.creatorId;
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
object.text = message.text;
if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options, q + 1);
if (message.mediaList && message.mediaList.length) {
object.mediaList = [];
for (let j = 0; j < message.mediaList.length; ++j)
object.mediaList[j] = $root.social.mixi.application.model.v1.Media.toObject(message.mediaList[j], options, q + 1);
}
if (message.postId != null && Object.hasOwnProperty.call(message, "postId")) {
object.postId = message.postId;
if (options.oneofs)
object._postId = "postId";
}
return object;
};

ChatMessage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return ChatMessage;
})();

v1.Media = (function() {

function Media(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

Media.prototype.mediaType = 0;
Media.prototype.image = null;
Media.prototype.video = null;

let $oneOfFields;

Object.defineProperty(Media.prototype, "content", {
get: $util.oneOfGetter($oneOfFields = ["image", "video"]),
set: $util.oneOfSetter($oneOfFields)
});

Media.create = function create(properties) {
return new Media(properties);
};

Media.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
writer.uint32(8).int32(message.mediaType);
if (message.image != null && Object.hasOwnProperty.call(message, "image"))
$root.social.mixi.application.model.v1.MediaImage.encode(message.image, writer.uint32(18).fork(), q + 1).ldelim();
if (message.video != null && Object.hasOwnProperty.call(message, "video"))
$root.social.mixi.application.model.v1.MediaVideo.encode(message.video, writer.uint32(26).fork(), q + 1).ldelim();
return writer;
};

Media.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.Media();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.mediaType = reader.int32();
break;
}
case 2: {
message.image = $root.social.mixi.application.model.v1.MediaImage.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 3: {
message.video = $root.social.mixi.application.model.v1.MediaVideo.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

Media.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.Media)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.Media: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.Media();
switch (object.mediaType) {
default:
if (typeof object.mediaType === "number") {
message.mediaType = object.mediaType;
break;
}
break;
case "MEDIA_TYPE_UNSPECIFIED":
case 0:
message.mediaType = 0;
break;
case "MEDIA_TYPE_IMAGE":
case 1:
message.mediaType = 1;
break;
case "MEDIA_TYPE_VIDEO":
case 2:
message.mediaType = 2;
break;
}
if (object.image != null) {
if (!$util.isObject(object.image))
throw TypeError(".social.mixi.application.model.v1.Media.image: object expected");
message.image = $root.social.mixi.application.model.v1.MediaImage.fromObject(object.image, long + 1);
}
if (object.video != null) {
if (!$util.isObject(object.video))
throw TypeError(".social.mixi.application.model.v1.Media.video: object expected");
message.video = $root.social.mixi.application.model.v1.MediaVideo.fromObject(object.video, long + 1);
}
return message;
};

Media.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.mediaType = options.enums === String ? "MEDIA_TYPE_UNSPECIFIED" : 0;
if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
object.mediaType = options.enums === String ? $root.social.mixi.application.const_.v1.MediaType[message.mediaType] === undefined ? message.mediaType : $root.social.mixi.application.const_.v1.MediaType[message.mediaType] : message.mediaType;
if (message.image != null && Object.hasOwnProperty.call(message, "image")) {
object.image = $root.social.mixi.application.model.v1.MediaImage.toObject(message.image, options, q + 1);
if (options.oneofs)
object.content = "image";
}
if (message.video != null && Object.hasOwnProperty.call(message, "video")) {
object.video = $root.social.mixi.application.model.v1.MediaVideo.toObject(message.video, options, q + 1);
if (options.oneofs)
object.content = "video";
}
return object;
};

Media.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return Media;
})();

v1.MediaImage = (function() {

function MediaImage(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

MediaImage.prototype.largeImageUrl = "";
MediaImage.prototype.largeImageMimeType = "";
MediaImage.prototype.largeImageHeight = 0;
MediaImage.prototype.largeImageWidth = 0;
MediaImage.prototype.smallImageUrl = "";
MediaImage.prototype.smallImageMimeType = "";
MediaImage.prototype.smallImageHeight = 0;
MediaImage.prototype.smallImageWidth = 0;

MediaImage.create = function create(properties) {
return new MediaImage(properties);
};

MediaImage.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.largeImageUrl != null && Object.hasOwnProperty.call(message, "largeImageUrl"))
writer.uint32(10).string(message.largeImageUrl);
if (message.largeImageMimeType != null && Object.hasOwnProperty.call(message, "largeImageMimeType"))
writer.uint32(18).string(message.largeImageMimeType);
if (message.largeImageHeight != null && Object.hasOwnProperty.call(message, "largeImageHeight"))
writer.uint32(24).uint32(message.largeImageHeight);
if (message.largeImageWidth != null && Object.hasOwnProperty.call(message, "largeImageWidth"))
writer.uint32(32).uint32(message.largeImageWidth);
if (message.smallImageUrl != null && Object.hasOwnProperty.call(message, "smallImageUrl"))
writer.uint32(42).string(message.smallImageUrl);
if (message.smallImageMimeType != null && Object.hasOwnProperty.call(message, "smallImageMimeType"))
writer.uint32(50).string(message.smallImageMimeType);
if (message.smallImageHeight != null && Object.hasOwnProperty.call(message, "smallImageHeight"))
writer.uint32(56).uint32(message.smallImageHeight);
if (message.smallImageWidth != null && Object.hasOwnProperty.call(message, "smallImageWidth"))
writer.uint32(64).uint32(message.smallImageWidth);
return writer;
};

MediaImage.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.MediaImage();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.largeImageUrl = reader.string();
break;
}
case 2: {
message.largeImageMimeType = reader.string();
break;
}
case 3: {
message.largeImageHeight = reader.uint32();
break;
}
case 4: {
message.largeImageWidth = reader.uint32();
break;
}
case 5: {
message.smallImageUrl = reader.string();
break;
}
case 6: {
message.smallImageMimeType = reader.string();
break;
}
case 7: {
message.smallImageHeight = reader.uint32();
break;
}
case 8: {
message.smallImageWidth = reader.uint32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

MediaImage.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.MediaImage)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.MediaImage: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.MediaImage();
if (object.largeImageUrl != null)
message.largeImageUrl = String(object.largeImageUrl);
if (object.largeImageMimeType != null)
message.largeImageMimeType = String(object.largeImageMimeType);
if (object.largeImageHeight != null)
message.largeImageHeight = object.largeImageHeight >>> 0;
if (object.largeImageWidth != null)
message.largeImageWidth = object.largeImageWidth >>> 0;
if (object.smallImageUrl != null)
message.smallImageUrl = String(object.smallImageUrl);
if (object.smallImageMimeType != null)
message.smallImageMimeType = String(object.smallImageMimeType);
if (object.smallImageHeight != null)
message.smallImageHeight = object.smallImageHeight >>> 0;
if (object.smallImageWidth != null)
message.smallImageWidth = object.smallImageWidth >>> 0;
return message;
};

MediaImage.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.largeImageUrl = "";
object.largeImageMimeType = "";
object.largeImageHeight = 0;
object.largeImageWidth = 0;
object.smallImageUrl = "";
object.smallImageMimeType = "";
object.smallImageHeight = 0;
object.smallImageWidth = 0;
}
if (message.largeImageUrl != null && Object.hasOwnProperty.call(message, "largeImageUrl"))
object.largeImageUrl = message.largeImageUrl;
if (message.largeImageMimeType != null && Object.hasOwnProperty.call(message, "largeImageMimeType"))
object.largeImageMimeType = message.largeImageMimeType;
if (message.largeImageHeight != null && Object.hasOwnProperty.call(message, "largeImageHeight"))
object.largeImageHeight = message.largeImageHeight;
if (message.largeImageWidth != null && Object.hasOwnProperty.call(message, "largeImageWidth"))
object.largeImageWidth = message.largeImageWidth;
if (message.smallImageUrl != null && Object.hasOwnProperty.call(message, "smallImageUrl"))
object.smallImageUrl = message.smallImageUrl;
if (message.smallImageMimeType != null && Object.hasOwnProperty.call(message, "smallImageMimeType"))
object.smallImageMimeType = message.smallImageMimeType;
if (message.smallImageHeight != null && Object.hasOwnProperty.call(message, "smallImageHeight"))
object.smallImageHeight = message.smallImageHeight;
if (message.smallImageWidth != null && Object.hasOwnProperty.call(message, "smallImageWidth"))
object.smallImageWidth = message.smallImageWidth;
return object;
};

MediaImage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return MediaImage;
})();

v1.MediaVideo = (function() {

function MediaVideo(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

MediaVideo.prototype.videoUrl = "";
MediaVideo.prototype.videoMimeType = "";
MediaVideo.prototype.videoHeight = 0;
MediaVideo.prototype.videoWidth = 0;
MediaVideo.prototype.previewImageUrl = "";
MediaVideo.prototype.previewImageMimeType = "";
MediaVideo.prototype.previewImageHeight = 0;
MediaVideo.prototype.previewImageWidth = 0;
MediaVideo.prototype.duration = 0;

MediaVideo.create = function create(properties) {
return new MediaVideo(properties);
};

MediaVideo.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.videoUrl != null && Object.hasOwnProperty.call(message, "videoUrl"))
writer.uint32(10).string(message.videoUrl);
if (message.videoMimeType != null && Object.hasOwnProperty.call(message, "videoMimeType"))
writer.uint32(18).string(message.videoMimeType);
if (message.videoHeight != null && Object.hasOwnProperty.call(message, "videoHeight"))
writer.uint32(24).uint32(message.videoHeight);
if (message.videoWidth != null && Object.hasOwnProperty.call(message, "videoWidth"))
writer.uint32(32).uint32(message.videoWidth);
if (message.previewImageUrl != null && Object.hasOwnProperty.call(message, "previewImageUrl"))
writer.uint32(42).string(message.previewImageUrl);
if (message.previewImageMimeType != null && Object.hasOwnProperty.call(message, "previewImageMimeType"))
writer.uint32(50).string(message.previewImageMimeType);
if (message.previewImageHeight != null && Object.hasOwnProperty.call(message, "previewImageHeight"))
writer.uint32(56).uint32(message.previewImageHeight);
if (message.previewImageWidth != null && Object.hasOwnProperty.call(message, "previewImageWidth"))
writer.uint32(64).uint32(message.previewImageWidth);
if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
writer.uint32(77).float(message.duration);
return writer;
};

MediaVideo.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.MediaVideo();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.videoUrl = reader.string();
break;
}
case 2: {
message.videoMimeType = reader.string();
break;
}
case 3: {
message.videoHeight = reader.uint32();
break;
}
case 4: {
message.videoWidth = reader.uint32();
break;
}
case 5: {
message.previewImageUrl = reader.string();
break;
}
case 6: {
message.previewImageMimeType = reader.string();
break;
}
case 7: {
message.previewImageHeight = reader.uint32();
break;
}
case 8: {
message.previewImageWidth = reader.uint32();
break;
}
case 9: {
message.duration = reader.float();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

MediaVideo.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.MediaVideo)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.MediaVideo: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.MediaVideo();
if (object.videoUrl != null)
message.videoUrl = String(object.videoUrl);
if (object.videoMimeType != null)
message.videoMimeType = String(object.videoMimeType);
if (object.videoHeight != null)
message.videoHeight = object.videoHeight >>> 0;
if (object.videoWidth != null)
message.videoWidth = object.videoWidth >>> 0;
if (object.previewImageUrl != null)
message.previewImageUrl = String(object.previewImageUrl);
if (object.previewImageMimeType != null)
message.previewImageMimeType = String(object.previewImageMimeType);
if (object.previewImageHeight != null)
message.previewImageHeight = object.previewImageHeight >>> 0;
if (object.previewImageWidth != null)
message.previewImageWidth = object.previewImageWidth >>> 0;
if (object.duration != null)
message.duration = Number(object.duration);
return message;
};

MediaVideo.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.videoUrl = "";
object.videoMimeType = "";
object.videoHeight = 0;
object.videoWidth = 0;
object.previewImageUrl = "";
object.previewImageMimeType = "";
object.previewImageHeight = 0;
object.previewImageWidth = 0;
object.duration = 0;
}
if (message.videoUrl != null && Object.hasOwnProperty.call(message, "videoUrl"))
object.videoUrl = message.videoUrl;
if (message.videoMimeType != null && Object.hasOwnProperty.call(message, "videoMimeType"))
object.videoMimeType = message.videoMimeType;
if (message.videoHeight != null && Object.hasOwnProperty.call(message, "videoHeight"))
object.videoHeight = message.videoHeight;
if (message.videoWidth != null && Object.hasOwnProperty.call(message, "videoWidth"))
object.videoWidth = message.videoWidth;
if (message.previewImageUrl != null && Object.hasOwnProperty.call(message, "previewImageUrl"))
object.previewImageUrl = message.previewImageUrl;
if (message.previewImageMimeType != null && Object.hasOwnProperty.call(message, "previewImageMimeType"))
object.previewImageMimeType = message.previewImageMimeType;
if (message.previewImageHeight != null && Object.hasOwnProperty.call(message, "previewImageHeight"))
object.previewImageHeight = message.previewImageHeight;
if (message.previewImageWidth != null && Object.hasOwnProperty.call(message, "previewImageWidth"))
object.previewImageWidth = message.previewImageWidth;
if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
object.duration = options.json && !isFinite(message.duration) ? String(message.duration) : message.duration;
return object;
};

MediaVideo.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return MediaVideo;
})();

v1.MediaStamp = (function() {

function MediaStamp(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

MediaStamp.prototype.url = "";
MediaStamp.prototype.mimeType = "";
MediaStamp.prototype.height = 0;
MediaStamp.prototype.width = 0;

MediaStamp.create = function create(properties) {
return new MediaStamp(properties);
};

MediaStamp.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
writer.uint32(10).string(message.url);
if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
writer.uint32(18).string(message.mimeType);
if (message.height != null && Object.hasOwnProperty.call(message, "height"))
writer.uint32(24).uint32(message.height);
if (message.width != null && Object.hasOwnProperty.call(message, "width"))
writer.uint32(32).uint32(message.width);
return writer;
};

MediaStamp.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.MediaStamp();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.url = reader.string();
break;
}
case 2: {
message.mimeType = reader.string();
break;
}
case 3: {
message.height = reader.uint32();
break;
}
case 4: {
message.width = reader.uint32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

MediaStamp.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.MediaStamp)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.MediaStamp: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.MediaStamp();
if (object.url != null)
message.url = String(object.url);
if (object.mimeType != null)
message.mimeType = String(object.mimeType);
if (object.height != null)
message.height = object.height >>> 0;
if (object.width != null)
message.width = object.width >>> 0;
return message;
};

MediaStamp.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.url = "";
object.mimeType = "";
object.height = 0;
object.width = 0;
}
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
object.url = message.url;
if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
object.mimeType = message.mimeType;
if (message.height != null && Object.hasOwnProperty.call(message, "height"))
object.height = message.height;
if (message.width != null && Object.hasOwnProperty.call(message, "width"))
object.width = message.width;
return object;
};

MediaStamp.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return MediaStamp;
})();

v1.Post = (function() {

function Post(properties) {
this.postMediaList = [];
this.stamps = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

Post.prototype.postId = "";
Post.prototype.isDeleted = false;
Post.prototype.creatorId = "";
Post.prototype.text = "";
Post.prototype.createdAt = null;
Post.prototype.postMediaList = $util.emptyArray;
Post.prototype.inReplyToPostId = null;
Post.prototype.postMask = null;
Post.prototype.communityId = null;
Post.prototype.visibility = 0;
Post.prototype.accessLevel = 0;
Post.prototype.stamps = $util.emptyArray;
Post.prototype.readerStampId = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(Post.prototype, "_inReplyToPostId", {
get: $util.oneOfGetter($oneOfFields = ["inReplyToPostId"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(Post.prototype, "_postMask", {
get: $util.oneOfGetter($oneOfFields = ["postMask"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(Post.prototype, "_communityId", {
get: $util.oneOfGetter($oneOfFields = ["communityId"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(Post.prototype, "_readerStampId", {
get: $util.oneOfGetter($oneOfFields = ["readerStampId"]),
set: $util.oneOfSetter($oneOfFields)
});

Post.create = function create(properties) {
return new Post(properties);
};

Post.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
writer.uint32(10).string(message.postId);
if (message.isDeleted != null && Object.hasOwnProperty.call(message, "isDeleted"))
writer.uint32(16).bool(message.isDeleted);
if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
writer.uint32(26).string(message.creatorId);
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
writer.uint32(34).string(message.text);
if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
$root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(42).fork(), q + 1).ldelim();
if (message.postMediaList != null && message.postMediaList.length)
for (let i = 0; i < message.postMediaList.length; ++i)
$root.social.mixi.application.model.v1.PostMedia.encode(message.postMediaList[i], writer.uint32(50).fork(), q + 1).ldelim();
if (message.inReplyToPostId != null && Object.hasOwnProperty.call(message, "inReplyToPostId"))
writer.uint32(58).string(message.inReplyToPostId);
if (message.postMask != null && Object.hasOwnProperty.call(message, "postMask"))
$root.social.mixi.application.model.v1.PostMask.encode(message.postMask, writer.uint32(66).fork(), q + 1).ldelim();
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(74).string(message.communityId);
if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
writer.uint32(80).int32(message.visibility);
if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
writer.uint32(88).int32(message.accessLevel);
if (message.stamps != null && message.stamps.length)
for (let i = 0; i < message.stamps.length; ++i)
$root.social.mixi.application.model.v1.PostStamp.encode(message.stamps[i], writer.uint32(98).fork(), q + 1).ldelim();
if (message.readerStampId != null && Object.hasOwnProperty.call(message, "readerStampId"))
writer.uint32(106).string(message.readerStampId);
return writer;
};

Post.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.Post();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.postId = reader.string();
break;
}
case 2: {
message.isDeleted = reader.bool();
break;
}
case 3: {
message.creatorId = reader.string();
break;
}
case 4: {
message.text = reader.string();
break;
}
case 5: {
message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 6: {
if (!(message.postMediaList && message.postMediaList.length))
message.postMediaList = [];
message.postMediaList.push($root.social.mixi.application.model.v1.PostMedia.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 7: {
message.inReplyToPostId = reader.string();
break;
}
case 8: {
message.postMask = $root.social.mixi.application.model.v1.PostMask.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 9: {
message.communityId = reader.string();
break;
}
case 10: {
message.visibility = reader.int32();
break;
}
case 11: {
message.accessLevel = reader.int32();
break;
}
case 12: {
if (!(message.stamps && message.stamps.length))
message.stamps = [];
message.stamps.push($root.social.mixi.application.model.v1.PostStamp.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 13: {
message.readerStampId = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

Post.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.Post)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.Post: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.Post();
if (object.postId != null)
message.postId = String(object.postId);
if (object.isDeleted != null)
message.isDeleted = Boolean(object.isDeleted);
if (object.creatorId != null)
message.creatorId = String(object.creatorId);
if (object.text != null)
message.text = String(object.text);
if (object.createdAt != null) {
if (!$util.isObject(object.createdAt))
throw TypeError(".social.mixi.application.model.v1.Post.createdAt: object expected");
message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt, long + 1);
}
if (object.postMediaList) {
if (!Array.isArray(object.postMediaList))
throw TypeError(".social.mixi.application.model.v1.Post.postMediaList: array expected");
message.postMediaList = [];
for (let i = 0; i < object.postMediaList.length; ++i) {
if (!$util.isObject(object.postMediaList[i]))
throw TypeError(".social.mixi.application.model.v1.Post.postMediaList: object expected");
message.postMediaList[i] = $root.social.mixi.application.model.v1.PostMedia.fromObject(object.postMediaList[i], long + 1);
}
}
if (object.inReplyToPostId != null)
message.inReplyToPostId = String(object.inReplyToPostId);
if (object.postMask != null) {
if (!$util.isObject(object.postMask))
throw TypeError(".social.mixi.application.model.v1.Post.postMask: object expected");
message.postMask = $root.social.mixi.application.model.v1.PostMask.fromObject(object.postMask, long + 1);
}
if (object.communityId != null)
message.communityId = String(object.communityId);
switch (object.visibility) {
default:
if (typeof object.visibility === "number") {
message.visibility = object.visibility;
break;
}
break;
case "POST_VISIBILITY_UNSPECIFIED":
case 0:
message.visibility = 0;
break;
case "POST_VISIBILITY_VISIBLE":
case 1:
message.visibility = 1;
break;
case "POST_VISIBILITY_INVISIBLE":
case 2:
message.visibility = 2;
break;
}
switch (object.accessLevel) {
default:
if (typeof object.accessLevel === "number") {
message.accessLevel = object.accessLevel;
break;
}
break;
case "POST_ACCESS_LEVEL_UNSPECIFIED":
case 0:
message.accessLevel = 0;
break;
case "POST_ACCESS_LEVEL_PUBLIC":
case 1:
message.accessLevel = 1;
break;
case "POST_ACCESS_LEVEL_PRIVATE":
case 2:
message.accessLevel = 2;
break;
}
if (object.stamps) {
if (!Array.isArray(object.stamps))
throw TypeError(".social.mixi.application.model.v1.Post.stamps: array expected");
message.stamps = [];
for (let i = 0; i < object.stamps.length; ++i) {
if (!$util.isObject(object.stamps[i]))
throw TypeError(".social.mixi.application.model.v1.Post.stamps: object expected");
message.stamps[i] = $root.social.mixi.application.model.v1.PostStamp.fromObject(object.stamps[i], long + 1);
}
}
if (object.readerStampId != null)
message.readerStampId = String(object.readerStampId);
return message;
};

Post.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults) {
object.postMediaList = [];
object.stamps = [];
}
if (options.defaults) {
object.postId = "";
object.isDeleted = false;
object.creatorId = "";
object.text = "";
object.createdAt = null;
object.visibility = options.enums === String ? "POST_VISIBILITY_UNSPECIFIED" : 0;
object.accessLevel = options.enums === String ? "POST_ACCESS_LEVEL_UNSPECIFIED" : 0;
}
if (message.postId != null && Object.hasOwnProperty.call(message, "postId"))
object.postId = message.postId;
if (message.isDeleted != null && Object.hasOwnProperty.call(message, "isDeleted"))
object.isDeleted = message.isDeleted;
if (message.creatorId != null && Object.hasOwnProperty.call(message, "creatorId"))
object.creatorId = message.creatorId;
if (message.text != null && Object.hasOwnProperty.call(message, "text"))
object.text = message.text;
if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options, q + 1);
if (message.postMediaList && message.postMediaList.length) {
object.postMediaList = [];
for (let j = 0; j < message.postMediaList.length; ++j)
object.postMediaList[j] = $root.social.mixi.application.model.v1.PostMedia.toObject(message.postMediaList[j], options, q + 1);
}
if (message.inReplyToPostId != null && Object.hasOwnProperty.call(message, "inReplyToPostId")) {
object.inReplyToPostId = message.inReplyToPostId;
if (options.oneofs)
object._inReplyToPostId = "inReplyToPostId";
}
if (message.postMask != null && Object.hasOwnProperty.call(message, "postMask")) {
object.postMask = $root.social.mixi.application.model.v1.PostMask.toObject(message.postMask, options, q + 1);
if (options.oneofs)
object._postMask = "postMask";
}
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId")) {
object.communityId = message.communityId;
if (options.oneofs)
object._communityId = "communityId";
}
if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
object.visibility = options.enums === String ? $root.social.mixi.application.const_.v1.PostVisibility[message.visibility] === undefined ? message.visibility : $root.social.mixi.application.const_.v1.PostVisibility[message.visibility] : message.visibility;
if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
object.accessLevel = options.enums === String ? $root.social.mixi.application.const_.v1.PostAccessLevel[message.accessLevel] === undefined ? message.accessLevel : $root.social.mixi.application.const_.v1.PostAccessLevel[message.accessLevel] : message.accessLevel;
if (message.stamps && message.stamps.length) {
object.stamps = [];
for (let j = 0; j < message.stamps.length; ++j)
object.stamps[j] = $root.social.mixi.application.model.v1.PostStamp.toObject(message.stamps[j], options, q + 1);
}
if (message.readerStampId != null && Object.hasOwnProperty.call(message, "readerStampId")) {
object.readerStampId = message.readerStampId;
if (options.oneofs)
object._readerStampId = "readerStampId";
}
return object;
};

Post.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return Post;
})();

v1.PostMedia = (function() {

function PostMedia(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PostMedia.prototype.mediaType = 0;
PostMedia.prototype.image = null;
PostMedia.prototype.video = null;

let $oneOfFields;

Object.defineProperty(PostMedia.prototype, "content", {
get: $util.oneOfGetter($oneOfFields = ["image", "video"]),
set: $util.oneOfSetter($oneOfFields)
});

PostMedia.create = function create(properties) {
return new PostMedia(properties);
};

PostMedia.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
writer.uint32(8).int32(message.mediaType);
if (message.image != null && Object.hasOwnProperty.call(message, "image"))
$root.social.mixi.application.model.v1.PostMediaImage.encode(message.image, writer.uint32(18).fork(), q + 1).ldelim();
if (message.video != null && Object.hasOwnProperty.call(message, "video"))
$root.social.mixi.application.model.v1.PostMediaVideo.encode(message.video, writer.uint32(26).fork(), q + 1).ldelim();
return writer;
};

PostMedia.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PostMedia();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.mediaType = reader.int32();
break;
}
case 2: {
message.image = $root.social.mixi.application.model.v1.PostMediaImage.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 3: {
message.video = $root.social.mixi.application.model.v1.PostMediaVideo.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PostMedia.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PostMedia)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.PostMedia: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.PostMedia();
switch (object.mediaType) {
default:
if (typeof object.mediaType === "number") {
message.mediaType = object.mediaType;
break;
}
break;
case "POST_MEDIA_TYPE_UNSPECIFIED":
case 0:
message.mediaType = 0;
break;
case "POST_MEDIA_TYPE_IMAGE":
case 1:
message.mediaType = 1;
break;
case "POST_MEDIA_TYPE_VIDEO":
case 2:
message.mediaType = 2;
break;
}
if (object.image != null) {
if (!$util.isObject(object.image))
throw TypeError(".social.mixi.application.model.v1.PostMedia.image: object expected");
message.image = $root.social.mixi.application.model.v1.PostMediaImage.fromObject(object.image, long + 1);
}
if (object.video != null) {
if (!$util.isObject(object.video))
throw TypeError(".social.mixi.application.model.v1.PostMedia.video: object expected");
message.video = $root.social.mixi.application.model.v1.PostMediaVideo.fromObject(object.video, long + 1);
}
return message;
};

PostMedia.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults)
object.mediaType = options.enums === String ? "POST_MEDIA_TYPE_UNSPECIFIED" : 0;
if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
object.mediaType = options.enums === String ? $root.social.mixi.application.const_.v1.PostMediaType[message.mediaType] === undefined ? message.mediaType : $root.social.mixi.application.const_.v1.PostMediaType[message.mediaType] : message.mediaType;
if (message.image != null && Object.hasOwnProperty.call(message, "image")) {
object.image = $root.social.mixi.application.model.v1.PostMediaImage.toObject(message.image, options, q + 1);
if (options.oneofs)
object.content = "image";
}
if (message.video != null && Object.hasOwnProperty.call(message, "video")) {
object.video = $root.social.mixi.application.model.v1.PostMediaVideo.toObject(message.video, options, q + 1);
if (options.oneofs)
object.content = "video";
}
return object;
};

PostMedia.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PostMedia;
})();

v1.PostMediaImage = (function() {

function PostMediaImage(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PostMediaImage.prototype.largeImageUrl = "";
PostMediaImage.prototype.largeImageMimeType = "";
PostMediaImage.prototype.largeImageHeight = 0;
PostMediaImage.prototype.largeImageWidth = 0;
PostMediaImage.prototype.smallImageUrl = "";
PostMediaImage.prototype.smallImageMimeType = "";
PostMediaImage.prototype.smallImageHeight = 0;
PostMediaImage.prototype.smallImageWidth = 0;

PostMediaImage.create = function create(properties) {
return new PostMediaImage(properties);
};

PostMediaImage.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.largeImageUrl != null && Object.hasOwnProperty.call(message, "largeImageUrl"))
writer.uint32(10).string(message.largeImageUrl);
if (message.largeImageMimeType != null && Object.hasOwnProperty.call(message, "largeImageMimeType"))
writer.uint32(18).string(message.largeImageMimeType);
if (message.largeImageHeight != null && Object.hasOwnProperty.call(message, "largeImageHeight"))
writer.uint32(24).uint32(message.largeImageHeight);
if (message.largeImageWidth != null && Object.hasOwnProperty.call(message, "largeImageWidth"))
writer.uint32(32).uint32(message.largeImageWidth);
if (message.smallImageUrl != null && Object.hasOwnProperty.call(message, "smallImageUrl"))
writer.uint32(42).string(message.smallImageUrl);
if (message.smallImageMimeType != null && Object.hasOwnProperty.call(message, "smallImageMimeType"))
writer.uint32(50).string(message.smallImageMimeType);
if (message.smallImageHeight != null && Object.hasOwnProperty.call(message, "smallImageHeight"))
writer.uint32(56).uint32(message.smallImageHeight);
if (message.smallImageWidth != null && Object.hasOwnProperty.call(message, "smallImageWidth"))
writer.uint32(64).uint32(message.smallImageWidth);
return writer;
};

PostMediaImage.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PostMediaImage();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.largeImageUrl = reader.string();
break;
}
case 2: {
message.largeImageMimeType = reader.string();
break;
}
case 3: {
message.largeImageHeight = reader.uint32();
break;
}
case 4: {
message.largeImageWidth = reader.uint32();
break;
}
case 5: {
message.smallImageUrl = reader.string();
break;
}
case 6: {
message.smallImageMimeType = reader.string();
break;
}
case 7: {
message.smallImageHeight = reader.uint32();
break;
}
case 8: {
message.smallImageWidth = reader.uint32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PostMediaImage.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PostMediaImage)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.PostMediaImage: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.PostMediaImage();
if (object.largeImageUrl != null)
message.largeImageUrl = String(object.largeImageUrl);
if (object.largeImageMimeType != null)
message.largeImageMimeType = String(object.largeImageMimeType);
if (object.largeImageHeight != null)
message.largeImageHeight = object.largeImageHeight >>> 0;
if (object.largeImageWidth != null)
message.largeImageWidth = object.largeImageWidth >>> 0;
if (object.smallImageUrl != null)
message.smallImageUrl = String(object.smallImageUrl);
if (object.smallImageMimeType != null)
message.smallImageMimeType = String(object.smallImageMimeType);
if (object.smallImageHeight != null)
message.smallImageHeight = object.smallImageHeight >>> 0;
if (object.smallImageWidth != null)
message.smallImageWidth = object.smallImageWidth >>> 0;
return message;
};

PostMediaImage.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.largeImageUrl = "";
object.largeImageMimeType = "";
object.largeImageHeight = 0;
object.largeImageWidth = 0;
object.smallImageUrl = "";
object.smallImageMimeType = "";
object.smallImageHeight = 0;
object.smallImageWidth = 0;
}
if (message.largeImageUrl != null && Object.hasOwnProperty.call(message, "largeImageUrl"))
object.largeImageUrl = message.largeImageUrl;
if (message.largeImageMimeType != null && Object.hasOwnProperty.call(message, "largeImageMimeType"))
object.largeImageMimeType = message.largeImageMimeType;
if (message.largeImageHeight != null && Object.hasOwnProperty.call(message, "largeImageHeight"))
object.largeImageHeight = message.largeImageHeight;
if (message.largeImageWidth != null && Object.hasOwnProperty.call(message, "largeImageWidth"))
object.largeImageWidth = message.largeImageWidth;
if (message.smallImageUrl != null && Object.hasOwnProperty.call(message, "smallImageUrl"))
object.smallImageUrl = message.smallImageUrl;
if (message.smallImageMimeType != null && Object.hasOwnProperty.call(message, "smallImageMimeType"))
object.smallImageMimeType = message.smallImageMimeType;
if (message.smallImageHeight != null && Object.hasOwnProperty.call(message, "smallImageHeight"))
object.smallImageHeight = message.smallImageHeight;
if (message.smallImageWidth != null && Object.hasOwnProperty.call(message, "smallImageWidth"))
object.smallImageWidth = message.smallImageWidth;
return object;
};

PostMediaImage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PostMediaImage;
})();

v1.PostMediaVideo = (function() {

function PostMediaVideo(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PostMediaVideo.prototype.videoUrl = "";
PostMediaVideo.prototype.videoMimeType = "";
PostMediaVideo.prototype.videoHeight = 0;
PostMediaVideo.prototype.videoWidth = 0;
PostMediaVideo.prototype.previewImageUrl = "";
PostMediaVideo.prototype.previewImageMimeType = "";
PostMediaVideo.prototype.previewImageHeight = 0;
PostMediaVideo.prototype.previewImageWidth = 0;
PostMediaVideo.prototype.duration = 0;

PostMediaVideo.create = function create(properties) {
return new PostMediaVideo(properties);
};

PostMediaVideo.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.videoUrl != null && Object.hasOwnProperty.call(message, "videoUrl"))
writer.uint32(10).string(message.videoUrl);
if (message.videoMimeType != null && Object.hasOwnProperty.call(message, "videoMimeType"))
writer.uint32(18).string(message.videoMimeType);
if (message.videoHeight != null && Object.hasOwnProperty.call(message, "videoHeight"))
writer.uint32(24).uint32(message.videoHeight);
if (message.videoWidth != null && Object.hasOwnProperty.call(message, "videoWidth"))
writer.uint32(32).uint32(message.videoWidth);
if (message.previewImageUrl != null && Object.hasOwnProperty.call(message, "previewImageUrl"))
writer.uint32(42).string(message.previewImageUrl);
if (message.previewImageMimeType != null && Object.hasOwnProperty.call(message, "previewImageMimeType"))
writer.uint32(50).string(message.previewImageMimeType);
if (message.previewImageHeight != null && Object.hasOwnProperty.call(message, "previewImageHeight"))
writer.uint32(56).uint32(message.previewImageHeight);
if (message.previewImageWidth != null && Object.hasOwnProperty.call(message, "previewImageWidth"))
writer.uint32(64).uint32(message.previewImageWidth);
if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
writer.uint32(77).float(message.duration);
return writer;
};

PostMediaVideo.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PostMediaVideo();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.videoUrl = reader.string();
break;
}
case 2: {
message.videoMimeType = reader.string();
break;
}
case 3: {
message.videoHeight = reader.uint32();
break;
}
case 4: {
message.videoWidth = reader.uint32();
break;
}
case 5: {
message.previewImageUrl = reader.string();
break;
}
case 6: {
message.previewImageMimeType = reader.string();
break;
}
case 7: {
message.previewImageHeight = reader.uint32();
break;
}
case 8: {
message.previewImageWidth = reader.uint32();
break;
}
case 9: {
message.duration = reader.float();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PostMediaVideo.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PostMediaVideo)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.PostMediaVideo: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.PostMediaVideo();
if (object.videoUrl != null)
message.videoUrl = String(object.videoUrl);
if (object.videoMimeType != null)
message.videoMimeType = String(object.videoMimeType);
if (object.videoHeight != null)
message.videoHeight = object.videoHeight >>> 0;
if (object.videoWidth != null)
message.videoWidth = object.videoWidth >>> 0;
if (object.previewImageUrl != null)
message.previewImageUrl = String(object.previewImageUrl);
if (object.previewImageMimeType != null)
message.previewImageMimeType = String(object.previewImageMimeType);
if (object.previewImageHeight != null)
message.previewImageHeight = object.previewImageHeight >>> 0;
if (object.previewImageWidth != null)
message.previewImageWidth = object.previewImageWidth >>> 0;
if (object.duration != null)
message.duration = Number(object.duration);
return message;
};

PostMediaVideo.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.videoUrl = "";
object.videoMimeType = "";
object.videoHeight = 0;
object.videoWidth = 0;
object.previewImageUrl = "";
object.previewImageMimeType = "";
object.previewImageHeight = 0;
object.previewImageWidth = 0;
object.duration = 0;
}
if (message.videoUrl != null && Object.hasOwnProperty.call(message, "videoUrl"))
object.videoUrl = message.videoUrl;
if (message.videoMimeType != null && Object.hasOwnProperty.call(message, "videoMimeType"))
object.videoMimeType = message.videoMimeType;
if (message.videoHeight != null && Object.hasOwnProperty.call(message, "videoHeight"))
object.videoHeight = message.videoHeight;
if (message.videoWidth != null && Object.hasOwnProperty.call(message, "videoWidth"))
object.videoWidth = message.videoWidth;
if (message.previewImageUrl != null && Object.hasOwnProperty.call(message, "previewImageUrl"))
object.previewImageUrl = message.previewImageUrl;
if (message.previewImageMimeType != null && Object.hasOwnProperty.call(message, "previewImageMimeType"))
object.previewImageMimeType = message.previewImageMimeType;
if (message.previewImageHeight != null && Object.hasOwnProperty.call(message, "previewImageHeight"))
object.previewImageHeight = message.previewImageHeight;
if (message.previewImageWidth != null && Object.hasOwnProperty.call(message, "previewImageWidth"))
object.previewImageWidth = message.previewImageWidth;
if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
object.duration = options.json && !isFinite(message.duration) ? String(message.duration) : message.duration;
return object;
};

PostMediaVideo.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PostMediaVideo;
})();

v1.PostMask = (function() {

function PostMask(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PostMask.prototype.maskType = 0;
PostMask.prototype.caption = "";

PostMask.create = function create(properties) {
return new PostMask(properties);
};

PostMask.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.maskType != null && Object.hasOwnProperty.call(message, "maskType"))
writer.uint32(8).int32(message.maskType);
if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
writer.uint32(18).string(message.caption);
return writer;
};

PostMask.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PostMask();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.maskType = reader.int32();
break;
}
case 2: {
message.caption = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PostMask.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PostMask)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.PostMask: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.PostMask();
switch (object.maskType) {
default:
if (typeof object.maskType === "number") {
message.maskType = object.maskType;
break;
}
break;
case "POST_MASK_TYPE_UNSPECIFIED":
case 0:
message.maskType = 0;
break;
case "POST_MASK_TYPE_SENSITIVE":
case 1:
message.maskType = 1;
break;
case "POST_MASK_TYPE_SPOILER":
case 2:
message.maskType = 2;
break;
}
if (object.caption != null)
message.caption = String(object.caption);
return message;
};

PostMask.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.maskType = options.enums === String ? "POST_MASK_TYPE_UNSPECIFIED" : 0;
object.caption = "";
}
if (message.maskType != null && Object.hasOwnProperty.call(message, "maskType"))
object.maskType = options.enums === String ? $root.social.mixi.application.const_.v1.PostMaskType[message.maskType] === undefined ? message.maskType : $root.social.mixi.application.const_.v1.PostMaskType[message.maskType] : message.maskType;
if (message.caption != null && Object.hasOwnProperty.call(message, "caption"))
object.caption = message.caption;
return object;
};

PostMask.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PostMask;
})();

v1.PostStamp = (function() {

function PostStamp(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PostStamp.prototype.stamp = null;
PostStamp.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

PostStamp.create = function create(properties) {
return new PostStamp(properties);
};

PostStamp.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.stamp != null && Object.hasOwnProperty.call(message, "stamp"))
$root.social.mixi.application.model.v1.MediaStamp.encode(message.stamp, writer.uint32(10).fork(), q + 1).ldelim();
if (message.count != null && Object.hasOwnProperty.call(message, "count"))
writer.uint32(16).uint64(message.count);
return writer;
};

PostStamp.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PostStamp();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.stamp = $root.social.mixi.application.model.v1.MediaStamp.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 2: {
message.count = reader.uint64();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PostStamp.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PostStamp)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.PostStamp: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.PostStamp();
if (object.stamp != null) {
if (!$util.isObject(object.stamp))
throw TypeError(".social.mixi.application.model.v1.PostStamp.stamp: object expected");
message.stamp = $root.social.mixi.application.model.v1.MediaStamp.fromObject(object.stamp, long + 1);
}
if (object.count != null)
if ($util.Long)
message.count = $util.Long.fromValue(object.count, true);
else if (typeof object.count === "string")
message.count = parseInt(object.count, 10);
else if (typeof object.count === "number")
message.count = object.count;
else if (typeof object.count === "object")
message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber(true);
return message;
};

PostStamp.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.stamp = null;
if ($util.Long) {
let long = new $util.Long(0, 0, true);
object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
} else
object.count = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
}
if (message.stamp != null && Object.hasOwnProperty.call(message, "stamp"))
object.stamp = $root.social.mixi.application.model.v1.MediaStamp.toObject(message.stamp, options, q + 1);
if (message.count != null && Object.hasOwnProperty.call(message, "count"))
if (typeof BigInt !== "undefined" && options.longs === BigInt)
object.count = typeof message.count === "number" ? BigInt(message.count) : $util.Long.fromBits(message.count.low >>> 0, message.count.high >>> 0, true).toBigInt();
else if (typeof message.count === "number")
object.count = options.longs === String ? String(message.count) : message.count;
else
object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber(true) : message.count;
return object;
};

PostStamp.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PostStamp;
})();

v1.OfficialStampSet = (function() {

function OfficialStampSet(properties) {
this.stamps = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

OfficialStampSet.prototype.name = "";
OfficialStampSet.prototype.spriteUrl = "";
OfficialStampSet.prototype.stamps = $util.emptyArray;
OfficialStampSet.prototype.stampSetId = "";
OfficialStampSet.prototype.startAt = null;
OfficialStampSet.prototype.endAt = null;
OfficialStampSet.prototype.stampSetType = 0;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(OfficialStampSet.prototype, "_startAt", {
get: $util.oneOfGetter($oneOfFields = ["startAt"]),
set: $util.oneOfSetter($oneOfFields)
});

// Virtual OneOf for proto3 optional field
Object.defineProperty(OfficialStampSet.prototype, "_endAt", {
get: $util.oneOfGetter($oneOfFields = ["endAt"]),
set: $util.oneOfSetter($oneOfFields)
});

OfficialStampSet.create = function create(properties) {
return new OfficialStampSet(properties);
};

OfficialStampSet.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(10).string(message.name);
if (message.spriteUrl != null && Object.hasOwnProperty.call(message, "spriteUrl"))
writer.uint32(18).string(message.spriteUrl);
if (message.stamps != null && message.stamps.length)
for (let i = 0; i < message.stamps.length; ++i)
$root.social.mixi.application.model.v1.OfficialStamp.encode(message.stamps[i], writer.uint32(26).fork(), q + 1).ldelim();
if (message.stampSetId != null && Object.hasOwnProperty.call(message, "stampSetId"))
writer.uint32(34).string(message.stampSetId);
if (message.startAt != null && Object.hasOwnProperty.call(message, "startAt"))
$root.google.protobuf.Timestamp.encode(message.startAt, writer.uint32(42).fork(), q + 1).ldelim();
if (message.endAt != null && Object.hasOwnProperty.call(message, "endAt"))
$root.google.protobuf.Timestamp.encode(message.endAt, writer.uint32(50).fork(), q + 1).ldelim();
if (message.stampSetType != null && Object.hasOwnProperty.call(message, "stampSetType"))
writer.uint32(56).int32(message.stampSetType);
return writer;
};

OfficialStampSet.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.OfficialStampSet();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.name = reader.string();
break;
}
case 2: {
message.spriteUrl = reader.string();
break;
}
case 3: {
if (!(message.stamps && message.stamps.length))
message.stamps = [];
message.stamps.push($root.social.mixi.application.model.v1.OfficialStamp.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
case 4: {
message.stampSetId = reader.string();
break;
}
case 5: {
message.startAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 6: {
message.endAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 7: {
message.stampSetType = reader.int32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

OfficialStampSet.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.OfficialStampSet)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.OfficialStampSet: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.OfficialStampSet();
if (object.name != null)
message.name = String(object.name);
if (object.spriteUrl != null)
message.spriteUrl = String(object.spriteUrl);
if (object.stamps) {
if (!Array.isArray(object.stamps))
throw TypeError(".social.mixi.application.model.v1.OfficialStampSet.stamps: array expected");
message.stamps = [];
for (let i = 0; i < object.stamps.length; ++i) {
if (!$util.isObject(object.stamps[i]))
throw TypeError(".social.mixi.application.model.v1.OfficialStampSet.stamps: object expected");
message.stamps[i] = $root.social.mixi.application.model.v1.OfficialStamp.fromObject(object.stamps[i], long + 1);
}
}
if (object.stampSetId != null)
message.stampSetId = String(object.stampSetId);
if (object.startAt != null) {
if (!$util.isObject(object.startAt))
throw TypeError(".social.mixi.application.model.v1.OfficialStampSet.startAt: object expected");
message.startAt = $root.google.protobuf.Timestamp.fromObject(object.startAt, long + 1);
}
if (object.endAt != null) {
if (!$util.isObject(object.endAt))
throw TypeError(".social.mixi.application.model.v1.OfficialStampSet.endAt: object expected");
message.endAt = $root.google.protobuf.Timestamp.fromObject(object.endAt, long + 1);
}
switch (object.stampSetType) {
default:
if (typeof object.stampSetType === "number") {
message.stampSetType = object.stampSetType;
break;
}
break;
case "STAMP_SET_TYPE_UNSPECIFIED":
case 0:
message.stampSetType = 0;
break;
case "STAMP_SET_TYPE_DEFAULT":
case 1:
message.stampSetType = 1;
break;
case "STAMP_SET_TYPE_SEASONAL":
case 2:
message.stampSetType = 2;
break;
}
return message;
};

OfficialStampSet.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.stamps = [];
if (options.defaults) {
object.name = "";
object.spriteUrl = "";
object.stampSetId = "";
object.stampSetType = options.enums === String ? "STAMP_SET_TYPE_UNSPECIFIED" : 0;
}
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
object.name = message.name;
if (message.spriteUrl != null && Object.hasOwnProperty.call(message, "spriteUrl"))
object.spriteUrl = message.spriteUrl;
if (message.stamps && message.stamps.length) {
object.stamps = [];
for (let j = 0; j < message.stamps.length; ++j)
object.stamps[j] = $root.social.mixi.application.model.v1.OfficialStamp.toObject(message.stamps[j], options, q + 1);
}
if (message.stampSetId != null && Object.hasOwnProperty.call(message, "stampSetId"))
object.stampSetId = message.stampSetId;
if (message.startAt != null && Object.hasOwnProperty.call(message, "startAt")) {
object.startAt = $root.google.protobuf.Timestamp.toObject(message.startAt, options, q + 1);
if (options.oneofs)
object._startAt = "startAt";
}
if (message.endAt != null && Object.hasOwnProperty.call(message, "endAt")) {
object.endAt = $root.google.protobuf.Timestamp.toObject(message.endAt, options, q + 1);
if (options.oneofs)
object._endAt = "endAt";
}
if (message.stampSetType != null && Object.hasOwnProperty.call(message, "stampSetType"))
object.stampSetType = options.enums === String ? $root.social.mixi.application.const_.v1.StampSetType[message.stampSetType] === undefined ? message.stampSetType : $root.social.mixi.application.const_.v1.StampSetType[message.stampSetType] : message.stampSetType;
return object;
};

OfficialStampSet.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return OfficialStampSet;
})();

v1.OfficialStamp = (function() {

function OfficialStamp(properties) {
this.searchTags = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

OfficialStamp.prototype.stampId = "";
OfficialStamp.prototype.index = 0;
OfficialStamp.prototype.searchTags = $util.emptyArray;
OfficialStamp.prototype.url = "";

OfficialStamp.create = function create(properties) {
return new OfficialStamp(properties);
};

OfficialStamp.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.stampId != null && Object.hasOwnProperty.call(message, "stampId"))
writer.uint32(10).string(message.stampId);
if (message.index != null && Object.hasOwnProperty.call(message, "index"))
writer.uint32(16).uint32(message.index);
if (message.searchTags != null && message.searchTags.length)
for (let i = 0; i < message.searchTags.length; ++i)
writer.uint32(26).string(message.searchTags[i]);
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
writer.uint32(34).string(message.url);
return writer;
};

OfficialStamp.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.OfficialStamp();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.stampId = reader.string();
break;
}
case 2: {
message.index = reader.uint32();
break;
}
case 3: {
if (!(message.searchTags && message.searchTags.length))
message.searchTags = [];
message.searchTags.push(reader.string());
break;
}
case 4: {
message.url = reader.string();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

OfficialStamp.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.OfficialStamp)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.OfficialStamp: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.OfficialStamp();
if (object.stampId != null)
message.stampId = String(object.stampId);
if (object.index != null)
message.index = object.index >>> 0;
if (object.searchTags) {
if (!Array.isArray(object.searchTags))
throw TypeError(".social.mixi.application.model.v1.OfficialStamp.searchTags: array expected");
message.searchTags = [];
for (let i = 0; i < object.searchTags.length; ++i)
message.searchTags[i] = String(object.searchTags[i]);
}
if (object.url != null)
message.url = String(object.url);
return message;
};

OfficialStamp.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.searchTags = [];
if (options.defaults) {
object.stampId = "";
object.index = 0;
object.url = "";
}
if (message.stampId != null && Object.hasOwnProperty.call(message, "stampId"))
object.stampId = message.stampId;
if (message.index != null && Object.hasOwnProperty.call(message, "index"))
object.index = message.index;
if (message.searchTags && message.searchTags.length) {
object.searchTags = [];
for (let j = 0; j < message.searchTags.length; ++j)
object.searchTags[j] = message.searchTags[j];
}
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
object.url = message.url;
return object;
};

OfficialStamp.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return OfficialStamp;
})();

v1.CommunityStampSet = (function() {

function CommunityStampSet(properties) {
this.stamps = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CommunityStampSet.prototype.communityId = "";
CommunityStampSet.prototype.stamps = $util.emptyArray;

CommunityStampSet.create = function create(properties) {
return new CommunityStampSet(properties);
};

CommunityStampSet.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
writer.uint32(10).string(message.communityId);
if (message.stamps != null && message.stamps.length)
for (let i = 0; i < message.stamps.length; ++i)
$root.social.mixi.application.model.v1.CommunityStamp.encode(message.stamps[i], writer.uint32(18).fork(), q + 1).ldelim();
return writer;
};

CommunityStampSet.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.CommunityStampSet();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.communityId = reader.string();
break;
}
case 2: {
if (!(message.stamps && message.stamps.length))
message.stamps = [];
message.stamps.push($root.social.mixi.application.model.v1.CommunityStamp.decode(reader, reader.uint32(), undefined, long + 1));
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CommunityStampSet.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.CommunityStampSet)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.CommunityStampSet: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.CommunityStampSet();
if (object.communityId != null)
message.communityId = String(object.communityId);
if (object.stamps) {
if (!Array.isArray(object.stamps))
throw TypeError(".social.mixi.application.model.v1.CommunityStampSet.stamps: array expected");
message.stamps = [];
for (let i = 0; i < object.stamps.length; ++i) {
if (!$util.isObject(object.stamps[i]))
throw TypeError(".social.mixi.application.model.v1.CommunityStampSet.stamps: object expected");
message.stamps[i] = $root.social.mixi.application.model.v1.CommunityStamp.fromObject(object.stamps[i], long + 1);
}
}
return message;
};

CommunityStampSet.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.stamps = [];
if (options.defaults)
object.communityId = "";
if (message.communityId != null && Object.hasOwnProperty.call(message, "communityId"))
object.communityId = message.communityId;
if (message.stamps && message.stamps.length) {
object.stamps = [];
for (let j = 0; j < message.stamps.length; ++j)
object.stamps[j] = $root.social.mixi.application.model.v1.CommunityStamp.toObject(message.stamps[j], options, q + 1);
}
return object;
};

CommunityStampSet.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CommunityStampSet;
})();

v1.CommunityStamp = (function() {

function CommunityStamp(properties) {
this.searchTags = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CommunityStamp.prototype.stampId = "";
CommunityStamp.prototype.url = "";
CommunityStamp.prototype.searchTags = $util.emptyArray;

CommunityStamp.create = function create(properties) {
return new CommunityStamp(properties);
};

CommunityStamp.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.stampId != null && Object.hasOwnProperty.call(message, "stampId"))
writer.uint32(10).string(message.stampId);
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
writer.uint32(18).string(message.url);
if (message.searchTags != null && message.searchTags.length)
for (let i = 0; i < message.searchTags.length; ++i)
writer.uint32(26).string(message.searchTags[i]);
return writer;
};

CommunityStamp.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.CommunityStamp();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.stampId = reader.string();
break;
}
case 2: {
message.url = reader.string();
break;
}
case 3: {
if (!(message.searchTags && message.searchTags.length))
message.searchTags = [];
message.searchTags.push(reader.string());
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CommunityStamp.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.CommunityStamp)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.CommunityStamp: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.CommunityStamp();
if (object.stampId != null)
message.stampId = String(object.stampId);
if (object.url != null)
message.url = String(object.url);
if (object.searchTags) {
if (!Array.isArray(object.searchTags))
throw TypeError(".social.mixi.application.model.v1.CommunityStamp.searchTags: array expected");
message.searchTags = [];
for (let i = 0; i < object.searchTags.length; ++i)
message.searchTags[i] = String(object.searchTags[i]);
}
return message;
};

CommunityStamp.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.searchTags = [];
if (options.defaults) {
object.stampId = "";
object.url = "";
}
if (message.stampId != null && Object.hasOwnProperty.call(message, "stampId"))
object.stampId = message.stampId;
if (message.url != null && Object.hasOwnProperty.call(message, "url"))
object.url = message.url;
if (message.searchTags && message.searchTags.length) {
object.searchTags = [];
for (let j = 0; j < message.searchTags.length; ++j)
object.searchTags[j] = message.searchTags[j];
}
return object;
};

CommunityStamp.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CommunityStamp;
})();

v1.User = (function() {

function User(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

User.prototype.userId = "";
User.prototype.isDisabled = false;
User.prototype.name = "";
User.prototype.displayName = "";
User.prototype.profile = "";
User.prototype.userAvatar = null;
User.prototype.visibility = 0;
User.prototype.accessLevel = 0;

User.create = function create(properties) {
return new User(properties);
};

User.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
writer.uint32(10).string(message.userId);
if (message.isDisabled != null && Object.hasOwnProperty.call(message, "isDisabled"))
writer.uint32(16).bool(message.isDisabled);
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
writer.uint32(26).string(message.name);
if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
writer.uint32(34).string(message.displayName);
if (message.profile != null && Object.hasOwnProperty.call(message, "profile"))
writer.uint32(42).string(message.profile);
if (message.userAvatar != null && Object.hasOwnProperty.call(message, "userAvatar"))
$root.social.mixi.application.model.v1.UserAvatar.encode(message.userAvatar, writer.uint32(50).fork(), q + 1).ldelim();
if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
writer.uint32(56).int32(message.visibility);
if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
writer.uint32(64).int32(message.accessLevel);
return writer;
};

User.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.User();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.userId = reader.string();
break;
}
case 2: {
message.isDisabled = reader.bool();
break;
}
case 3: {
message.name = reader.string();
break;
}
case 4: {
message.displayName = reader.string();
break;
}
case 5: {
message.profile = reader.string();
break;
}
case 6: {
message.userAvatar = $root.social.mixi.application.model.v1.UserAvatar.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 7: {
message.visibility = reader.int32();
break;
}
case 8: {
message.accessLevel = reader.int32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

User.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.User)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.User: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.User();
if (object.userId != null)
message.userId = String(object.userId);
if (object.isDisabled != null)
message.isDisabled = Boolean(object.isDisabled);
if (object.name != null)
message.name = String(object.name);
if (object.displayName != null)
message.displayName = String(object.displayName);
if (object.profile != null)
message.profile = String(object.profile);
if (object.userAvatar != null) {
if (!$util.isObject(object.userAvatar))
throw TypeError(".social.mixi.application.model.v1.User.userAvatar: object expected");
message.userAvatar = $root.social.mixi.application.model.v1.UserAvatar.fromObject(object.userAvatar, long + 1);
}
switch (object.visibility) {
default:
if (typeof object.visibility === "number") {
message.visibility = object.visibility;
break;
}
break;
case "USER_VISIBILITY_UNSPECIFIED":
case 0:
message.visibility = 0;
break;
case "USER_VISIBILITY_VISIBLE":
case 1:
message.visibility = 1;
break;
case "USER_VISIBILITY_INVISIBLE":
case 2:
message.visibility = 2;
break;
}
switch (object.accessLevel) {
default:
if (typeof object.accessLevel === "number") {
message.accessLevel = object.accessLevel;
break;
}
break;
case "USER_ACCESS_LEVEL_UNSPECIFIED":
case 0:
message.accessLevel = 0;
break;
case "USER_ACCESS_LEVEL_PUBLIC":
case 1:
message.accessLevel = 1;
break;
case "USER_ACCESS_LEVEL_PRIVATE":
case 2:
message.accessLevel = 2;
break;
}
return message;
};

User.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.userId = "";
object.isDisabled = false;
object.name = "";
object.displayName = "";
object.profile = "";
object.userAvatar = null;
object.visibility = options.enums === String ? "USER_VISIBILITY_UNSPECIFIED" : 0;
object.accessLevel = options.enums === String ? "USER_ACCESS_LEVEL_UNSPECIFIED" : 0;
}
if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
object.userId = message.userId;
if (message.isDisabled != null && Object.hasOwnProperty.call(message, "isDisabled"))
object.isDisabled = message.isDisabled;
if (message.name != null && Object.hasOwnProperty.call(message, "name"))
object.name = message.name;
if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
object.displayName = message.displayName;
if (message.profile != null && Object.hasOwnProperty.call(message, "profile"))
object.profile = message.profile;
if (message.userAvatar != null && Object.hasOwnProperty.call(message, "userAvatar"))
object.userAvatar = $root.social.mixi.application.model.v1.UserAvatar.toObject(message.userAvatar, options, q + 1);
if (message.visibility != null && Object.hasOwnProperty.call(message, "visibility"))
object.visibility = options.enums === String ? $root.social.mixi.application.const_.v1.UserVisibility[message.visibility] === undefined ? message.visibility : $root.social.mixi.application.const_.v1.UserVisibility[message.visibility] : message.visibility;
if (message.accessLevel != null && Object.hasOwnProperty.call(message, "accessLevel"))
object.accessLevel = options.enums === String ? $root.social.mixi.application.const_.v1.UserAccessLevel[message.accessLevel] === undefined ? message.accessLevel : $root.social.mixi.application.const_.v1.UserAccessLevel[message.accessLevel] : message.accessLevel;
return object;
};

User.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return User;
})();

v1.UserAvatar = (function() {

function UserAvatar(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

UserAvatar.prototype.largeImageUrl = "";
UserAvatar.prototype.largeImageMimeType = "";
UserAvatar.prototype.largeImageHeight = 0;
UserAvatar.prototype.largeImageWidth = 0;
UserAvatar.prototype.smallImageUrl = "";
UserAvatar.prototype.smallImageMimeType = "";
UserAvatar.prototype.smallImageHeight = 0;
UserAvatar.prototype.smallImageWidth = 0;

UserAvatar.create = function create(properties) {
return new UserAvatar(properties);
};

UserAvatar.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.largeImageUrl != null && Object.hasOwnProperty.call(message, "largeImageUrl"))
writer.uint32(10).string(message.largeImageUrl);
if (message.largeImageMimeType != null && Object.hasOwnProperty.call(message, "largeImageMimeType"))
writer.uint32(18).string(message.largeImageMimeType);
if (message.largeImageHeight != null && Object.hasOwnProperty.call(message, "largeImageHeight"))
writer.uint32(24).uint32(message.largeImageHeight);
if (message.largeImageWidth != null && Object.hasOwnProperty.call(message, "largeImageWidth"))
writer.uint32(32).uint32(message.largeImageWidth);
if (message.smallImageUrl != null && Object.hasOwnProperty.call(message, "smallImageUrl"))
writer.uint32(42).string(message.smallImageUrl);
if (message.smallImageMimeType != null && Object.hasOwnProperty.call(message, "smallImageMimeType"))
writer.uint32(50).string(message.smallImageMimeType);
if (message.smallImageHeight != null && Object.hasOwnProperty.call(message, "smallImageHeight"))
writer.uint32(56).uint32(message.smallImageHeight);
if (message.smallImageWidth != null && Object.hasOwnProperty.call(message, "smallImageWidth"))
writer.uint32(64).uint32(message.smallImageWidth);
return writer;
};

UserAvatar.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.UserAvatar();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.largeImageUrl = reader.string();
break;
}
case 2: {
message.largeImageMimeType = reader.string();
break;
}
case 3: {
message.largeImageHeight = reader.uint32();
break;
}
case 4: {
message.largeImageWidth = reader.uint32();
break;
}
case 5: {
message.smallImageUrl = reader.string();
break;
}
case 6: {
message.smallImageMimeType = reader.string();
break;
}
case 7: {
message.smallImageHeight = reader.uint32();
break;
}
case 8: {
message.smallImageWidth = reader.uint32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

UserAvatar.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.UserAvatar)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.UserAvatar: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.UserAvatar();
if (object.largeImageUrl != null)
message.largeImageUrl = String(object.largeImageUrl);
if (object.largeImageMimeType != null)
message.largeImageMimeType = String(object.largeImageMimeType);
if (object.largeImageHeight != null)
message.largeImageHeight = object.largeImageHeight >>> 0;
if (object.largeImageWidth != null)
message.largeImageWidth = object.largeImageWidth >>> 0;
if (object.smallImageUrl != null)
message.smallImageUrl = String(object.smallImageUrl);
if (object.smallImageMimeType != null)
message.smallImageMimeType = String(object.smallImageMimeType);
if (object.smallImageHeight != null)
message.smallImageHeight = object.smallImageHeight >>> 0;
if (object.smallImageWidth != null)
message.smallImageWidth = object.smallImageWidth >>> 0;
return message;
};

UserAvatar.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.largeImageUrl = "";
object.largeImageMimeType = "";
object.largeImageHeight = 0;
object.largeImageWidth = 0;
object.smallImageUrl = "";
object.smallImageMimeType = "";
object.smallImageHeight = 0;
object.smallImageWidth = 0;
}
if (message.largeImageUrl != null && Object.hasOwnProperty.call(message, "largeImageUrl"))
object.largeImageUrl = message.largeImageUrl;
if (message.largeImageMimeType != null && Object.hasOwnProperty.call(message, "largeImageMimeType"))
object.largeImageMimeType = message.largeImageMimeType;
if (message.largeImageHeight != null && Object.hasOwnProperty.call(message, "largeImageHeight"))
object.largeImageHeight = message.largeImageHeight;
if (message.largeImageWidth != null && Object.hasOwnProperty.call(message, "largeImageWidth"))
object.largeImageWidth = message.largeImageWidth;
if (message.smallImageUrl != null && Object.hasOwnProperty.call(message, "smallImageUrl"))
object.smallImageUrl = message.smallImageUrl;
if (message.smallImageMimeType != null && Object.hasOwnProperty.call(message, "smallImageMimeType"))
object.smallImageMimeType = message.smallImageMimeType;
if (message.smallImageHeight != null && Object.hasOwnProperty.call(message, "smallImageHeight"))
object.smallImageHeight = message.smallImageHeight;
if (message.smallImageWidth != null && Object.hasOwnProperty.call(message, "smallImageWidth"))
object.smallImageWidth = message.smallImageWidth;
return object;
};

UserAvatar.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return UserAvatar;
})();

v1.Event = (function() {

function Event(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

Event.prototype.eventId = "";
Event.prototype.eventType = 0;
Event.prototype.pingEvent = null;
Event.prototype.postCreatedEvent = null;
Event.prototype.communityMemberChangedEvent = null;
Event.prototype.chatMessageReceivedEvent = null;
Event.prototype.communityPluginManagedEvent = null;

let $oneOfFields;

Object.defineProperty(Event.prototype, "body", {
get: $util.oneOfGetter($oneOfFields = ["pingEvent", "postCreatedEvent", "communityMemberChangedEvent", "chatMessageReceivedEvent", "communityPluginManagedEvent"]),
set: $util.oneOfSetter($oneOfFields)
});

Event.create = function create(properties) {
return new Event(properties);
};

Event.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
writer.uint32(10).string(message.eventId);
if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
writer.uint32(16).int32(message.eventType);
if (message.pingEvent != null && Object.hasOwnProperty.call(message, "pingEvent"))
$root.social.mixi.application.model.v1.PingEvent.encode(message.pingEvent, writer.uint32(26).fork(), q + 1).ldelim();
if (message.postCreatedEvent != null && Object.hasOwnProperty.call(message, "postCreatedEvent"))
$root.social.mixi.application.model.v1.PostCreatedEvent.encode(message.postCreatedEvent, writer.uint32(34).fork(), q + 1).ldelim();
if (message.communityMemberChangedEvent != null && Object.hasOwnProperty.call(message, "communityMemberChangedEvent"))
$root.social.mixi.application.model.v1.CommunityMemberChangedEvent.encode(message.communityMemberChangedEvent, writer.uint32(42).fork(), q + 1).ldelim();
if (message.chatMessageReceivedEvent != null && Object.hasOwnProperty.call(message, "chatMessageReceivedEvent"))
$root.social.mixi.application.model.v1.ChatMessageReceivedEvent.encode(message.chatMessageReceivedEvent, writer.uint32(50).fork(), q + 1).ldelim();
if (message.communityPluginManagedEvent != null && Object.hasOwnProperty.call(message, "communityPluginManagedEvent"))
$root.social.mixi.application.model.v1.CommunityPluginManagedEvent.encode(message.communityPluginManagedEvent, writer.uint32(58).fork(), q + 1).ldelim();
return writer;
};

Event.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.Event();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.eventId = reader.string();
break;
}
case 2: {
message.eventType = reader.int32();
break;
}
case 3: {
message.pingEvent = $root.social.mixi.application.model.v1.PingEvent.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 4: {
message.postCreatedEvent = $root.social.mixi.application.model.v1.PostCreatedEvent.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 5: {
message.communityMemberChangedEvent = $root.social.mixi.application.model.v1.CommunityMemberChangedEvent.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 6: {
message.chatMessageReceivedEvent = $root.social.mixi.application.model.v1.ChatMessageReceivedEvent.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 7: {
message.communityPluginManagedEvent = $root.social.mixi.application.model.v1.CommunityPluginManagedEvent.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

Event.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.Event)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.Event: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.Event();
if (object.eventId != null)
message.eventId = String(object.eventId);
switch (object.eventType) {
default:
if (typeof object.eventType === "number") {
message.eventType = object.eventType;
break;
}
break;
case "EVENT_TYPE_UNSPECIFIED":
case 0:
message.eventType = 0;
break;
case "EVENT_TYPE_PING":
case 1:
message.eventType = 1;
break;
case "EVENT_TYPE_POST_CREATED":
case 2:
message.eventType = 2;
break;
case "EVENT_TYPE_COMMUNITY_MEMBER_CHANGED":
case 3:
message.eventType = 3;
break;
case "EVENT_TYPE_CHAT_MESSAGE_RECEIVED":
case 4:
message.eventType = 4;
break;
case "EVENT_TYPE_COMMUNITY_PLUGIN_MANAGED":
case 5:
message.eventType = 5;
break;
}
if (object.pingEvent != null) {
if (!$util.isObject(object.pingEvent))
throw TypeError(".social.mixi.application.model.v1.Event.pingEvent: object expected");
message.pingEvent = $root.social.mixi.application.model.v1.PingEvent.fromObject(object.pingEvent, long + 1);
}
if (object.postCreatedEvent != null) {
if (!$util.isObject(object.postCreatedEvent))
throw TypeError(".social.mixi.application.model.v1.Event.postCreatedEvent: object expected");
message.postCreatedEvent = $root.social.mixi.application.model.v1.PostCreatedEvent.fromObject(object.postCreatedEvent, long + 1);
}
if (object.communityMemberChangedEvent != null) {
if (!$util.isObject(object.communityMemberChangedEvent))
throw TypeError(".social.mixi.application.model.v1.Event.communityMemberChangedEvent: object expected");
message.communityMemberChangedEvent = $root.social.mixi.application.model.v1.CommunityMemberChangedEvent.fromObject(object.communityMemberChangedEvent, long + 1);
}
if (object.chatMessageReceivedEvent != null) {
if (!$util.isObject(object.chatMessageReceivedEvent))
throw TypeError(".social.mixi.application.model.v1.Event.chatMessageReceivedEvent: object expected");
message.chatMessageReceivedEvent = $root.social.mixi.application.model.v1.ChatMessageReceivedEvent.fromObject(object.chatMessageReceivedEvent, long + 1);
}
if (object.communityPluginManagedEvent != null) {
if (!$util.isObject(object.communityPluginManagedEvent))
throw TypeError(".social.mixi.application.model.v1.Event.communityPluginManagedEvent: object expected");
message.communityPluginManagedEvent = $root.social.mixi.application.model.v1.CommunityPluginManagedEvent.fromObject(object.communityPluginManagedEvent, long + 1);
}
return message;
};

Event.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
object.eventId = "";
object.eventType = options.enums === String ? "EVENT_TYPE_UNSPECIFIED" : 0;
}
if (message.eventId != null && Object.hasOwnProperty.call(message, "eventId"))
object.eventId = message.eventId;
if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
object.eventType = options.enums === String ? $root.social.mixi.application.const_.v1.EventType[message.eventType] === undefined ? message.eventType : $root.social.mixi.application.const_.v1.EventType[message.eventType] : message.eventType;
if (message.pingEvent != null && Object.hasOwnProperty.call(message, "pingEvent")) {
object.pingEvent = $root.social.mixi.application.model.v1.PingEvent.toObject(message.pingEvent, options, q + 1);
if (options.oneofs)
object.body = "pingEvent";
}
if (message.postCreatedEvent != null && Object.hasOwnProperty.call(message, "postCreatedEvent")) {
object.postCreatedEvent = $root.social.mixi.application.model.v1.PostCreatedEvent.toObject(message.postCreatedEvent, options, q + 1);
if (options.oneofs)
object.body = "postCreatedEvent";
}
if (message.communityMemberChangedEvent != null && Object.hasOwnProperty.call(message, "communityMemberChangedEvent")) {
object.communityMemberChangedEvent = $root.social.mixi.application.model.v1.CommunityMemberChangedEvent.toObject(message.communityMemberChangedEvent, options, q + 1);
if (options.oneofs)
object.body = "communityMemberChangedEvent";
}
if (message.chatMessageReceivedEvent != null && Object.hasOwnProperty.call(message, "chatMessageReceivedEvent")) {
object.chatMessageReceivedEvent = $root.social.mixi.application.model.v1.ChatMessageReceivedEvent.toObject(message.chatMessageReceivedEvent, options, q + 1);
if (options.oneofs)
object.body = "chatMessageReceivedEvent";
}
if (message.communityPluginManagedEvent != null && Object.hasOwnProperty.call(message, "communityPluginManagedEvent")) {
object.communityPluginManagedEvent = $root.social.mixi.application.model.v1.CommunityPluginManagedEvent.toObject(message.communityPluginManagedEvent, options, q + 1);
if (options.oneofs)
object.body = "communityPluginManagedEvent";
}
return object;
};

Event.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return Event;
})();

v1.PingEvent = (function() {

function PingEvent(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PingEvent.create = function create(properties) {
return new PingEvent(properties);
};

PingEvent.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
return writer;
};

PingEvent.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PingEvent();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PingEvent.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PingEvent)
return object;
return new $root.social.mixi.application.model.v1.PingEvent();
};

PingEvent.toObject = function toObject() {
return {};
};

PingEvent.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PingEvent;
})();

v1.PostCreatedEvent = (function() {

function PostCreatedEvent(properties) {
this.eventReasonList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

PostCreatedEvent.prototype.eventReasonList = $util.emptyArray;
PostCreatedEvent.prototype.post = null;
PostCreatedEvent.prototype.issuer = null;
PostCreatedEvent.prototype.postedCommunity = null;

let $oneOfFields;

// Virtual OneOf for proto3 optional field
Object.defineProperty(PostCreatedEvent.prototype, "_postedCommunity", {
get: $util.oneOfGetter($oneOfFields = ["postedCommunity"]),
set: $util.oneOfSetter($oneOfFields)
});

PostCreatedEvent.create = function create(properties) {
return new PostCreatedEvent(properties);
};

PostCreatedEvent.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.eventReasonList != null && message.eventReasonList.length) {
writer.uint32(10).fork();
for (let i = 0; i < message.eventReasonList.length; ++i)
writer.int32(message.eventReasonList[i]);
writer.ldelim();
}
if (message.post != null && Object.hasOwnProperty.call(message, "post"))
$root.social.mixi.application.model.v1.Post.encode(message.post, writer.uint32(18).fork(), q + 1).ldelim();
if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer"))
$root.social.mixi.application.model.v1.User.encode(message.issuer, writer.uint32(26).fork(), q + 1).ldelim();
if (message.postedCommunity != null && Object.hasOwnProperty.call(message, "postedCommunity"))
$root.social.mixi.application.model.v1.Community.encode(message.postedCommunity, writer.uint32(34).fork(), q + 1).ldelim();
return writer;
};

PostCreatedEvent.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.PostCreatedEvent();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.eventReasonList && message.eventReasonList.length))
message.eventReasonList = [];
if ((tag & 7) === 2) {
let end2 = reader.uint32() + reader.pos;
if (end2 > reader.len)
throw RangeError("index out of range");
reader.len = end2;
while (reader.pos < end2)
message.eventReasonList.push(reader.int32());
if (reader.pos !== end2)
throw RangeError("index out of range");
reader.len = end;
} else
message.eventReasonList.push(reader.int32());
break;
}
case 2: {
message.post = $root.social.mixi.application.model.v1.Post.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 3: {
message.issuer = $root.social.mixi.application.model.v1.User.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 4: {
message.postedCommunity = $root.social.mixi.application.model.v1.Community.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

PostCreatedEvent.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.PostCreatedEvent)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.PostCreatedEvent: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.PostCreatedEvent();
if (object.eventReasonList) {
if (!Array.isArray(object.eventReasonList))
throw TypeError(".social.mixi.application.model.v1.PostCreatedEvent.eventReasonList: array expected");
message.eventReasonList = [];
for (let i = 0; i < object.eventReasonList.length; ++i)
switch (object.eventReasonList[i]) {
default:
if (typeof object.eventReasonList[i] === "number") {
message.eventReasonList[i] = object.eventReasonList[i];
break;
}
case "EVENT_REASON_UNSPECIFIED":
case 0:
message.eventReasonList[i] = 0;
break;
case "EVENT_REASON_PING":
case 1:
message.eventReasonList[i] = 1;
break;
case "EVENT_REASON_POST_REPLY":
case 2:
message.eventReasonList[i] = 2;
break;
case "EVENT_REASON_POST_MENTIONED":
case 3:
message.eventReasonList[i] = 3;
break;
case "EVENT_REASON_POST_QUOTED":
case 4:
message.eventReasonList[i] = 4;
break;
case "EVENT_REASON_POST_COMMUNITY":
case 5:
message.eventReasonList[i] = 5;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_JOINED":
case 6:
message.eventReasonList[i] = 6;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_LEFT":
case 7:
message.eventReasonList[i] = 7;
break;
case "EVENT_REASON_DIRECT_MESSAGE_RECEIVED":
case 8:
message.eventReasonList[i] = 8;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_INSTALLED":
case 9:
message.eventReasonList[i] = 9;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_UNINSTALLED":
case 10:
message.eventReasonList[i] = 10;
break;
}
}
if (object.post != null) {
if (!$util.isObject(object.post))
throw TypeError(".social.mixi.application.model.v1.PostCreatedEvent.post: object expected");
message.post = $root.social.mixi.application.model.v1.Post.fromObject(object.post, long + 1);
}
if (object.issuer != null) {
if (!$util.isObject(object.issuer))
throw TypeError(".social.mixi.application.model.v1.PostCreatedEvent.issuer: object expected");
message.issuer = $root.social.mixi.application.model.v1.User.fromObject(object.issuer, long + 1);
}
if (object.postedCommunity != null) {
if (!$util.isObject(object.postedCommunity))
throw TypeError(".social.mixi.application.model.v1.PostCreatedEvent.postedCommunity: object expected");
message.postedCommunity = $root.social.mixi.application.model.v1.Community.fromObject(object.postedCommunity, long + 1);
}
return message;
};

PostCreatedEvent.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.eventReasonList = [];
if (options.defaults) {
object.post = null;
object.issuer = null;
}
if (message.eventReasonList && message.eventReasonList.length) {
object.eventReasonList = [];
for (let j = 0; j < message.eventReasonList.length; ++j)
object.eventReasonList[j] = options.enums === String ? $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] === undefined ? message.eventReasonList[j] : $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] : message.eventReasonList[j];
}
if (message.post != null && Object.hasOwnProperty.call(message, "post"))
object.post = $root.social.mixi.application.model.v1.Post.toObject(message.post, options, q + 1);
if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer"))
object.issuer = $root.social.mixi.application.model.v1.User.toObject(message.issuer, options, q + 1);
if (message.postedCommunity != null && Object.hasOwnProperty.call(message, "postedCommunity")) {
object.postedCommunity = $root.social.mixi.application.model.v1.Community.toObject(message.postedCommunity, options, q + 1);
if (options.oneofs)
object._postedCommunity = "postedCommunity";
}
return object;
};

PostCreatedEvent.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return PostCreatedEvent;
})();

v1.CommunityMemberChangedEvent = (function() {

function CommunityMemberChangedEvent(properties) {
this.eventReasonList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CommunityMemberChangedEvent.prototype.eventReasonList = $util.emptyArray;
CommunityMemberChangedEvent.prototype.member = null;
CommunityMemberChangedEvent.prototype.community = null;

CommunityMemberChangedEvent.create = function create(properties) {
return new CommunityMemberChangedEvent(properties);
};

CommunityMemberChangedEvent.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.eventReasonList != null && message.eventReasonList.length) {
writer.uint32(10).fork();
for (let i = 0; i < message.eventReasonList.length; ++i)
writer.int32(message.eventReasonList[i]);
writer.ldelim();
}
if (message.member != null && Object.hasOwnProperty.call(message, "member"))
$root.social.mixi.application.model.v1.User.encode(message.member, writer.uint32(18).fork(), q + 1).ldelim();
if (message.community != null && Object.hasOwnProperty.call(message, "community"))
$root.social.mixi.application.model.v1.Community.encode(message.community, writer.uint32(26).fork(), q + 1).ldelim();
return writer;
};

CommunityMemberChangedEvent.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.CommunityMemberChangedEvent();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.eventReasonList && message.eventReasonList.length))
message.eventReasonList = [];
if ((tag & 7) === 2) {
let end2 = reader.uint32() + reader.pos;
if (end2 > reader.len)
throw RangeError("index out of range");
reader.len = end2;
while (reader.pos < end2)
message.eventReasonList.push(reader.int32());
if (reader.pos !== end2)
throw RangeError("index out of range");
reader.len = end;
} else
message.eventReasonList.push(reader.int32());
break;
}
case 2: {
message.member = $root.social.mixi.application.model.v1.User.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 3: {
message.community = $root.social.mixi.application.model.v1.Community.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CommunityMemberChangedEvent.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.CommunityMemberChangedEvent)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.CommunityMemberChangedEvent: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.CommunityMemberChangedEvent();
if (object.eventReasonList) {
if (!Array.isArray(object.eventReasonList))
throw TypeError(".social.mixi.application.model.v1.CommunityMemberChangedEvent.eventReasonList: array expected");
message.eventReasonList = [];
for (let i = 0; i < object.eventReasonList.length; ++i)
switch (object.eventReasonList[i]) {
default:
if (typeof object.eventReasonList[i] === "number") {
message.eventReasonList[i] = object.eventReasonList[i];
break;
}
case "EVENT_REASON_UNSPECIFIED":
case 0:
message.eventReasonList[i] = 0;
break;
case "EVENT_REASON_PING":
case 1:
message.eventReasonList[i] = 1;
break;
case "EVENT_REASON_POST_REPLY":
case 2:
message.eventReasonList[i] = 2;
break;
case "EVENT_REASON_POST_MENTIONED":
case 3:
message.eventReasonList[i] = 3;
break;
case "EVENT_REASON_POST_QUOTED":
case 4:
message.eventReasonList[i] = 4;
break;
case "EVENT_REASON_POST_COMMUNITY":
case 5:
message.eventReasonList[i] = 5;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_JOINED":
case 6:
message.eventReasonList[i] = 6;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_LEFT":
case 7:
message.eventReasonList[i] = 7;
break;
case "EVENT_REASON_DIRECT_MESSAGE_RECEIVED":
case 8:
message.eventReasonList[i] = 8;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_INSTALLED":
case 9:
message.eventReasonList[i] = 9;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_UNINSTALLED":
case 10:
message.eventReasonList[i] = 10;
break;
}
}
if (object.member != null) {
if (!$util.isObject(object.member))
throw TypeError(".social.mixi.application.model.v1.CommunityMemberChangedEvent.member: object expected");
message.member = $root.social.mixi.application.model.v1.User.fromObject(object.member, long + 1);
}
if (object.community != null) {
if (!$util.isObject(object.community))
throw TypeError(".social.mixi.application.model.v1.CommunityMemberChangedEvent.community: object expected");
message.community = $root.social.mixi.application.model.v1.Community.fromObject(object.community, long + 1);
}
return message;
};

CommunityMemberChangedEvent.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.eventReasonList = [];
if (options.defaults) {
object.member = null;
object.community = null;
}
if (message.eventReasonList && message.eventReasonList.length) {
object.eventReasonList = [];
for (let j = 0; j < message.eventReasonList.length; ++j)
object.eventReasonList[j] = options.enums === String ? $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] === undefined ? message.eventReasonList[j] : $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] : message.eventReasonList[j];
}
if (message.member != null && Object.hasOwnProperty.call(message, "member"))
object.member = $root.social.mixi.application.model.v1.User.toObject(message.member, options, q + 1);
if (message.community != null && Object.hasOwnProperty.call(message, "community"))
object.community = $root.social.mixi.application.model.v1.Community.toObject(message.community, options, q + 1);
return object;
};

CommunityMemberChangedEvent.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CommunityMemberChangedEvent;
})();

v1.ChatMessageReceivedEvent = (function() {

function ChatMessageReceivedEvent(properties) {
this.eventReasonList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

ChatMessageReceivedEvent.prototype.eventReasonList = $util.emptyArray;
ChatMessageReceivedEvent.prototype.message = null;
ChatMessageReceivedEvent.prototype.issuer = null;

ChatMessageReceivedEvent.create = function create(properties) {
return new ChatMessageReceivedEvent(properties);
};

ChatMessageReceivedEvent.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.eventReasonList != null && message.eventReasonList.length) {
writer.uint32(10).fork();
for (let i = 0; i < message.eventReasonList.length; ++i)
writer.int32(message.eventReasonList[i]);
writer.ldelim();
}
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
$root.social.mixi.application.model.v1.ChatMessage.encode(message.message, writer.uint32(18).fork(), q + 1).ldelim();
if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer"))
$root.social.mixi.application.model.v1.User.encode(message.issuer, writer.uint32(26).fork(), q + 1).ldelim();
return writer;
};

ChatMessageReceivedEvent.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.ChatMessageReceivedEvent();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.eventReasonList && message.eventReasonList.length))
message.eventReasonList = [];
if ((tag & 7) === 2) {
let end2 = reader.uint32() + reader.pos;
if (end2 > reader.len)
throw RangeError("index out of range");
reader.len = end2;
while (reader.pos < end2)
message.eventReasonList.push(reader.int32());
if (reader.pos !== end2)
throw RangeError("index out of range");
reader.len = end;
} else
message.eventReasonList.push(reader.int32());
break;
}
case 2: {
message.message = $root.social.mixi.application.model.v1.ChatMessage.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
case 3: {
message.issuer = $root.social.mixi.application.model.v1.User.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

ChatMessageReceivedEvent.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.ChatMessageReceivedEvent)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.ChatMessageReceivedEvent: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.ChatMessageReceivedEvent();
if (object.eventReasonList) {
if (!Array.isArray(object.eventReasonList))
throw TypeError(".social.mixi.application.model.v1.ChatMessageReceivedEvent.eventReasonList: array expected");
message.eventReasonList = [];
for (let i = 0; i < object.eventReasonList.length; ++i)
switch (object.eventReasonList[i]) {
default:
if (typeof object.eventReasonList[i] === "number") {
message.eventReasonList[i] = object.eventReasonList[i];
break;
}
case "EVENT_REASON_UNSPECIFIED":
case 0:
message.eventReasonList[i] = 0;
break;
case "EVENT_REASON_PING":
case 1:
message.eventReasonList[i] = 1;
break;
case "EVENT_REASON_POST_REPLY":
case 2:
message.eventReasonList[i] = 2;
break;
case "EVENT_REASON_POST_MENTIONED":
case 3:
message.eventReasonList[i] = 3;
break;
case "EVENT_REASON_POST_QUOTED":
case 4:
message.eventReasonList[i] = 4;
break;
case "EVENT_REASON_POST_COMMUNITY":
case 5:
message.eventReasonList[i] = 5;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_JOINED":
case 6:
message.eventReasonList[i] = 6;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_LEFT":
case 7:
message.eventReasonList[i] = 7;
break;
case "EVENT_REASON_DIRECT_MESSAGE_RECEIVED":
case 8:
message.eventReasonList[i] = 8;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_INSTALLED":
case 9:
message.eventReasonList[i] = 9;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_UNINSTALLED":
case 10:
message.eventReasonList[i] = 10;
break;
}
}
if (object.message != null) {
if (!$util.isObject(object.message))
throw TypeError(".social.mixi.application.model.v1.ChatMessageReceivedEvent.message: object expected");
message.message = $root.social.mixi.application.model.v1.ChatMessage.fromObject(object.message, long + 1);
}
if (object.issuer != null) {
if (!$util.isObject(object.issuer))
throw TypeError(".social.mixi.application.model.v1.ChatMessageReceivedEvent.issuer: object expected");
message.issuer = $root.social.mixi.application.model.v1.User.fromObject(object.issuer, long + 1);
}
return message;
};

ChatMessageReceivedEvent.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.eventReasonList = [];
if (options.defaults) {
object.message = null;
object.issuer = null;
}
if (message.eventReasonList && message.eventReasonList.length) {
object.eventReasonList = [];
for (let j = 0; j < message.eventReasonList.length; ++j)
object.eventReasonList[j] = options.enums === String ? $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] === undefined ? message.eventReasonList[j] : $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] : message.eventReasonList[j];
}
if (message.message != null && Object.hasOwnProperty.call(message, "message"))
object.message = $root.social.mixi.application.model.v1.ChatMessage.toObject(message.message, options, q + 1);
if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer"))
object.issuer = $root.social.mixi.application.model.v1.User.toObject(message.issuer, options, q + 1);
return object;
};

ChatMessageReceivedEvent.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return ChatMessageReceivedEvent;
})();

v1.CommunityPluginManagedEvent = (function() {

function CommunityPluginManagedEvent(properties) {
this.eventReasonList = [];
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

CommunityPluginManagedEvent.prototype.eventReasonList = $util.emptyArray;
CommunityPluginManagedEvent.prototype.community = null;

CommunityPluginManagedEvent.create = function create(properties) {
return new CommunityPluginManagedEvent(properties);
};

CommunityPluginManagedEvent.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.eventReasonList != null && message.eventReasonList.length) {
writer.uint32(10).fork();
for (let i = 0; i < message.eventReasonList.length; ++i)
writer.int32(message.eventReasonList[i]);
writer.ldelim();
}
if (message.community != null && Object.hasOwnProperty.call(message, "community"))
$root.social.mixi.application.model.v1.Community.encode(message.community, writer.uint32(18).fork(), q + 1).ldelim();
return writer;
};

CommunityPluginManagedEvent.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.social.mixi.application.model.v1.CommunityPluginManagedEvent();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
if (!(message.eventReasonList && message.eventReasonList.length))
message.eventReasonList = [];
if ((tag & 7) === 2) {
let end2 = reader.uint32() + reader.pos;
if (end2 > reader.len)
throw RangeError("index out of range");
reader.len = end2;
while (reader.pos < end2)
message.eventReasonList.push(reader.int32());
if (reader.pos !== end2)
throw RangeError("index out of range");
reader.len = end;
} else
message.eventReasonList.push(reader.int32());
break;
}
case 2: {
message.community = $root.social.mixi.application.model.v1.Community.decode(reader, reader.uint32(), undefined, long + 1);
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

CommunityPluginManagedEvent.fromObject = function fromObject(object, long) {
if (object instanceof $root.social.mixi.application.model.v1.CommunityPluginManagedEvent)
return object;
if (!$util.isObject(object))
throw TypeError(".social.mixi.application.model.v1.CommunityPluginManagedEvent: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.social.mixi.application.model.v1.CommunityPluginManagedEvent();
if (object.eventReasonList) {
if (!Array.isArray(object.eventReasonList))
throw TypeError(".social.mixi.application.model.v1.CommunityPluginManagedEvent.eventReasonList: array expected");
message.eventReasonList = [];
for (let i = 0; i < object.eventReasonList.length; ++i)
switch (object.eventReasonList[i]) {
default:
if (typeof object.eventReasonList[i] === "number") {
message.eventReasonList[i] = object.eventReasonList[i];
break;
}
case "EVENT_REASON_UNSPECIFIED":
case 0:
message.eventReasonList[i] = 0;
break;
case "EVENT_REASON_PING":
case 1:
message.eventReasonList[i] = 1;
break;
case "EVENT_REASON_POST_REPLY":
case 2:
message.eventReasonList[i] = 2;
break;
case "EVENT_REASON_POST_MENTIONED":
case 3:
message.eventReasonList[i] = 3;
break;
case "EVENT_REASON_POST_QUOTED":
case 4:
message.eventReasonList[i] = 4;
break;
case "EVENT_REASON_POST_COMMUNITY":
case 5:
message.eventReasonList[i] = 5;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_JOINED":
case 6:
message.eventReasonList[i] = 6;
break;
case "EVENT_REASON_COMMUNITY_MEMBER_LEFT":
case 7:
message.eventReasonList[i] = 7;
break;
case "EVENT_REASON_DIRECT_MESSAGE_RECEIVED":
case 8:
message.eventReasonList[i] = 8;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_INSTALLED":
case 9:
message.eventReasonList[i] = 9;
break;
case "EVENT_REASON_COMMUNITY_PLUGIN_UNINSTALLED":
case 10:
message.eventReasonList[i] = 10;
break;
}
}
if (object.community != null) {
if (!$util.isObject(object.community))
throw TypeError(".social.mixi.application.model.v1.CommunityPluginManagedEvent.community: object expected");
message.community = $root.social.mixi.application.model.v1.Community.fromObject(object.community, long + 1);
}
return message;
};

CommunityPluginManagedEvent.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.arrays || options.defaults)
object.eventReasonList = [];
if (options.defaults)
object.community = null;
if (message.eventReasonList && message.eventReasonList.length) {
object.eventReasonList = [];
for (let j = 0; j < message.eventReasonList.length; ++j)
object.eventReasonList[j] = options.enums === String ? $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] === undefined ? message.eventReasonList[j] : $root.social.mixi.application.const_.v1.EventReason[message.eventReasonList[j]] : message.eventReasonList[j];
}
if (message.community != null && Object.hasOwnProperty.call(message, "community"))
object.community = $root.social.mixi.application.model.v1.Community.toObject(message.community, options, q + 1);
return object;
};

CommunityPluginManagedEvent.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return CommunityPluginManagedEvent;
})();

return v1;
})();

return model;
})();

return application;
})();

return mixi;
})();

return social;
})();

export const google = $root.google = (() => {

const google = {};

google.protobuf = (function() {

const protobuf = {};

protobuf.Timestamp = (function() {

function Timestamp(properties) {
if (properties)
for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null && keys[i] !== "__proto__")
this[keys[i]] = properties[keys[i]];
}

Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
Timestamp.prototype.nanos = 0;

Timestamp.create = function create(properties) {
return new Timestamp(properties);
};

Timestamp.encode = function encode(message, writer, q) {
if (!writer)
writer = $Writer.create();
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
writer.uint32(8).int64(message.seconds);
if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
writer.uint32(16).int32(message.nanos);
return writer;
};

Timestamp.decode = function decode(reader, length, error, long) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
if (long === undefined)
long = 0;
if (long > $Reader.recursionLimit)
throw Error("maximum nesting depth exceeded");
let end, message;
if (length === undefined)
end = reader.len;
else {
end = reader.pos + length;
if (end > reader.len)
throw RangeError("index out of range");
length = reader.len;
reader.len = end;
}
message = new $root.google.protobuf.Timestamp();
while (reader.pos < end) {
let tag = reader.uint32();
if (tag === error)
break;
switch (tag >>> 3) {
case 1: {
message.seconds = reader.int64();
break;
}
case 2: {
message.nanos = reader.int32();
break;
}
default:
reader.skipType(tag & 7, long);
break;
}
}
if (length !== undefined) {
if (reader.pos !== end)
throw RangeError("index out of range");
reader.len = length;
}
return message;
};

Timestamp.fromObject = function fromObject(object, long) {
if (object instanceof $root.google.protobuf.Timestamp)
return object;
if (!$util.isObject(object))
throw TypeError(".google.protobuf.Timestamp: object expected");
if (long === undefined)
long = 0;
if (long > $util.recursionLimit)
throw Error("maximum nesting depth exceeded");
let message = new $root.google.protobuf.Timestamp();
if (object.seconds != null)
if ($util.Long)
message.seconds = $util.Long.fromValue(object.seconds, false);
else if (typeof object.seconds === "string")
message.seconds = parseInt(object.seconds, 10);
else if (typeof object.seconds === "number")
message.seconds = object.seconds;
else if (typeof object.seconds === "object")
message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
if (object.nanos != null)
message.nanos = object.nanos | 0;
return message;
};

Timestamp.toObject = function toObject(message, options, q) {
if (!options)
options = {};
if (q === undefined)
q = 0;
if (q > $util.recursionLimit)
throw Error("max depth exceeded");
let object = {};
if (options.defaults) {
if ($util.Long) {
let long = new $util.Long(0, 0, false);
object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
} else
object.seconds = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
object.nanos = 0;
}
if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
if (typeof BigInt !== "undefined" && options.longs === BigInt)
object.seconds = typeof message.seconds === "number" ? BigInt(message.seconds) : $util.Long.fromBits(message.seconds.low >>> 0, message.seconds.high >>> 0, false).toBigInt();
else if (typeof message.seconds === "number")
object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
else
object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
object.nanos = message.nanos;
return object;
};

Timestamp.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};

return Timestamp;
})();

return protobuf;
})();

return google;
})();

export { $root as default };
