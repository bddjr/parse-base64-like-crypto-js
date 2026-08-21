let _map = new Uint8Array(128)
for (let i = 26; i--;) {
    // A-Z
    _map[65 + i] = i
    // a-z
    _map[97 + i] = 26 + i
    // 0-9
    if (i < 10) _map[48 + i] = 52 + i
}
let _mapURL = _map.slice()
// + -
_map[43] = _mapURL[45] = 62
// / _
_map[47] = _mapURL[95] = 63

/**
 * Parse Base64 and Base64URL like `crypto-js`, returns `Uint8Array`.
 * @param {string} input
 * @param {boolean} [urlSafe] - Whether input is Base64URL.
 * @returns {Uint8Array<ArrayBuffer>}
 */
var parseBase64 = (input, urlSafe) => {
    var i = 0
    var j = 0

    /** @type {number} */
    var tmp

    var map = urlSafe ? _mapURL : _map

    var len = urlSafe ? -1 : input.indexOf('=')

    var out = new Uint8Array(len = Math.floor((
        len < 0 ? input.length : len
    ) * 0.75))

    for (; j < len; out[j++] = tmp) {
        tmp = (
            map[input.charCodeAt(i++)] << 18 |
            map[input.charCodeAt(i++)] << 12 |
            map[input.charCodeAt(i++)] << 6 |
            map[input.charCodeAt(i++)]
        )
        out[j++] = tmp >> 16
        out[j++] = tmp >> 8
    }
    return out
}

export default parseBase64
