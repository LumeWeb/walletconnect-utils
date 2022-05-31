import { Crypto } from "@peculiar/webcrypto";

export function getBrowerCrypto(): Crypto {
    // @ts-ignore
    return global?.crypto || global?.msCrypto || {};
}

export function getSubtleCrypto(): SubtleCrypto {
    const browserCrypto = getBrowerCrypto();
    // @ts-ignore
    let subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;

    if (browserCrypto && !subtle) {
        subtle = (new Crypto()).subtle;
    }

    return subtle;
}

export function isBrowserCryptoAvailable(): boolean {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
