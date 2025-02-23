"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    outline: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const outline = {
    className: 'otln',
    cssName: 'outline',
    jsName: 'outline',
    complexValue: true
};
exports.propEnhancers = {
    outline: (value, selector) => (0, get_css_1.default)(outline, value, selector)
};
