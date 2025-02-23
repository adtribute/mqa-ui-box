"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    background: prop_types_1.default.string,
    backgroundBlendMode: prop_types_1.default.string,
    backgroundClip: prop_types_1.default.string,
    backgroundColor: prop_types_1.default.string,
    backgroundImage: prop_types_1.default.string,
    backgroundOrigin: prop_types_1.default.string,
    backgroundPosition: prop_types_1.default.string,
    backgroundRepeat: prop_types_1.default.string,
    backgroundSize: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const background = {
    className: 'bg',
    cssName: 'background',
    jsName: 'background',
    isPrefixed: true,
    complexValue: true
};
const backgroundColor = {
    className: 'bg-clr',
    cssName: 'background-color',
    jsName: 'backgroundColor'
};
const backgroundImage = {
    className: 'bg-img',
    cssName: 'background-image',
    jsName: 'backgroundImage',
    isPrefixed: true,
    complexValue: true
};
const backgroundPosition = {
    className: 'bg-pos',
    cssName: 'background-position',
    jsName: 'backgroundPosition'
};
const backgroundSize = {
    className: 'bg-siz',
    cssName: 'background-size',
    jsName: 'backgroundSize'
};
const backgroundOrigin = {
    className: 'bg-orgn',
    cssName: 'background-origin',
    jsName: 'backgroundOrigin'
};
const backgroundRepeat = {
    className: 'bg-rpt',
    cssName: 'background-repeat',
    jsName: 'backgroundRepeat'
};
const backgroundClip = {
    className: 'bg-clp',
    cssName: 'background-clip',
    jsName: 'backgroundClip'
};
const backgroundBlendMode = {
    className: 'bg-blnd-md',
    cssName: 'background-blend-mode',
    jsName: 'backgroundBlendMode'
};
exports.propEnhancers = {
    background: (value, selector) => (0, get_css_1.default)(background, value, selector),
    backgroundBlendMode: (value, selector) => (0, get_css_1.default)(backgroundBlendMode, value, selector),
    backgroundClip: (value, selector) => (0, get_css_1.default)(backgroundClip, value, selector),
    backgroundColor: (value, selector) => (0, get_css_1.default)(backgroundColor, value, selector),
    backgroundImage: (value, selector) => (0, get_css_1.default)(backgroundImage, value, selector),
    backgroundOrigin: (value, selector) => (0, get_css_1.default)(backgroundOrigin, value, selector),
    backgroundPosition: (value, selector) => (0, get_css_1.default)(backgroundPosition, value, selector),
    backgroundRepeat: (value, selector) => (0, get_css_1.default)(backgroundRepeat, value, selector),
    backgroundSize: (value, selector) => (0, get_css_1.default)(backgroundSize, value, selector)
};
