"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    bottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    left: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    position: prop_types_1.default.string,
    right: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    top: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const position = {
    className: 'pst',
    cssName: 'position',
    jsName: 'position',
    safeValue: true,
    isPrefixed: true
};
const top = {
    className: 'top',
    cssName: 'top',
    jsName: 'top'
};
const right = {
    className: 'rgt',
    cssName: 'right',
    jsName: 'right'
};
const bottom = {
    className: 'btm',
    cssName: 'bottom',
    jsName: 'bottom'
};
const left = {
    className: 'lft',
    cssName: 'left',
    jsName: 'left'
};
exports.propEnhancers = {
    bottom: (value, selector) => (0, get_css_1.default)(bottom, value, selector),
    left: (value, selector) => (0, get_css_1.default)(left, value, selector),
    position: (value, selector) => (0, get_css_1.default)(position, value, selector),
    right: (value, selector) => (0, get_css_1.default)(right, value, selector),
    top: (value, selector) => (0, get_css_1.default)(top, value, selector)
};
