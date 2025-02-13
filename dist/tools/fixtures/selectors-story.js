"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const src_1 = __importDefault(require("../../src"));
const SelectorsStory = () => {
    return (react_1.default.createElement(src_1.default, null,
        react_1.default.createElement(src_1.default, null,
            "Border style on hover",
            react_1.default.createElement(src_1.default, { is: "input", selectors: {
                    '&:hover': { borderColor: 'red' }
                } })),
        react_1.default.createElement(src_1.default, null,
            "No border style on hover - :not(:disabled) selector",
            react_1.default.createElement(src_1.default, { is: "input", disabled: true, selectors: {
                    '&:hover:not(:disabled)': { borderColor: 'blue' }
                } })),
        react_1.default.createElement(src_1.default, { selectors: { '& .child:hover': { backgroundColor: 'red' } } },
            "Red background on child hover",
            react_1.default.createElement(src_1.default, { className: "child", backgroundColor: "blue", width: 200, height: 100 }),
            react_1.default.createElement(src_1.default, { className: "child", backgroundColor: "yellow", width: 200, height: 100 }),
            react_1.default.createElement(src_1.default, { className: "child", backgroundColor: "green", width: 200, height: 100 })),
        react_1.default.createElement(src_1.default, { selectors: { '& .foo:hover, .bar:hover': { backgroundColor: 'green' } } },
            "Green background on child hover (comma-separated class name selectors)",
            react_1.default.createElement(src_1.default, { className: "foo", backgroundColor: "blue", width: 200, height: 100 }),
            react_1.default.createElement(src_1.default, { className: "bar", backgroundColor: "yellow", width: 200, height: 100 })),
        "Pink background on :focus or :hover",
        react_1.default.createElement(src_1.default, { selectors: { '&:focus,:hover': { backgroundColor: 'pink' } }, width: 200, height: 100 }),
        "Nested selector - blue background when ",
        react_1.default.createElement(src_1.default, { is: "code" }, "data-active=true"),
        ", red background on hover",
        react_1.default.createElement(src_1.default, { "data-active": true, height: 100, width: 200, selectors: {
                '[data-active=true]': {
                    backgroundColor: 'blue',
                    '&:hover': {
                        backgroundColor: 'red'
                    }
                }
            } })));
};
exports.default = SelectorsStory;
