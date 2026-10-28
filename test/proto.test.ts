/// <reference types="vitest/globals" />

import path from "node:path";
import { fileURLToPath } from "node:url";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import protobuf from "protobufjs";
import {
  getApiServiceClient,
  getSendEventRequestType,
  getStreamServiceClient,
} from "../src/proto";

// src/proto.ts uses the static code generated from proto/. These tests use @grpc/proto-loader, which reads proto/ at runtime, as the reference implementation.

const PROTO_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "proto"
);
const PROTO_FILES = [
  "social/mixi/application/service/application_api/v1/service.proto",
  "social/mixi/application/service/application_stream/v1/service.proto",
  "social/mixi/application/service/client_endpoint/v1/service.proto",
];
const API_PACKAGE = "social.mixi.application.service.application_api.v1";
const STREAM_PACKAGE = "social.mixi.application.service.application_stream.v1";

const packageDefinition = protoLoader.loadSync(PROTO_FILES, {
  keepCase: false,
  longs: Number,
  enums: Number,
  defaults: true,
  oneofs: true,
  includeDirs: [PROTO_DIR],
});
const reference = grpc.loadPackageDefinition(packageDefinition);

const root = new protobuf.Root();
root.resolvePath = (_origin, target) =>
  path.isAbsolute(target) ? target : path.join(PROTO_DIR, target);
root.loadSync(PROTO_FILES, { keepCase: false });
root.resolveAll();

type MethodDefinition = grpc.MethodDefinition<unknown, unknown> & {
  originalName?: string;
};

function referenceService(packageName: string) {
  const service = packageName
    .split(".")
    .reduce<unknown>(
      (node, key) => (node as Record<string, unknown>)[key],
      reference
    ) as Record<string, grpc.ServiceClientConstructor>;
  return service.ApplicationService!.service as Record<
    string,
    MethodDefinition
  >;
}

function scalarSample(field: protobuf.Field): unknown {
  switch (field.type) {
    case "string":
      return `${field.name} 値 🎉`;
    case "bool":
      return true;
    case "double":
    case "float":
      return 1.5;
    case "bytes":
      return Buffer.from([1, 2, 3]);
    default:
      return 7;
  }
}

/** Builds a message with every field set (only the first member of each real oneof) so encoding exercises the whole schema. */
function sample(type: protobuf.Type, depth = 0): Record<string, unknown> {
  if (type.fullName === ".google.protobuf.Timestamp") {
    return { seconds: 1700000000, nanos: 123000000 };
  }
  const message: Record<string, unknown> = {};
  for (const field of type.fieldsArray) {
    const oneof = field.partOf;
    if (
      oneof &&
      !oneof.name.startsWith("_") &&
      oneof.fieldsArray[0] !== field
    ) {
      continue;
    }
    let value: unknown;
    if (field.resolvedType instanceof protobuf.Enum) {
      value = Math.max(...Object.values(field.resolvedType.values));
    } else if (field.resolvedType instanceof protobuf.Type) {
      if (depth >= 4) continue;
      value = sample(field.resolvedType, depth + 1);
    } else {
      value = scalarSample(field);
    }
    message[field.name] = field.repeated ? [value, value] : value;
  }
  return message;
}

function expectSameMethod(
  actual: MethodDefinition,
  expected: MethodDefinition,
  requestType: string,
  responseType: string
) {
  expect({
    path: actual.path,
    requestStream: actual.requestStream,
    responseStream: actual.responseStream,
    originalName: actual.originalName,
  }).toEqual({
    path: expected.path,
    requestStream: expected.requestStream,
    responseStream: expected.responseStream,
    originalName: expected.originalName,
  });

  for (const [typeName, serialize, deserialize] of [
    [requestType, "requestSerialize", "requestDeserialize"],
    [responseType, "responseSerialize", "responseDeserialize"],
  ] as const) {
    const value = sample(root.lookupType(typeName));
    const bytes = Buffer.from(expected[serialize](value));
    expect(Buffer.from(actual[serialize](value))).toEqual(bytes);
    expect(actual[deserialize](bytes)).toEqual(expected[deserialize](bytes));
  }
}

describe("generated proto code matches @grpc/proto-loader", () => {
  const apiService = getApiServiceClient().service as Record<
    string,
    MethodDefinition
  >;
  const apiReference = referenceService(API_PACKAGE);

  test("ApplicationService (API) has the same methods", () => {
    expect(Object.keys(apiService).sort()).toEqual(
      Object.keys(apiReference).sort()
    );
  });

  test.each(Object.keys(apiReference))("%s", (name) => {
    expectSameMethod(
      apiService[name]!,
      apiReference[name]!,
      `${API_PACKAGE}.${name}Request`,
      `${API_PACKAGE}.${name}Response`
    );
  });

  test("SubscribeEvents", () => {
    const streamService = getStreamServiceClient().service as Record<
      string,
      MethodDefinition
    >;
    const streamReference = referenceService(STREAM_PACKAGE);
    expect(Object.keys(streamService)).toEqual(Object.keys(streamReference));
    expectSameMethod(
      streamService.SubscribeEvents!,
      streamReference.SubscribeEvents!,
      `${STREAM_PACKAGE}.SubscribeEventsRequest`,
      `${STREAM_PACKAGE}.SubscribeEventsResponse`
    );
  });

  test("SendEventRequest (webhook body)", () => {
    const name =
      "social.mixi.application.service.client_endpoint.v1.SendEventRequest";
    const expected = packageDefinition[name] as unknown as {
      serialize: (value: unknown) => Buffer;
      deserialize: (bytes: Buffer) => unknown;
    };
    const bytes = expected.serialize(sample(root.lookupType(name)));
    expect(getSendEventRequestType().decode(new Uint8Array(bytes))).toEqual(
      expected.deserialize(bytes)
    );
    expect(getSendEventRequestType().decode(new Uint8Array(0))).toEqual(
      expected.deserialize(Buffer.alloc(0))
    );
  });
});
