"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    color: prop_types_1.default.string,
    font: prop_types_1.default.string,
    fontFamily: prop_types_1.default.string,
    fontSize: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    fontStyle: prop_types_1.default.string,
    fontVariant: prop_types_1.default.string,
    fontWeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    letterSpacing: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    lineHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    textAlign: prop_types_1.default.string,
    textDecoration: prop_types_1.default.string,
    textOverflow: prop_types_1.default.string,
    textShadow: prop_types_1.default.string,
    textTransform: prop_types_1.default.string,
    verticalAlign: prop_types_1.default.string,
    whiteSpace: prop_types_1.default.string,
    wordBreak: prop_types_1.default.string,
    wordWrap: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const textAlign = {
    className: 'txt-algn',
    safeValue: true,
    cssName: 'text-align',
    jsName: 'textAlign'
};
const textDecoration = {
    className: 'txt-deco',
    cssName: 'text-decoration',
    jsName: 'textDecoration'
};
const textTransform = {
    className: 'txt-trns',
    cssName: 'text-transform',
    jsName: 'textTransform',
    safeValue: true
};
const textShadow = {
    className: 'txt-shdw',
    cssName: 'text-shadow',
    jsName: 'textShadow',
    complexValue: true
};
const textOverflow = {
    className: 'txt-ovrf',
    cssName: 'text-overflow',
    jsName: 'textOverflow',
    safeValue: true
};
const color = {
    className: 'color',
    cssName: 'color',
    jsName: 'color'
};
const font = {
    className: 'fnt',
    cssName: 'font',
    jsName: 'font',
    complexValue: true
};
const fontFamily = {
    className: 'fnt-fam',
    cssName: 'font-family',
    jsName: 'fontFamily',
    complexValue: true
};
const fontSize = {
    className: 'fnt-sze',
    cssName: 'font-size',
    jsName: 'fontSize'
};
const fontStyle = {
    className: 'fnt-stl',
    cssName: 'font-style',
    jsName: 'fontStyle',
    safeValue: true
};
const fontVariant = {
    className: 'f-vari',
    cssName: 'font-variant',
    jsName: 'fontVariant'
};
const fontWeight = {
    className: 'f-wght',
    cssName: 'font-weight',
    jsName: 'fontWeight',
    safeValue: true,
    defaultUnit: ''
};
const lineHeight = {
    className: 'ln-ht',
    cssName: 'line-height',
    jsName: 'lineHeight',
    defaultUnit: ''
};
const verticalAlign = {
    className: 'ver-algn',
    cssName: 'vertical-align',
    jsName: 'verticalAlign',
    safeValue: true
};
const wordBreak = {
    className: 'wrd-brk',
    cssName: 'word-break',
    jsName: 'wordBreak',
    safeValue: true
};
const wordWrap = {
    className: 'wrd-wrp',
    cssName: 'word-wrap',
    jsName: 'wordWrap',
    safeValue: true
};
const whiteSpace = {
    className: 'wht-spc',
    cssName: 'white-space',
    jsName: 'whiteSpace',
    safeValue: true
};
const letterSpacing = {
    className: 'ltr-spc',
    cssName: 'letter-spacing',
    jsName: 'letterSpacing'
};
exports.propEnhancers = {
    color: (value, selector) => (0, get_css_1.default)(color, value, selector),
    font: (value, selector) => (0, get_css_1.default)(font, value, selector),
    fontFamily: (value, selector) => (0, get_css_1.default)(fontFamily, value, selector),
    fontSize: (value, selector) => (0, get_css_1.default)(fontSize, value, selector),
    fontStyle: (value, selector) => (0, get_css_1.default)(fontStyle, value, selector),
    fontVariant: (value, selector) => (0, get_css_1.default)(fontVariant, value, selector),
    fontWeight: (value, selector) => (0, get_css_1.default)(fontWeight, value, selector),
    letterSpacing: (value, selector) => (0, get_css_1.default)(letterSpacing, value, selector),
    lineHeight: (value, selector) => (0, get_css_1.default)(lineHeight, value, selector),
    textAlign: (value, selector) => (0, get_css_1.default)(textAlign, value, selector),
    textDecoration: (value, selector) => (0, get_css_1.default)(textDecoration, value, selector),
    textOverflow: (value, selector) => (0, get_css_1.default)(textOverflow, value, selector),
    textShadow: (value, selector) => (0, get_css_1.default)(textShadow, value, selector),
    textTransform: (value, selector) => (0, get_css_1.default)(textTransform, value, selector),
    verticalAlign: (value, selector) => (0, get_css_1.default)(verticalAlign, value, selector),
    whiteSpace: (value, selector) => (0, get_css_1.default)(whiteSpace, value, selector),
    wordBreak: (value, selector) => (0, get_css_1.default)(wordBreak, value, selector),
    wordWrap: (value, selector) => (0, get_css_1.default)(wordWrap, value, selector)
};
