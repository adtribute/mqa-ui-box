"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const enhancers_1 = require("./enhancers");
const enhance_props_1 = __importDefault(require("./enhance-props"));
const safeHref_1 = require("./utils/safeHref");
const Box = react_1.default.forwardRef((_a, ref) => {
    var { is, children, allowUnsafeHref } = _a, props = __rest(_a, ["is", "children", "allowUnsafeHref"]);
    const { className, enhancedProps: parsedProps } = (0, enhance_props_1.default)(props);
    parsedProps.className = className;
    if (ref) {
        parsedProps.ref = ref;
    }
    const safeHrefEnabled = (typeof allowUnsafeHref === 'boolean' ? !allowUnsafeHref : (0, safeHref_1.getUseSafeHref)()) && is === 'a' && parsedProps.href;
    if (safeHrefEnabled) {
        const { safeHref, safeRel } = (0, safeHref_1.extractAnchorProps)(parsedProps.href, parsedProps.rel);
        parsedProps.href = safeHref;
        parsedProps.rel = safeRel;
    }
    return react_1.default.createElement(is || 'div', parsedProps, children);
});
Box.displayName = 'Box';
Box.propTypes = Object.assign(Object.assign({}, enhancers_1.propTypes), { is: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.elementType]), allowUnsafeHref: prop_types_1.default.bool });
Box.defaultProps = {
    is: 'div',
    boxSizing: 'border-box'
};
exports.default = Box;
