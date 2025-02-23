"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.propEnhancers = exports.propValidators = exports.propAliases = exports.propTypes = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const get_css_1 = __importDefault(require("../get-css"));
exports.propTypes = {
    columnGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    grid: prop_types_1.default.string,
    gridArea: prop_types_1.default.string,
    gridAutoColumns: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridAutoFlow: prop_types_1.default.string,
    gridAutoRows: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumn: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumnEnd: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumnGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridColumnStart: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRow: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRowEnd: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRowGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridRowStart: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    gridTemplate: prop_types_1.default.string,
    gridTemplateAreas: prop_types_1.default.string,
    gridTemplateColumns: prop_types_1.default.string,
    gridTemplateRows: prop_types_1.default.string,
    rowGap: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number])
};
exports.propAliases = {};
exports.propValidators = {};
const columnGap = {
    className: 'col-gap',
    cssName: 'column-gap',
    jsName: 'columnGap'
};
const gap = {
    className: 'gap',
    cssName: 'gap',
    jsName: 'gap'
};
const grid = {
    className: 'grd',
    cssName: 'grid',
    jsName: 'grid',
    complexValue: true
};
const gridArea = {
    className: 'grd-ara',
    cssName: 'grid-area',
    jsName: 'gridArea',
    complexValue: true
};
const gridAutoColumns = {
    className: 'grd-ato-col',
    cssName: 'grid-auto-columns',
    jsName: 'gridAutoColumns',
    complexValue: true
};
const gridAutoFlow = {
    className: 'grd-ato-flw',
    cssName: 'grid-auto-flow',
    jsName: 'gridAutoFlow'
};
const gridAutoRows = {
    className: 'grd-ato-row',
    cssName: 'grid-auto-rows',
    jsName: 'gridAutoRows',
    complexValue: true
};
const gridColumn = {
    className: 'grd-col',
    cssName: 'grid-column',
    jsName: 'gridColumn',
    defaultUnit: '',
    complexValue: true
};
const gridColumnEnd = {
    className: 'grd-col-end',
    cssName: 'grid-column-end',
    jsName: 'gridColumnEnd',
    defaultUnit: ''
};
const gridColumnGap = {
    className: 'grd-col-gap',
    cssName: 'grid-column-gap',
    jsName: 'gridColumnGap'
};
const gridColumnStart = {
    className: 'grd-col-str',
    cssName: 'grid-column-start',
    jsName: 'gridColumnStart',
    defaultUnit: ''
};
const gridGap = {
    className: 'grd-gap',
    cssName: 'grid-gap',
    jsName: 'gridGap'
};
const gridRow = {
    className: 'grd-row',
    cssName: 'grid-row',
    jsName: 'gridRow',
    defaultUnit: '',
    complexValue: true
};
const gridRowEnd = {
    className: 'grd-row-end',
    cssName: 'grid-row-end',
    jsName: 'gridRowEnd',
    defaultUnit: ''
};
const gridRowGap = {
    className: 'grd-row-gap',
    cssName: 'grid-row-gap',
    jsName: 'gridRowGap'
};
const gridRowStart = {
    className: 'grd-row-str',
    cssName: 'grid-row-start',
    jsName: 'gridRowStart',
    defaultUnit: ''
};
const gridTemplate = {
    className: 'grd-tmp',
    cssName: 'grid-template',
    jsName: 'gridTemplate',
    complexValue: true
};
const gridTemplateAreas = {
    className: 'grd-tmp-ara',
    cssName: 'grid-template-areas',
    jsName: 'gridTemplateAreas',
    complexValue: true
};
const gridTemplateColumns = {
    className: 'grd-tmp-col',
    cssName: 'grid-template-columns',
    jsName: 'gridTemplateColumns',
    complexValue: true
};
const gridTemplateRows = {
    className: 'grd-tmp-row',
    cssName: 'grid-template-rows',
    jsName: 'gridTemplateRows',
    complexValue: true
};
const rowGap = {
    className: 'row-gap',
    cssName: 'row-gap',
    jsName: 'rowGap'
};
exports.propEnhancers = {
    columnGap: (value, selector) => (0, get_css_1.default)(columnGap, value, selector),
    gap: (value, selector) => (0, get_css_1.default)(gap, value, selector),
    grid: (value, selector) => (0, get_css_1.default)(grid, value, selector),
    gridArea: (value, selector) => (0, get_css_1.default)(gridArea, value, selector),
    gridAutoColumns: (value, selector) => (0, get_css_1.default)(gridAutoColumns, value, selector),
    gridAutoFlow: (value, selector) => (0, get_css_1.default)(gridAutoFlow, value, selector),
    gridAutoRows: (value, selector) => (0, get_css_1.default)(gridAutoRows, value, selector),
    gridColumn: (value, selector) => (0, get_css_1.default)(gridColumn, value, selector),
    gridColumnEnd: (value, selector) => (0, get_css_1.default)(gridColumnEnd, value, selector),
    gridColumnGap: (value, selector) => (0, get_css_1.default)(gridColumnGap, value, selector),
    gridColumnStart: (value, selector) => (0, get_css_1.default)(gridColumnStart, value, selector),
    gridGap: (value, selector) => (0, get_css_1.default)(gridGap, value, selector),
    gridRow: (value, selector) => (0, get_css_1.default)(gridRow, value, selector),
    gridRowEnd: (value, selector) => (0, get_css_1.default)(gridRowEnd, value, selector),
    gridRowGap: (value, selector) => (0, get_css_1.default)(gridRowGap, value, selector),
    gridRowStart: (value, selector) => (0, get_css_1.default)(gridRowStart, value, selector),
    gridTemplate: (value, selector) => (0, get_css_1.default)(gridTemplate, value, selector),
    gridTemplateAreas: (value, selector) => (0, get_css_1.default)(gridTemplateAreas, value, selector),
    gridTemplateColumns: (value, selector) => (0, get_css_1.default)(gridTemplateColumns, value, selector),
    gridTemplateRows: (value, selector) => (0, get_css_1.default)(gridTemplateRows, value, selector),
    rowGap: (value, selector) => (0, get_css_1.default)(rowGap, value, selector)
};
