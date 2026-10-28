// A local TLS gRPC server implementing just enough of the mixi2 API for the runtime smoke test.
// Usage: node scripts/runtime-smoke/server.mjs <cert.pem> <key.pem>; prints the listening port.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const [certPath, keyPath] = process.argv.slice(2);
const protoDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../proto"
);
const definition = protoLoader.loadSync(
  [
    "social/mixi/application/service/application_api/v1/service.proto",
    "social/mixi/application/service/application_stream/v1/service.proto",
  ],
  { includeDirs: [protoDir], enums: Number, longs: Number }
);
const services =
  grpc.loadPackageDefinition(definition).social.mixi.application.service;

const server = new grpc.Server();
server.addService(services.application_api.v1.ApplicationService.service, {
  getUsers(call, callback) {
    callback(null, {
      users: call.request.userIdList.map((userId) => ({
        userId,
        name: `name-${userId}`,
      })),
    });
  },
});
server.addService(services.application_stream.v1.ApplicationService.service, {
  subscribeEvents(call) {
    call.write({ events: [{ eventId: "ping", eventType: 1, pingEvent: {} }] });
    call.write({
      events: [
        {
          eventId: "event-1",
          eventType: 2,
          postCreatedEvent: {
            eventReasonList: [3],
            post: { postId: "post-1", text: "hello" },
          },
        },
      ],
    });
    call.end();
  },
});

const credentials = grpc.ServerCredentials.createSsl(null, [
  {
    cert_chain: fs.readFileSync(certPath),
    private_key: fs.readFileSync(keyPath),
  },
]);
server.bindAsync("localhost:0", credentials, (err, port) => {
  if (err) throw err;
  console.log(port);
});
