/// <reference types="vitest/globals" />

import path from "node:path";
import { fileURLToPath } from "node:url";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import {
  getApiServiceClient,
  getStreamServiceClient,
  getSendEventRequestType,
} from "../src/proto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROTO_DIR = path.resolve(__dirname, "..", "proto");

const PROTO_FILES = [
  "social/mixi/application/service/application_api/v1/service.proto",
  "social/mixi/application/service/application_stream/v1/service.proto",
  "social/mixi/application/service/client_endpoint/v1/service.proto",
];

const PROTO_LOADER_OPTIONS: protoLoader.Options = {
  keepCase: false,
  longs: Number,
  enums: Number,
  defaults: true,
  oneofs: true,
};

describe("proto loading", () => {
  test("loadSync resolves all SDK proto files without duplicate-name errors", () => {
    expect(() =>
      protoLoader.loadSync(PROTO_FILES, {
        ...PROTO_LOADER_OPTIONS,
        includeDirs: [PROTO_DIR],
      })
    ).not.toThrow();
  });

  test("package definition exposes ApplicationService and SendEventRequest", () => {
    const pkgDef = protoLoader.loadSync(PROTO_FILES, {
      ...PROTO_LOADER_OPTIONS,
      includeDirs: [PROTO_DIR],
    });
    expect(
      pkgDef[
        "social.mixi.application.service.application_api.v1.ApplicationService"
      ]
    ).toBeDefined();
    expect(
      pkgDef[
        "social.mixi.application.service.application_stream.v1.ApplicationService"
      ]
    ).toBeDefined();
    expect(
      pkgDef[
        "social.mixi.application.service.client_endpoint.v1.SendEventRequest"
      ]
    ).toBeDefined();
  });

  test("grpc.loadPackageDefinition accepts the package definition", () => {
    const pkgDef = protoLoader.loadSync(PROTO_FILES, {
      ...PROTO_LOADER_OPTIONS,
      includeDirs: [PROTO_DIR],
    });
    expect(() => grpc.loadPackageDefinition(pkgDef)).not.toThrow();
  });
});

describe("proto module exports", () => {
  test("getApiServiceClient returns a gRPC client constructor", () => {
    const ctor = getApiServiceClient();
    expect(typeof ctor).toBe("function");
    // ServiceClientConstructor exposes service definitions on the class.
    expect(typeof ctor.prototype).toBe("object");
  });

  test("getStreamServiceClient returns a gRPC client constructor", () => {
    const ctor = getStreamServiceClient();
    expect(typeof ctor).toBe("function");
    expect(typeof ctor.prototype).toBe("object");
  });

  test("getSendEventRequestType exposes a decode() function", () => {
    const t = getSendEventRequestType();
    expect(typeof t.decode).toBe("function");
  });

  test("getApiServiceClient memoizes the package definition (same constructor)", () => {
    expect(getApiServiceClient()).toBe(getApiServiceClient());
  });

  test("getSendEventRequestType.decode() round-trips an empty SendEventRequest", () => {
    const t = getSendEventRequestType();
    // Empty protobuf body should decode to an empty events array — exactly the
    // contract the WebhookServer depends on.
    const decoded = t.decode(new Uint8Array(0)) as { events: unknown[] };
    expect(decoded).toBeDefined();
    expect(decoded.events).toBeDefined();
    expect(Array.isArray(decoded.events)).toBe(true);
  });
});
