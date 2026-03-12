# Changelog

このプロジェクトのすべての注目すべき変更をバージョンごとに記録します。

## [1.1.0] - 2026-03-13

### Added

- `helpers` サブパス（`mixi2-js/helpers`）に新しい拡張機能を追加
  - `PostBuilder` — メソッドチェーンで `CreatePostRequest` を組み立てるビルダー
  - `MediaUploader` — メディアアップロードの開始からポーリングまでを自動化するヘルパー
  - `ReasonFilter` — `EventReason` ベースでイベントをフィルタリングするミドルウェア

## [1.0.0] - 2026-03-12

### Added

- サンプルコード 3 種（echo-bot / webhook-server / media-post）を `examples/` に追加（JS + TS）
- PR テンプレート（`.github/PULL_REQUEST_TEMPLATE.md`）を追加
- `check` / `check:all` / `check:types` / `check:lint` / `check:format` スクリプトを追加
- `helpers` サブパス（`mixi2-js/helpers`）を追加
  - `EventRouter` — イベントタイプ別にハンドラを登録できる `EventHandler` 実装
- GitHub Pages ドキュメントサイト（`pages/`）を追加
- `CHANGELOG.md` を追加

### Changed

- README のメディアデータ送信方法を PUT → POST に修正（公式 API 仕様 2026-03-12 版に追従）
- `.proto` ファイルを linguist-vendored としてマーク
- ESLint ルールの調整（examples を除外）
- CONTRIBUTING.md を更新（コマンド一覧表追加、helpers への貢献方針を明記）

## [0.1.2] - 2026-03-12

### Changed

- 依存パッケージを更新
- README のフォーマットを整理
- `FUNDING.yml` を追加（スポンサーシップ設定）

### Fixed

- インストールコマンドの修正

## [0.1.1] - 2026-03-09

### Changed

- ESLint 設定を更新
- README バッジの修正
- JSR パブリッシュロジックの修正
- CI ワークフローの追加・改善

### Fixed

- タイポ修正

## [0.1.0] - 2026-03-09

### Added

- JSR (`@otoneko1102/mixi2-js`) へのパブリッシュ対応
- アイコン・ロゴ画像（`img/icon.svg` / `img/logo.svg`）を追加
- `jsr.json` 設定ファイルを追加

## [0.0.5] - 2026-03-07

### Added

- ESLint + eslint-config-prettier の導入
- CI に lint チェックを追加

### Changed

- `Client` の内部リファクタリング（共通 `call()` メソッドの導入）
- `StreamWatcher` の改善
- 型定義の追加

## [0.0.4] - 2026-03-07

### Fixed

- Node.js バージョン要件の修正
- ログ出力の修正
- `WebhookServer` の署名検証ロジックの修正
- `StreamWatcher` の接続処理の修正

## [0.0.3] - 2026-03-07

### Fixed

- `OAuth2Authenticator` の認証バグ修正（`encodeURIComponent` による特殊文字対応）

## [0.0.2] - 2026-03-07

### Changed

- 対応 Node.js バージョンを明記（`engines` フィールド追加）
- `.sample/` を gitignore に追加

## [0.0.1] - 2026-03-06

### Added

- 初回リリース
- `OAuth2Authenticator` — OAuth2 Client Credentials 認証
- `Client` — gRPC API クライアント（8 RPC メソッド）
- `WebhookServer` — Ed25519 署名検証付き HTTP Webhook サーバー
- `StreamWatcher` — gRPC ストリーミング（指数バックオフ自動再接続）
- 型定義・Enum 定義（protobuf 準拠）
- protobuf → TypeScript コンバーター
- テストスイート（25 テスト）
- ESM + CJS デュアルビルド（tsup）
- TypeScript 型定義（`.d.ts`）同梱
