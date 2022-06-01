import { Crypto } from "@peculiar/webcrypto";
export function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
}
export function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    let subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
    if (browserCrypto && !subtle) {
        subtle = (new Crypto()).subtle;
    }
    return subtle;
}
export function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
//# sourceMappingURL=crypto.js.map