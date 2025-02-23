"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
const regex_1 = require("../utils/regex");
exports.propTypes = {
    border: prop_types_1.default.string,
    borderBottom: prop_types_1.default.string,
    borderBottomColor: prop_types_1.default.string,
    borderBottomStyle: prop_types_1.default.string,
    borderBottomWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderColor: prop_types_1.default.string,
    borderLeft: prop_types_1.default.string,
    borderLeftColor: prop_types_1.default.string,
    borderLeftStyle: prop_types_1.default.string,
    borderLeftWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderRight: prop_types_1.default.string,
    borderRightColor: prop_types_1.default.string,
    borderRightStyle: prop_types_1.default.string,
    borderRightWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderStyle: prop_types_1.default.string,
    borderTop: prop_types_1.default.string,
    borderTopColor: prop_types_1.default.string,
    borderTopStyle: prop_types_1.default.string,
    borderTopWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    borderWidth: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {
    border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
    borderColor: [
        'borderBottomColor',
        'borderLeftColor',
        'borderRightColor',
        'borderTopColor'
    ],
    borderStyle: [
        'borderBottomStyle',
        'borderLeftStyle',
        'borderRightStyle',
        'borderTopStyle'
    ],
    borderWidth: [
        'borderBottomWidth',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth'
    ]
};
exports.propValidators = {};
if (process.env.NODE_ENV !== 'production') {
    exports.propValidators.borderColor = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderColor”. Use “borderBottomColor”, “borderLeftColor” “borderRightColor” and “borderTopColor” instead.`;
        }
        return;
    };
    exports.propValidators.borderStyle = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderStyle”. Use “borderBottomStyle”, “borderLeftStyle” “borderRightStyle” and “borderTopStyle” instead.`;
        }
        return;
    };
    exports.propValidators.borderWidth = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “borderWidth”. Use “borderBottomWidth”, “borderLeftWidth” “borderRightWidth” and “borderTopWidth” instead.`;
        }
        return;
    };
}
const borderLeft = {
    className: 'b-lft',
    cssName: 'border-left',
    jsName: 'borderLeft'
};
const borderLeftColor = {
    className: 'b-lft-clr',
    cssName: 'border-left-color',
    jsName: 'borderLeftColor'
};
const borderLeftStyle = {
    className: 'b-lft-stl',
    cssName: 'border-left-style',
    jsName: 'borderLeftStyle',
    safeValue: true
};
const borderLeftWidth = {
    className: 'b-lft-wdt',
    cssName: 'border-left-width',
    jsName: 'borderLeftWidth'
};
const borderRight = {
    className: 'b-rgt',
    cssName: 'border-right',
    jsName: 'borderRight'
};
const borderRightColor = {
    className: 'b-rgt-clr',
    cssName: 'border-right-color',
    jsName: 'borderRightColor'
};
const borderRightStyle = {
    className: 'b-rgt-stl',
    cssName: 'border-right-style',
    jsName: 'borderRightStyle',
    safeValue: true
};
const borderRightWidth = {
    className: 'b-rgt-wdt',
    cssName: 'border-right-width',
    jsName: 'borderRightWidth'
};
const borderTop = {
    className: 'b-top',
    cssName: 'border-top',
    jsName: 'borderTop'
};
const borderTopColor = {
    className: 'b-top-clr',
    cssName: 'border-top-color',
    jsName: 'borderTopColor'
};
const borderTopStyle = {
    className: 'b-top-stl',
    cssName: 'border-top-style',
    jsName: 'borderTopStyle',
    safeValue: true
};
const borderTopWidth = {
    className: 'b-top-wdt',
    cssName: 'border-top-width',
    jsName: 'borderTopWidth'
};
const borderBottom = {
    className: 'b-btm',
    cssName: 'border-bottom',
    jsName: 'borderBottom'
};
const borderBottomColor = {
    className: 'b-btm-clr',
    cssName: 'border-bottom-color',
    jsName: 'borderBottomColor'
};
const borderBottomStyle = {
    className: 'b-btm-stl',
    cssName: 'border-bottom-style',
    jsName: 'borderBottomStyle',
    safeValue: true
};
const borderBottomWidth = {
    className: 'b-btm-wdt',
    cssName: 'border-bottom-width',
    jsName: 'borderBottomWidth'
};
exports.propEnhancers = {
    borderBottom: (value, selector) => (0, get_css_1.default)(borderBottom, value, selector),
    borderBottomColor: (value, selector) => (0, get_css_1.default)(borderBottomColor, value, selector),
    borderBottomStyle: (value, selector) => (0, get_css_1.default)(borderBottomStyle, value, selector),
    borderBottomWidth: (value, selector) => (0, get_css_1.default)(borderBottomWidth, value, selector),
    borderLeft: (value, selector) => (0, get_css_1.default)(borderLeft, value, selector),
    borderLeftColor: (value, selector) => (0, get_css_1.default)(borderLeftColor, value, selector),
    borderLeftStyle: (value, selector) => (0, get_css_1.default)(borderLeftStyle, value, selector),
    borderLeftWidth: (value, selector) => (0, get_css_1.default)(borderLeftWidth, value, selector),
    borderRight: (value, selector) => (0, get_css_1.default)(borderRight, value, selector),
    borderRightColor: (value, selector) => (0, get_css_1.default)(borderRightColor, value, selector),
    borderRightStyle: (value, selector) => (0, get_css_1.default)(borderRightStyle, value, selector),
    borderRightWidth: (value, selector) => (0, get_css_1.default)(borderRightWidth, value, selector),
    borderTop: (value, selector) => (0, get_css_1.default)(borderTop, value, selector),
    borderTopColor: (value, selector) => (0, get_css_1.default)(borderTopColor, value, selector),
    borderTopStyle: (value, selector) => (0, get_css_1.default)(borderTopStyle, value, selector),
    borderTopWidth: (value, selector) => (0, get_css_1.default)(borderTopWidth, value, selector)
};
