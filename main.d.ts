/**
 * Parse Base64 and Base64URL like `crypto-js`, returns `Uint8Array`.
 * @param {string} input
 * @param {boolean} [isBase64URL] Set `true` when `input` is base64url.
 * @returns {Uint8Array<ArrayBuffer>}
 */
declare var parseBase64: (input: string, isBase64URL?: boolean) => Uint8Array<ArrayBuffer>;
export default parseBase64;
