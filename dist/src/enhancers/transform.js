"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    transform: prop_types_1.default.string,
    transformOrigin: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const transform = {
    className: 'tfrm',
    cssName: 'transform',
    jsName: 'transform',
    complexValue: true
};
const transformOrigin = {
    className: 'tfrm-orgn',
    cssName: 'transform-origin',
    jsName: 'transformOrigin',
    complexValue: true
};
exports.propEnhancers = {
    transform: (value, selector) => (0, get_css_1.default)(transform, value, selector),
    transformOrigin: (value, selector) => (0, get_css_1.default)(transformOrigin, value, selector)
};
