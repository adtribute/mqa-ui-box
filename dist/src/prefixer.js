"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inline_style_prefixer_1 = require("inline-style-prefixer");
const decamelize_1 = __importDefault(require("./utils/decamelize"));
const prefixRegex = /^(Webkit|ms|Moz|O)/;
function prefixer(property, value) {
    const rules = (0, inline_style_prefixer_1.prefix)({ [property]: value });
    const rulesArray = [];
    const propertyNames = Object.keys(rules);
    for (let i = 0; i < propertyNames.length; i++) {
        const propertyName = propertyNames[i];
        const prefixedProp = propertyName.match(prefixRegex)
            ? `-${propertyName}`
            : propertyName;
        const prop = (0, decamelize_1.default)(prefixedProp);
        const values = rules[propertyName];
        if (Array.isArray(values)) {
            for (let j = 0; j < values.length; j++) {
                rulesArray.push({ property: prop, value: values[j] });
            }
        }
        else {
            rulesArray.push({ property: prop, value: values });
        }
    }
    return rulesArray;
}
exports.default = prefixer;
