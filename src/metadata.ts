import * as grpc from "@grpc/grpc-js";
import type { Authenticator } from "./auth";

export async function createAuthMetadata(
  authenticator: Authenticator,
  authKey?: string
): Promise<grpc.Metadata> {
  const token = await authenticator.getAccessToken();
  const metadata = new grpc.Metadata();
  metadata.add("authorization", `Bearer ${token}`);
  if (authKey) {
    metadata.add("x-auth-key", authKey);
  }
  return metadata;
}
