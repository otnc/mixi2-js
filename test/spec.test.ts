/// <reference types="vitest/globals" />

import path from "node:path";
import { fileURLToPath } from "node:url";
import * as protoLoader from "@grpc/proto-loader";
import { Client } from "../src/client";
import * as types from "../src/types";

const PROTO_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "proto"
);
const API_PACKAGE = "social.mixi.application.service.application_api.v1";
const CONST_PACKAGE = "social.mixi.application.const.v1";

const packageDefinition = protoLoader.loadSync(
  [
    "social/mixi/application/service/application_api/v1/service.proto",
    "social/mixi/application/service/client_endpoint/v1/service.proto",
  ],
  { includeDirs: [PROTO_DIR] }
);

interface EnumDescriptor {
  name: string;
  value: { name: string; number: number }[];
}

function constEnum(name: string): EnumDescriptor {
  const def = packageDefinition[`${CONST_PACKAGE}.${name}`] as unknown as {
    type: EnumDescriptor;
  };
  return def.type;
}

function nestedEnum(message: string, name: string): EnumDescriptor {
  const def = packageDefinition[`${API_PACKAGE}.${message}`] as unknown as {
    type: { enumType: EnumDescriptor[] };
  };
  return def.type.enumType.find((e) => e.name === name)!;
}

function toScreamingSnake(name: string): string {
  return name.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}

const enumCases: [
  string,
  Record<string, string | number>,
  EnumDescriptor,
  string,
][] = [
  ...(
    [
      "EventType",
      "EventReason",
      "MediaType",
      "PostMediaType",
      "PostVisibility",
      "PostAccessLevel",
      "PostMaskType",
      "PostPublishingType",
      "UserVisibility",
      "UserAccessLevel",
      "LanguageCode",
      "StampSetType",
      "CommunityVisibility",
      "CommunityAccessLevel",
      "ApplicationRequirement",
    ] as const
  ).map(
    (name) =>
      [
        name,
        types[name] as Record<string, string | number>,
        constEnum(name),
        `${toScreamingSnake(name)}_`,
      ] as [string, Record<string, string | number>, EnumDescriptor, string]
  ),
  [
    "MediaUploadType",
    types.MediaUploadType,
    nestedEnum("InitiatePostMediaUploadRequest", "Type"),
    "TYPE_",
  ],
  [
    "MediaUploadStatus",
    types.MediaUploadStatus,
    nestedEnum("GetPostMediaStatusResponse", "Status"),
    "STATUS_",
  ],
];

describe("enums match the proto definitions", () => {
  test.each(enumCases)("%s", (_, tsEnum, protoEnum, prefix) => {
    const expected = Object.fromEntries(
      protoEnum.value.map((v) => [v.name.slice(prefix.length), v.number])
    );
    const actual = Object.fromEntries(
      Object.entries(tsEnum).filter(([, v]) => typeof v === "number")
    );
    expect(actual).toEqual(expected);
  });
});

describe("Client covers the ApplicationService proto", () => {
  const service = packageDefinition[
    `${API_PACKAGE}.ApplicationService`
  ] as unknown as Record<string, { originalName: string }>;

  test.each(Object.values(service).map((rpc) => rpc.originalName))(
    "%s",
    (methodName) => {
      expect(
        typeof (Client.prototype as unknown as Record<string, unknown>)[
          methodName
        ]
      ).toBe("function");
    }
  );
});
