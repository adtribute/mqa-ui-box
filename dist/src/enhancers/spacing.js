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
    margin: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginX: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    marginY: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    padding: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingBottom: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingLeft: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingRight: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingTop: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingX: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    paddingY: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {
    margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginBottom', 'marginTop'],
    padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingBottom', 'paddingTop']
};
exports.propValidators = {};
if (process.env.NODE_ENV !== 'production') {
    exports.propValidators.margin = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “margin”. Use “marginX”, “marginY” “marginBottom”, “marginLeft”, “marginRight” and “marginTop” instead.`;
        }
        return;
    };
    exports.propValidators.marginX = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “marginX”. Use “marginLeft” and “marginRight” instead.`;
        }
        return;
    };
    exports.propValidators.marginY = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “marginY”. Use “marginBottom” and “marginTop” instead.`;
        }
        return;
    };
    exports.propValidators.padding = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “padding”. Use “paddingX”, “paddingY” “paddingBottom”, “paddingLeft”, “paddingRight” and “paddingTop” instead.`;
        }
        return;
    };
    exports.propValidators.paddingX = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “paddingX”. Use “paddingLeft” and “paddingRight” instead.`;
        }
        return;
    };
    exports.propValidators.paddingY = value => {
        if (regex_1.spacesOutsideParentheses.test(value)) {
            return `multiple values (“${value}”) aren՚t supported with “paddingY”. Use “paddingBottom” and “paddingTop” instead.`;
        }
        return;
    };
}
const marginTop = {
    className: 'mt',
    cssName: 'margin-top',
    jsName: 'marginTop'
};
const marginRight = {
    className: 'mr',
    cssName: 'margin-right',
    jsName: 'marginRight'
};
const marginBottom = {
    className: 'mb',
    cssName: 'margin-bottom',
    jsName: 'marginBottom'
};
const marginLeft = {
    className: 'ml',
    cssName: 'margin-left',
    jsName: 'marginLeft'
};
const paddingTop = {
    className: 'pt',
    cssName: 'padding-top',
    jsName: 'paddingTop'
};
const paddingRight = {
    className: 'pr',
    cssName: 'padding-right',
    jsName: 'paddingRight'
};
const paddingBottom = {
    className: 'pb',
    cssName: 'padding-bottom',
    jsName: 'paddingBottom'
};
const paddingLeft = {
    className: 'pl',
    cssName: 'padding-left',
    jsName: 'paddingLeft'
};
exports.propEnhancers = {
    marginBottom: (value, selector) => (0, get_css_1.default)(marginBottom, value, selector),
    marginLeft: (value, selector) => (0, get_css_1.default)(marginLeft, value, selector),
    marginRight: (value, selector) => (0, get_css_1.default)(marginRight, value, selector),
    marginTop: (value, selector) => (0, get_css_1.default)(marginTop, value, selector),
    paddingBottom: (value, selector) => (0, get_css_1.default)(paddingBottom, value, selector),
    paddingLeft: (value, selector) => (0, get_css_1.default)(paddingLeft, value, selector),
    paddingRight: (value, selector) => (0, get_css_1.default)(paddingRight, value, selector),
    paddingTop: (value, selector) => (0, get_css_1.default)(paddingTop, value, selector)
};
