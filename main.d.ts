/**
 * Parse Base64 and Base64URL like `crypto-js`, returns `Uint8Array`.
 * @param {string} input
 * @param {boolean} [urlSafe] - Whether input is Base64URL.
 * @returns {Uint8Array<ArrayBuffer>}
 */
declare var parseBase64: (input: string, urlSafe?: boolean) => Uint8Array<ArrayBuffer>;
export default parseBase64;
