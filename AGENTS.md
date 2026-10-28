# AGENTS.md

このリポジトリで作業する AI エージェント向けのルールです。人間向けの開発手順は [CONTRIBUTING.md](CONTRIBUTING.md) を参照してください。

## プロジェクト

- mixi2 Application API の非公式 TypeScript / JavaScript SDK です。npm では `mixi2-js`、JSR では `@otoneko1102/mixi2-js` として公開しています
- `src/` (コア) は公式仕様に厳密に従います。仕様にない独自機能は追加しません
  - 仕様の出典: [mixi2-api](https://github.com/mixigroup/mixi2-api) の proto、[公式 Go SDK](https://github.com/mixigroup/mixi2-application-sdk-go)、[公式ドキュメント](https://developer.mixi.social/docs)
  - 公式ドキュメントの全文は https://developer.mixi.social/docs/llms-full.txt で Markdown として取得できます
- `src/helpers/` (`mixi2-js/helpers`) は SDK 独自の拡張です。コアへの依存は import だけにします
- `proto/` は mixi2-api から改変せずに同梱しています。手で編集しないでください。上流のリリースは `sync-proto` ワークフローが同期 PR を作ります

## 環境とコマンド

- 開発には `.nvmrc` の Node.js (24) を使います。SDK の対応範囲は `engines.node` (>=20.19.0) で、それより新しい API は eslint-plugin-n がエラーにします
- 変更後は次のコマンドがすべて通ることを確認します

| コマンド                | 内容                                         |
| ----------------------- | -------------------------------------------- |
| `npm run ci`            | フォーマットと Lint の確認                   |
| `npm run typecheck`     | `src/`・`test/`・`examples/` の型チェック    |
| `npm test`              | テスト                                       |
| `npm run build`         | ビルド                                       |
| `npm run check:package` | 公開パッケージの検証 (ビルド後に実行)        |

## 言語

- コード・識別子・コメント・テスト名は英語で書きます
- ドキュメント (README、CONTRIBUTING、`pages/`、CHANGELOG の手書き部分) は日本語で書きます
- コミットメッセージと PR タイトルは、接頭辞の `type(scope):` だけ英語、それ以降を日本語で書きます (例: `fix(stream): 正常終了で再接続しないようにする`)
- PR 本文は [PR テンプレート](.github/PULL_REQUEST_TEMPLATE.md) に沿って日本語で書きます

## コミットとプルリクエスト

- [Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/) に従います。type は commitlint が強制します。破壊的変更は `feat!:` のように `!` を付けます
- PR は squash マージします。PR タイトルがそのまま main のコミットメッセージと CHANGELOG の項目になるので、タイトルを Conventional Commits の形式で、利用者に伝わる説明にしてください (`feat` / `fix` / `perf` / `refactor` / `docs` が CHANGELOG に載ります)
- PR は目的ごとに分けます。PR 内のコミットも関心ごとに小さく分けます
- main は ruleset で保護されています。PR が必須で、直接 push はできません。`ci` と `conventional-title` のチェックが通る必要があります (`ci` は `check` / `test` / `secrets` の結果をまとめたもの。`pages/`・`*.md`・`img/`・`LICENSE` だけの変更ではビルドとテストがスキップされます)。bypass できるのは otoneko-release App (release ワークフロー) だけです
- PR を積み上げた場合は、前の PR のマージ後にベースが main へ切り替わったのを確認してからマージします
- マージ後のブランチは GitHub が自動で削除します
- ブランチは一括で削除しません。削除するのは自分が作ったブランチだけで、名前を指定して消します
- リリース (`release` ワークフロー) は、メンテナーの指示がない限り実行しません

## テスト

- 実装を書き写しただけのテスト (定数の値、メソッドチェーンが `this` を返すことなど) は書きません。公式仕様から導ける振る舞いを検証します
- `test/spec.test.ts` は proto と SDK の整合 (enum の値、`Client` の RPC、変換後のフィールド) を検証します。proto を更新したらここが通ることを確認します
- バグを直すときは、修正前の実装で失敗するテストを追加します
- `scripts/runtime-smoke/` は、ビルド済みのパッケージを Node.js / Bun / Deno (ローカルの TLS gRPC サーバーとの実際の通信まで) と Cloudflare Workers (Wrangler 経由の workerd) で動かします (CI の `runtimes` ジョブ)。`report.mjs` の `required` と README・ドキュメント・Skill の「対応環境」は常に一致させます

## コメント

- 名前で表せることはコメントに書きません。自明でない理由や制約、ライブラリの癖への対処だけを短く書きます
- 公開 API には使い方が分かる doc コメントを付けます

## ドキュメント

- 機能追加や挙動の変更では、`pages/src/content/docs/`、README、利用者のエージェント向け Skill (`skills/mixi2-js/SKILL.md`) も更新します
- `pages/` の `.mdx` に Prettier をかけないでください。`<Tabs>` 内のコードブロックが壊れます (`.prettierignore` で除外済み)
- 文の途中で改行しません。全角の記号は `！` と `？` 以外使いません (`（）` ではなく `()`)
- GitHub のアラート (`> [!NOTE]` など) の中の空行は、`>` の後ろに半角スペースを 3 つ置きます

## バージョニング

- メジャーバージョンは mixi2 API のメジャーバージョンに合わせます
- 機能追加や挙動の変更はマイナー、バグ修正はパッチで出します。SDK 独自の破壊的変更もマイナーで出し、CHANGELOG の Breaking changes に記載します
