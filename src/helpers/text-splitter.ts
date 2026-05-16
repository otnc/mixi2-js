/** mixi2 の 1 ポストあたりの最大文字数 */
export const maxPostLength = 149;

export interface TextSplitterOptions {
  /** 1 ポストあたりの最大文字数。デフォルト: 149 */
  maxLength?: number;
  /** 単語境界（スペース・句読点）で分割を試みるか。デフォルト: true */
  splitOnWord?: boolean;
}

const WORD_BREAK_CHARS = new Set([
  " ",
  "　",
  "、",
  "。",
  "！",
  "？",
  "!",
  "?",
  "\n",
]);

const graphemeSegmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });

function toGraphemes(text: string): string[] {
  return Array.from(graphemeSegmenter.segment(text), (s) => s.segment);
}

/**
 * 長いテキストを mixi2 の文字数制限内に収まる複数チャンクに分割するヘルパー。
 * デフォルトは 149 文字制限（mixi2 のポスト本文上限）に準拠。
 * 文字数は mixi2 のカウント仕様に合わせ、絵文字（ZWJ シーケンスを含む）を 1 文字として数える。
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
    const graphemes = toGraphemes(text);
    if (graphemes.length <= this.maxLength) {
      return [text];
    }

    const chunks: string[] = [];
    let remaining = graphemes;

    while (remaining.length > this.maxLength) {
      let splitAt = this.maxLength;

      if (this.splitOnWord) {
        let lastBreak = -1;
        for (let i = this.maxLength - 1; i >= 0; i--) {
          if (WORD_BREAK_CHARS.has(remaining[i]!)) {
            lastBreak = i;
            break;
          }
        }
        if (lastBreak > 0) {
          splitAt = lastBreak + 1;
        }
      }

      chunks.push(remaining.slice(0, splitAt).join("").trimEnd());
      remaining = remaining.slice(splitAt);
      // Trim leading whitespace graphemes from the next chunk.
      let leading = 0;
      while (leading < remaining.length && remaining[leading]!.trim() === "") {
        leading++;
      }
      if (leading > 0) {
        remaining = remaining.slice(leading);
      }
    }

    if (remaining.length > 0) {
      chunks.push(remaining.join(""));
    }

    return chunks;
  }
}
