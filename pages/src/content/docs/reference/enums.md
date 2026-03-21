---
title: Enum 定義
description: mixi2-js で使用される Enum の一覧
---

## EventType

| 名前                    | 値  | 説明           |
| ----------------------- | --- | -------------- |
| `UNSPECIFIED`           | 0   | 未指定         |
| `PING`                  | 1   | 接続確認       |
| `POST_CREATED`          | 2   | ポスト作成     |
| `CHAT_MESSAGE_RECEIVED` | 4   | メッセージ受信 |

## EventReason

| 名前                      | 値  | 説明                     |
| ------------------------- | --- | ------------------------ |
| `UNSPECIFIED`             | 0   | 未指定                   |
| `PING`                    | 1   | 接続確認                 |
| `POST_REPLY`              | 2   | ポストに返信された       |
| `POST_MENTIONED`          | 3   | ポストでメンションされた |
| `POST_QUOTED`             | 4   | ポストが引用された       |
| `DIRECT_MESSAGE_RECEIVED` | 8   | DM を受信した            |

## PostVisibility / PostAccessLevel

| Enum                       | 値  | 説明     |
| -------------------------- | --- | -------- |
| `PostVisibility.VISIBLE`   | 1   | 閲覧可能 |
| `PostVisibility.INVISIBLE` | 2   | 閲覧不可 |
| `PostAccessLevel.PUBLIC`   | 1   | 公開     |
| `PostAccessLevel.PRIVATE`  | 2   | 非公開   |

## PostMaskType

| 名前        | 値  | 説明               |
| ----------- | --- | ------------------ |
| `SENSITIVE` | 1   | 刺激的なコンテンツ |
| `SPOILER`   | 2   | ネタバレ防止       |

## PostPublishingType

| 名前             | 値  | 説明                                         |
| ---------------- | --- | -------------------------------------------- |
| `UNSPECIFIED`    | 0   | フォロワーのタイムラインに公開（デフォルト） |
| `NOT_PUBLISHING` | 1   | プロフィールにのみ公開                       |

## MediaUploadType / MediaUploadStatus

| Enum                               | 値  | 説明               |
| ---------------------------------- | --- | ------------------ |
| `MediaUploadType.IMAGE`            | 1   | 画像               |
| `MediaUploadType.VIDEO`            | 2   | 動画               |
| `MediaUploadStatus.UPLOAD_PENDING` | 1   | アップロード待機中 |
| `MediaUploadStatus.PROCESSING`     | 2   | 処理中             |
| `MediaUploadStatus.COMPLETED`      | 3   | 完了               |
| `MediaUploadStatus.FAILED`         | 4   | 失敗               |

## UserVisibility / UserAccessLevel

| Enum                       | 値  | 説明     |
| -------------------------- | --- | -------- |
| `UserVisibility.VISIBLE`   | 1   | 閲覧可能 |
| `UserVisibility.INVISIBLE` | 2   | 閲覧不可 |
| `UserAccessLevel.PUBLIC`   | 1   | 公開     |
| `UserAccessLevel.PRIVATE`  | 2   | 非公開   |

## その他

| Enum                    | 値  | 説明       |
| ----------------------- | --- | ---------- |
| `LanguageCode.JP`       | 1   | 日本語     |
| `LanguageCode.EN`       | 2   | 英語       |
| `MediaType.IMAGE`       | 1   | 画像       |
| `MediaType.VIDEO`       | 2   | 動画       |
| `PostMediaType.IMAGE`   | 1   | 画像       |
| `PostMediaType.VIDEO`   | 2   | 動画       |
| `StampSetType.DEFAULT`  | 1   | デフォルト |
| `StampSetType.SEASONAL` | 2   | 季節限定   |

### イベント配信の特性

- **順序保証なし** — イベントは発生順と異なる順序で届く可能性があります
- **Best-effort 配信** — gRPC ストリーム接続中断時のイベントは失われます
- **Webhook リトライ** — 配信失敗時に最大 3 回（30 秒間隔）リトライされます。冪等な処理を推奨します

> 詳細は [公式 API 仕様](https://github.com/mixigroup/mixi2-api) を参照してください。
