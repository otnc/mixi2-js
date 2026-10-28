# Third-party notices

mixi2-js には、以下のサードパーティのソフトウェアが含まれる、またはそれをもとに作られた部分があります。各ソフトウェアはそれぞれのライセンスに従います。mixi2-js 自体のライセンスは [LICENSE](LICENSE) (Apache License 2.0) を参照してください。

## mixi2-api

- 提供元: MIXI, Inc.
- リポジトリ: https://github.com/mixigroup/mixi2-api
- ライセンス: Apache License 2.0
- 対象: `proto/` 以下のすべてのファイル (mixi2-api のリリースから改変せずに同梱。npm と JSR の配布物にも含まれます)、および `proto/` から生成した `src/generated/` 以下のファイル (ビルド後の配布物に含まれます)

```text
Copyright 2025 MIXI, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

## mixi2-application-sdk-go

- 提供元: MIXI, Inc.
- リポジトリ: https://github.com/mixigroup/mixi2-application-sdk-go
- ライセンス: Apache License 2.0
- 対象: `src/auth.ts`、`src/webhook.ts`、`src/stream.ts` (公式 Go SDK の認証・Webhook の署名検証・ストリームの再接続の仕組みを TypeScript で再実装したもの)

```text
Copyright 2025 MIXI, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Apache License 2.0 の全文は [LICENSE](LICENSE) と同じです。
