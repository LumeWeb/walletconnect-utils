"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
const webcrypto_1 = require("@peculiar/webcrypto");
function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    let subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
    if (browserCrypto && !subtle) {
        subtle = (new webcrypto_1.Crypto()).subtle;
    }
    return subtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
//# sourceMappingURL=crypto.js.map