"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    height: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    maxHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    maxWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    minHeight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    minWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    width: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const width = {
    className: 'w',
    cssName: 'width',
    jsName: 'width'
};
const height = {
    className: 'h',
    cssName: 'height',
    jsName: 'height'
};
const minWidth = {
    className: 'min-w',
    cssName: 'min-width',
    jsName: 'minWidth'
};
const minHeight = {
    className: 'min-h',
    cssName: 'min-height',
    jsName: 'minHeight'
};
const maxWidth = {
    className: 'max-w',
    cssName: 'max-width',
    jsName: 'maxWidth'
};
const maxHeight = {
    className: 'max-h',
    cssName: 'max-height',
    jsName: 'maxHeight'
};
exports.propEnhancers = {
    height: (value, selector) => (0, get_css_1.default)(height, value, selector),
    maxHeight: (value, selector) => (0, get_css_1.default)(maxHeight, value, selector),
    maxWidth: (value, selector) => (0, get_css_1.default)(maxWidth, value, selector),
    minHeight: (value, selector) => (0, get_css_1.default)(minHeight, value, selector),
    minWidth: (value, selector) => (0, get_css_1.default)(minWidth, value, selector),
    width: (value, selector) => (0, get_css_1.default)(width, value, selector)
};
