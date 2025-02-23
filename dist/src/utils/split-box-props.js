"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../enhancers/index");
const split_props_1 = __importDefault(require("./split-props"));
function splitBoxProps(props) {
    return (0, split_props_1.default)(props, index_1.propNames);
}
exports.default = splitBoxProps;
