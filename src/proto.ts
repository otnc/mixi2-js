import path from "path";
import { fileURLToPath } from "url";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROTO_DIR = path.resolve(__dirname, "..", "proto");

const PROTO_LOADER_OPTIONS: protoLoader.Options = {
  keepCase: false,
  longs: Number,
  enums: Number,
  defaults: true,
  oneofs: true,
};

let _packageDefinition: protoLoader.PackageDefinition | null = null;
let _grpcObject: grpc.GrpcObject | null = null;

function getPackageDefinition(): protoLoader.PackageDefinition {
  if (!_packageDefinition) {
    _packageDefinition = protoLoader.loadSync(
      [
        "social/mixi/application/service/application_api/v1/service.proto",
        "social/mixi/application/service/application_stream/v1/service.proto",
        "social/mixi/application/service/client_endpoint/v1/service.proto",
      ],
      { ...PROTO_LOADER_OPTIONS, includeDirs: [PROTO_DIR] }
    );
  }
  return _packageDefinition;
}

function getGrpcObject(): grpc.GrpcObject {
  if (!_grpcObject) {
    _grpcObject = grpc.loadPackageDefinition(getPackageDefinition());
  }
  return _grpcObject;
}

function resolveNested(obj: grpc.GrpcObject, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    current = (current as Record<string, unknown>)[part];
    if (current === undefined) {
      throw new Error(`Could not resolve gRPC path: ${path}`);
    }
  }
  return current;
}

export function getApiServiceClient(): grpc.ServiceClientConstructor {
  const grpcObj = getGrpcObject();
  return resolveNested(
    grpcObj,
    "social.mixi.application.service.application_api.v1.ApplicationService"
  ) as grpc.ServiceClientConstructor;
}

export function getStreamServiceClient(): grpc.ServiceClientConstructor {
  const grpcObj = getGrpcObject();
  return resolveNested(
    grpcObj,
    "social.mixi.application.service.application_stream.v1.ApplicationService"
  ) as grpc.ServiceClientConstructor;
}

export function getSendEventRequestType(): {
  decode: (buffer: Uint8Array) => unknown;
} {
  const pkgDef = getPackageDefinition();
  const msgDef =
    pkgDef[
      "social.mixi.application.service.client_endpoint.v1.SendEventRequest"
    ];
  if (!msgDef || !("type" in msgDef)) {
    throw new Error("SendEventRequest message type not found in proto");
  }
  const pbType = (msgDef as { type: { decode: (buf: Uint8Array) => unknown } })
    .type;
  return pbType;
}
