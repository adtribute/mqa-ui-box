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
const react_1 = __importDefault(require("react"));
const src_1 = __importStar(require("../../src"));
const KeyframesStory = () => {
    const translateTo0 = {
        transform: 'translate3d(0,0,0)'
    };
    const translateNeg30 = {
        transform: 'translate3d(0, -30px, 0)'
    };
    const translateNeg15 = {
        transform: 'translate3d(0, -15px, 0)'
    };
    const translateNeg4 = {
        transform: 'translate3d(0,-4px,0)'
    };
    const bounce = (0, src_1.keyframes)('bounce', {
        from: translateTo0,
        20: translateTo0,
        40: translateNeg30,
        43: translateNeg30,
        53: translateTo0,
        70: translateNeg15,
        80: translateTo0,
        90: translateNeg4,
        to: translateTo0
    });
    return (react_1.default.createElement(src_1.default, null,
        "Single prop",
        react_1.default.createElement(src_1.default, { animation: `${bounce} 1s ease 0s infinite normal none running` }, "some bouncing text!"),
        "Separate props",
        react_1.default.createElement(src_1.default, { animationName: bounce, animationDuration: "1s", animationTimingFunction: "ease", animationDelay: "0s", animationIterationCount: "infinite", animationDirection: "normal", animationFillMode: "none", animationPlayState: "running" }, "some bouncing text!")));
};
exports.default = KeyframesStory;
