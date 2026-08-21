Parse Base64 and Base64URL like `crypto-js`, returns `Uint8Array`.

This library implements the following logic:

- Invalid characters in the input are treated as 0 (equivalent to 'A').
- When parsing Base64, the '=' in the input is treated as a terminator; it and any characters after it will be ignored.
- If the last block has only 1 character, that character will be discarded.

Built for `@openccw/sb3-crypto`.

## Setup

### npm

```
npm i parse-base64-like-crypto-js
```

```js
import parseBase64 from "parse-base64-like-crypto-js";
```

### Other Package Managers

You can also use other package managers (e.g. `pnpm` or `yarn`) in place of `npm`.

### jsDelivr

See https://www.jsdelivr.com/package/npm/parse-base64-like-crypto-js

```html
<script src="https://cdn.jsdelivr.net/npm/parse-base64-like-crypto-js"></script>
```

It will define the `parseBase64` function using `var`.

### Inline

You can embed [`browser.min.js`](browser.min.js) directly into your script.  
It will define the `parseBase64` function using `var`.

---

## Example

```js
// Base64
parseBase64("ABCD.EFG0 12+/+/====")

// Base64URL
// It treats '=' as 0, not as a terminator.
parseBase64("ABCD.EFG0 12-_-_====", true)
```

It will return a `Uint8Array`.


---

## License

[Unlicense](https://unlicense.org)
