/// <reference types="vitest/globals" />

import path from "node:path";
import { fileURLToPath } from "node:url";
import * as protoLoader from "@grpc/proto-loader";
import { Client } from "../src/client";
import * as convert from "../src/convert";
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

describe("converters keep every proto field", () => {
  const MODEL_PACKAGE = "social.mixi.application.model.v1";
  const converters: Record<string, (raw: unknown) => unknown> = {
    ApplicationVersion: convert.convertApplicationVersion,
    Community: convert.convertCommunity,
    CommunityUsingApplication: convert.convertCommunityUsingApplication,
    ChatMessage: convert.convertChatMessage,
    Media: convert.convertMedia,
    MediaImage: convert.convertMediaImage,
    MediaVideo: convert.convertMediaVideo,
    MediaStamp: convert.convertMediaStamp,
    Post: convert.convertPost,
    PostMedia: convert.convertPostMedia,
    PostMediaImage: convert.convertMediaImage,
    PostMediaVideo: convert.convertMediaVideo,
    PostMask: convert.convertPostMask,
    PostStamp: convert.convertPostStamp,
    OfficialStampSet: convert.convertOfficialStampSet,
    OfficialStamp: convert.convertOfficialStamp,
    CommunityStampSet: convert.convertCommunityStampSet,
    CommunityStamp: convert.convertCommunityStamp,
    User: convert.convertUser,
    UserAvatar: convert.convertUserAvatar,
    Event: convert.convertEvent,
    PostCreatedEvent: convert.convertPostCreatedEvent,
    CommunityMemberChangedEvent: convert.convertCommunityMemberChangedEvent,
    ChatMessageReceivedEvent: convert.convertChatMessageReceivedEvent,
    CommunityPluginManagedEvent: convert.convertCommunityPluginManagedEvent,
  };
  const messages = Object.entries(packageDefinition)
    .filter(([name]) => name.startsWith(`${MODEL_PACKAGE}.`))
    .map(([name, definition]) => ({
      name: name.slice(MODEL_PACKAGE.length + 1),
      fields: (
        definition as unknown as { type: { field: { name: string }[] } }
      ).type.field.map((field) => field.name),
    }))
    .filter((message) => message.fields.length > 0);

  test.each(messages)("$name", ({ name, fields }) => {
    const convertMessage = converters[name];
    expect(convertMessage, `no converter for ${name}`).toBeDefined();
    const converted = convertMessage!({}) as Record<string, unknown>;
    expect(Object.keys(converted).sort()).toEqual([...fields].sort());
  });
});
