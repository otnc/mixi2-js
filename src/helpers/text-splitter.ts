/** mixi2 の 1 ポストあたりの最大文字数 */
export const maxPostLength = 149;

export interface TextSplitterOptions {
  /** 1 ポストあたりの最大文字数。デフォルト: 149 */
  maxLength?: number;
  /** 単語境界（スペース・句読点）で分割を試みるか。デフォルト: true */
  splitOnWord?: boolean;
}

/**
 * 長いテキストを mixi2 の文字数制限内に収まる複数チャンクに分割するヘルパー。
 * デフォルトは 149 文字制限（mixi2 のポスト本文上限）に準拠。
 *
 * @example
 * const splitter = new TextSplitter();
 * const chunks = splitter.split('長いテキスト...');
 * for (const chunk of chunks) {
 *   await client.createPost({ text: chunk });
 * }
 */
export class TextSplitter {
  private readonly maxLength: number;
  private readonly splitOnWord: boolean;

  constructor(options?: TextSplitterOptions) {
    this.maxLength = options?.maxLength ?? maxPostLength;
    this.splitOnWord = options?.splitOnWord ?? true;
  }

  /**
   * テキストを maxLength 以内の複数チャンクに分割して返す。
   * テキストが maxLength 以内の場合は 1 要素の配列を返す。
   */
  split(text: string): string[] {
    if (text.length <= this.maxLength) {
      return [text];
    }

    const chunks: string[] = [];
    let remaining = text;

    while (remaining.length > this.maxLength) {
      let splitAt = this.maxLength;

      if (this.splitOnWord) {
        const candidate = remaining.slice(0, this.maxLength);
        const lastBreak = Math.max(
          candidate.lastIndexOf(" "),
          candidate.lastIndexOf("　"),
          candidate.lastIndexOf("、"),
          candidate.lastIndexOf("。"),
          candidate.lastIndexOf("！"),
          candidate.lastIndexOf("？"),
          candidate.lastIndexOf("!"),
          candidate.lastIndexOf("?"),
          candidate.lastIndexOf("\n")
        );
        if (lastBreak > 0) {
          splitAt = lastBreak + 1;
        }
      }

      chunks.push(remaining.slice(0, splitAt).trimEnd());
      remaining = remaining.slice(splitAt).trimStart();
    }

    if (remaining.length > 0) {
      chunks.push(remaining);
    }

    return chunks;
  }
}
