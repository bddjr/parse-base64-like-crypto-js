import assert from 'node:assert';
import crypto from 'node:crypto';
import parseBase64 from "parse-base64-like-crypto-js";
import CryptoJS from 'crypto-js';

/**
 * @param {CryptoJS.lib.WordArray} wordArray
 */
function wordArrayToUint8Array(wordArray) {
    const len = wordArray.sigBytes
    const out = new Uint8Array(len)
    let tmp
    let i = 0
    let j = 0
    for (; i < len;) {
        tmp = wordArray.words[j++]
        out[i++] = tmp >>> 24
        out[i++] = tmp >>> 16
        out[i++] = tmp >>> 8
        out[i++] = tmp
    }
    return out
}

/**
 * @param {string} input
 * @param {boolean} [isBase64URL]
 */
function test(input, isBase64URL) {
    console.log('test', input)
    console.log('is base64url:', !!isBase64URL)

    const bytesMine = parseBase64(input, isBase64URL);
    console.log('mine', bytesMine)

    const enc = isBase64URL ? CryptoJS.enc.Base64url : CryptoJS.enc.Base64
    const cryptoResult = enc.parse(input);
    const bufCryptoJS = wordArrayToUint8Array(cryptoResult);
    console.log('crypto-js', bufCryptoJS)

    assert.ok(
        Buffer.prototype.equals.call(bufCryptoJS, bytesMine),
        `not equal`
    );

    console.log()
}

test("KzdnFCBRvq3" + "f".repeat(32) + '.sb3');
test("X");
test("XY");
test("XY==");
test("XY//");
test("XY+///+-");
test("XYZ");
test("XYZ=");
test("XYZA");
test("XYZAB");
test("XYZ=ABCDEF==");
test("XYZABCDE");
test("XYZ..ABCD???EF=====G");
test("XYZ..ABCD*&(@^)*%&!*()%#!/EFGHIJKL");
test("XYZ ABCD    \r\n  \n EFGHIJKL");
test("XY+/-_");
test("XY-_+/", true);

for (let len = 0; len <= 12; len++) {
    const randomBuf = crypto.randomBytes(len);
    const base64 = randomBuf.toString('base64');
    test(base64);
    if (base64.includes('='))
        test(base64.replaceAll('=', ''));
    const base64url = randomBuf.toString('base64url')
    test(base64url, true)
}

console.log("ok")
console.log()
