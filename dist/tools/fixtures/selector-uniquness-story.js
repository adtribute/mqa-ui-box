"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const src_1 = __importDefault(require("../../src"));
const SelectorUniqueness = () => {
    const [isInputDisabled, setIsInputDisabled] = (0, react_1.useState)(false);
    return (react_1.default.createElement(src_1.default, { display: "flex", flexDirection: "column", width: 200 },
        "Border style on hover",
        react_1.default.createElement(src_1.default, { is: "input", selectors: {
                '&:hover': { borderColor: 'red' }
            } }),
        "Border style only when disabled",
        react_1.default.createElement(src_1.default, null,
            "Disable input",
            react_1.default.createElement(src_1.default, { is: "input", type: "checkbox", onChange: () => setIsInputDisabled((disabled) => !disabled), checked: isInputDisabled })),
        react_1.default.createElement(src_1.default, { is: "input", disabled: isInputDisabled, selectors: {
                '&:disabled': { borderColor: 'red' }
            } })));
};
exports.default = SelectorUniqueness;
