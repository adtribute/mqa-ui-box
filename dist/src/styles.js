"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.getAll = exports.add = void 0;
const style_sheet_1 = __importDefault(require("./utils/style-sheet"));
const styleSheet = new style_sheet_1.default({});
styleSheet.inject();
function add(styles) {
    styleSheet.insert(styles);
}
exports.add = add;
function getAll() {
    return styleSheet
        .rules()
        .reduce((combinedRules, rule) => combinedRules + rule.cssText, '');
}
exports.getAll = getAll;
function clear() {
    styleSheet.flush();
    styleSheet.inject();
}
exports.clear = clear;
