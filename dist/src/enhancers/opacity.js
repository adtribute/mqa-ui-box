"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    opacity: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const opacity = {
    className: 'opct',
    cssName: 'opacity',
    jsName: 'opacity',
    defaultUnit: ''
};
exports.propEnhancers = {
    opacity: (value, selector) => (0, get_css_1.default)(opacity, value, selector)
};
