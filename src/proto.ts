import * as grpc from "@grpc/grpc-js";
import type { IConversionOptions } from "protobufjs";
import { social } from "./generated/proto.js";

// The same conversion @grpc/proto-loader applied, so src/convert.ts keeps receiving identical objects.
const CONVERSION_OPTIONS: IConversionOptions = {
  longs: Number,
  enums: Number,
  defaults: true,
  oneofs: true,
};

interface StaticMessageType {
  fromObject(object: Record<string, unknown>): unknown;
  encode(message: unknown): { finish(): Uint8Array };
  decode(bytes: Uint8Array): unknown;
  toObject(message: unknown, options?: IConversionOptions): unknown;
}

type MessageNamespace = Record<string, StaticMessageType>;

const api = social.mixi.application.service.application_api
  .v1 as unknown as MessageNamespace;
const stream = social.mixi.application.service.application_stream
  .v1 as unknown as MessageNamespace;
const clientEndpoint = social.mixi.application.service.client_endpoint
  .v1 as unknown as MessageNamespace;

const API_SERVICE =
  "social.mixi.application.service.application_api.v1.ApplicationService";
const STREAM_SERVICE =
  "social.mixi.application.service.application_stream.v1.ApplicationService";

// Every RPC in the proto takes <Name>Request and returns <Name>Response; test/spec.test.ts checks this table against the proto.
const API_METHODS = [
  "GetUsers",
  "GetPosts",
  "GetCommunities",
  "CreatePost",
  "DeletePost",
  "InitiatePostMediaUpload",
  "GetPostMediaStatus",
  "GetCommunityTimeline",
  "GetCommunityMemberList",
  "RestrictCommunityPost",
  "GetCommunitiesUsingApplication",
  "SendChatMessage",
  "GetStamps",
  "AddStampToPost",
  "SendDirectMessageToCommunityMember",
] as const;

function serializer(type: StaticMessageType) {
  return (value: unknown): Buffer => {
    if (Array.isArray(value)) {
      throw new Error(
        "Failed to serialize message: expected an object, got an array instead"
      );
    }
    return type
      .encode(type.fromObject(value as Record<string, unknown>))
      .finish() as Buffer;
  };
}

function deserializer(type: StaticMessageType) {
  return (bytes: Uint8Array): unknown =>
    type.toObject(type.decode(bytes), CONVERSION_OPTIONS);
}

function methodDefinition(
  service: string,
  name: string,
  types: MessageNamespace,
  responseStream: boolean
) {
  const request = types[`${name}Request`]!;
  const response = types[`${name}Response`]!;
  return {
    path: `/${service}/${name}`,
    requestStream: false,
    responseStream,
    requestSerialize: serializer(request),
    requestDeserialize: deserializer(request),
    responseSerialize: serializer(response),
    responseDeserialize: deserializer(response),
    originalName: name.charAt(0).toLowerCase() + name.slice(1),
  };
}

let apiServiceClient: grpc.ServiceClientConstructor | null = null;
let streamServiceClient: grpc.ServiceClientConstructor | null = null;

export function getApiServiceClient(): grpc.ServiceClientConstructor {
  apiServiceClient ??= grpc.makeGenericClientConstructor(
    Object.fromEntries(
      API_METHODS.map((name) => [
        name,
        methodDefinition(API_SERVICE, name, api, false),
      ])
    ),
    "ApplicationService"
  );
  return apiServiceClient;
}

export function getStreamServiceClient(): grpc.ServiceClientConstructor {
  streamServiceClient ??= grpc.makeGenericClientConstructor(
    {
      SubscribeEvents: methodDefinition(
        STREAM_SERVICE,
        "SubscribeEvents",
        stream,
        true
      ),
    },
    "ApplicationService"
  );
  return streamServiceClient;
}

export function getSendEventRequestType(): {
  decode: (buffer: Uint8Array) => unknown;
} {
  return { decode: deserializer(clientEndpoint.SendEventRequest!) };
}
