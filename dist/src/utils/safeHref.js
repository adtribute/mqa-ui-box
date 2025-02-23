"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAnchorProps = exports.getURLInfo = exports.getUseSafeHref = exports.configureSafeHref = void 0;
const PROTOCOL_REGEX = /^[a-z]+:/;
const ORIGIN_REGEX = /^(?:[a-z]+:?:)?(?:\/\/)?([^\/\?]+)/;
let useSafeHref = true;
let globalOrigin = typeof window !== 'undefined' ? window.location.origin : false;
function configureSafeHref(configObject) {
    if (typeof configObject.enabled === 'boolean') {
        useSafeHref = configObject.enabled;
    }
    if (configObject.origin) {
        globalOrigin = configObject.origin;
    }
}
exports.configureSafeHref = configureSafeHref;
function getUseSafeHref() {
    return useSafeHref;
}
exports.getUseSafeHref = getUseSafeHref;
function getURLInfo(url) {
    const safeProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'data:'];
    const protocolResult = url.match(PROTOCOL_REGEX);
    const originResult = url.match(ORIGIN_REGEX);
    const urlProtocol = protocolResult ? protocolResult[0] : 'relative';
    let sameOrigin = urlProtocol === 'relative';
    if (!sameOrigin && globalOrigin) {
        sameOrigin = globalOrigin === (originResult && originResult[0]);
    }
    const isSafeProtocol = sameOrigin ? true : safeProtocols.includes(urlProtocol);
    if (!isSafeProtocol) {
        console.error('📦 `href` passed to anchor tag is unsafe. Because of this, the `href` on the element was not set. Please review the safe href documentation if you have questions.', 'https://www.github.com/segmentio/ui-box');
        return {
            url: undefined,
            sameOrigin
        };
    }
    return {
        url,
        sameOrigin
    };
}
exports.getURLInfo = getURLInfo;
function extractAnchorProps(href, rel) {
    const urlInfo = getURLInfo(href);
    const safeHref = urlInfo.url;
    let safeRel = rel || '';
    if (urlInfo.url) {
        if (!safeRel.includes('noopener')) {
            safeRel += `${safeRel.length > 0 ? ' ' : ''}noopener`;
        }
        if (!safeRel.includes('noreferrer') && !urlInfo.sameOrigin) {
            safeRel += `${safeRel.length > 0 ? ' ' : ''}noreferrer`;
        }
    }
    return {
        safeHref,
        safeRel
    };
}
exports.extractAnchorProps = extractAnchorProps;
