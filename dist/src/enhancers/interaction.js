"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    cursor: prop_types_1.default.string,
    pointerEvents: prop_types_1.default.string,
    userSelect: prop_types_1.default.string,
    visibility: prop_types_1.default.string
};
exports.propAliases = {};
exports.propValidators = {};
const cursor = {
    className: 'crsr',
    cssName: 'cursor',
    jsName: 'cursor'
};
const userSelect = {
    className: 'usr-slct',
    cssName: 'user-select',
    jsName: 'userSelect',
    safeValue: true,
    isPrefixed: true
};
const visibility = {
    className: 'vsblt',
    cssName: 'visibility',
    jsName: 'visibility',
    safeValue: true
};
const pointerEvents = {
    className: 'ptr-evts',
    cssName: 'pointer-events',
    jsName: 'pointerEvents',
    safeValue: true
};
exports.propEnhancers = {
    cursor: (value, selector) => (0, get_css_1.default)(cursor, value, selector),
    pointerEvents: (value, selector) => (0, get_css_1.default)(pointerEvents, value, selector),
    userSelect: (value, selector) => (0, get_css_1.default)(userSelect, value, selector),
    visibility: (value, selector) => (0, get_css_1.default)(visibility, value, selector)
};
