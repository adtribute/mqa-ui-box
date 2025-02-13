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
const src_1 = __importStar(require("../src"));
const react_2 = require("@storybook/react");
const all_properties_component_1 = __importDefault(require("./all-properties-component"));
const selector_uniquness_story_1 = __importDefault(require("./fixtures/selector-uniquness-story"));
const keyframes_story_1 = __importDefault(require("./fixtures/keyframes-story"));
const selectors_story_1 = __importDefault(require("./fixtures/selectors-story"));
const RedBox = redBoxProps => (react_1.default.createElement(src_1.default, Object.assign({ background: "red", width: "100px", height: "100px", margin: "20px" }, redBoxProps)));
const logRef = (ref) => console.log(ref);
const reactRef = react_1.default.createRef();
const CustomComp = props => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(src_1.default, { is: "h1" }, "custom component"),
        props.children));
};
(0, react_2.storiesOf)('Box', module)
    .add(`is=''`, () => {
    return (react_1.default.createElement(src_1.default, null,
        react_1.default.createElement(src_1.default, { is: "h1" }, "h1"),
        react_1.default.createElement(src_1.default, { is: "h2" }, "h2"),
        react_1.default.createElement(src_1.default, { is: "h3" }, "h3"),
        react_1.default.createElement(src_1.default, { is: "p" }, "p"),
        react_1.default.createElement(src_1.default, { is: "strong" }, "strong"),
        react_1.default.createElement(src_1.default, { is: "input" })));
})
    .add('safe `href`', () => {
    (0, src_1.configureSafeHref)({
        enabled: true
    });
    return (react_1.default.createElement(src_1.default, { paddingTop: 30, borderTop: "1px solid", marginTop: 30 },
        react_1.default.createElement(src_1.default, { is: "h2" }, "Links"),
        react_1.default.createElement(src_1.default, { is: "a", href: "/something/afile" }, "Internal Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "http://localhost:9009/test" }, "Same Origin Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "https://apple.com" }, "External Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "javascript:alert('hi')" }, "Javascript protocol Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "javascript:alert('hi')", allowUnsafeHref: true }, "Overwride Safe Href")));
})
    .add('unsafe `href`', () => {
    (0, src_1.configureSafeHref)({
        enabled: false
    });
    return (react_1.default.createElement(src_1.default, { paddingTop: 30, borderTop: "1px solid", marginTop: 30 },
        react_1.default.createElement(src_1.default, { is: "h2" }, "Links"),
        react_1.default.createElement(src_1.default, { is: "a", href: "/something/afile" }, "Internal Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "http://localhost:9009/test" }, "Same Origin Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "https://apple.com" }, "External Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "javascript:alert('hi')" }, "Javascript protocol Link"),
        react_1.default.createElement(src_1.default, { is: "a", href: "javascript:alert('hi')", allowUnsafeHref: false }, "Overwride Safe Href")));
})
    .add(`custom comp`, () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { is: CustomComp },
        react_1.default.createElement(src_1.default, null, "chiiillld")))))
    .add('background', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { background: "red", width: "100px", height: "100px" }),
    react_1.default.createElement(src_1.default, { backgroundColor: "blue", width: "100px", height: "100px" }),
    react_1.default.createElement(src_1.default, { backgroundImage: "url(https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg)", backgroundSize: "cover", backgroundPosition: "center", width: "100px", height: "100px" }))))
    .add('borderRadius', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, { borderRadius: "5px" }),
    react_1.default.createElement(RedBox, { borderRadius: "10px", borderTopRightRadius: "50px" }),
    react_1.default.createElement(RedBox, { borderRadius: "10px", borderTopLeftRadius: "50px" }),
    react_1.default.createElement(RedBox, { borderRadius: "10px", borderBottomLeftRadius: "50px" }),
    react_1.default.createElement(RedBox, { borderRadius: "10px", borderBottomRightRadius: "50px" }))))
    .add('borders', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, { border: "10px solid grey" }),
    react_1.default.createElement(RedBox, { border: "10px solid", borderColor: "blue" }),
    react_1.default.createElement(RedBox, { border: "10px solid grey", borderColor: "black" }),
    react_1.default.createElement(RedBox, { borderTop: "10px solid grey" }),
    react_1.default.createElement(RedBox, { borderTop: "10px solid grey", borderTopColor: "black" }),
    react_1.default.createElement(RedBox, { borderTop: "5px solid", borderTopStyle: "dashed" }),
    react_1.default.createElement(RedBox, { borderBottom: "10px solid grey" }),
    react_1.default.createElement(RedBox, { borderLeft: "10px solid grey" }))))
    .add('boxShadow', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, { boxShadow: "0 10px 40px black" }))))
    .add('dimensions', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, null),
    react_1.default.createElement(RedBox, { minWidth: "400px" }),
    react_1.default.createElement(RedBox, { minHeight: "400px" }),
    react_1.default.createElement(RedBox, { minWidth: 400 }),
    react_1.default.createElement(RedBox, { minHeight: 400 }))))
    .add('display', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, { display: "inline-block" }),
    react_1.default.createElement(RedBox, { display: "inline" }, "inline"))))
    .add('flex', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { display: "flex", alignItems: "center", justifyContent: "space-between" },
        react_1.default.createElement(RedBox, null),
        react_1.default.createElement(RedBox, null),
        react_1.default.createElement(RedBox, null)))))
    .add('overflow', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { width: "40px", height: "40px", overflow: "hidden" },
        react_1.default.createElement(RedBox, null)))))
    .add('position', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, { position: "absolute", left: "10px", bottom: "10px" }))))
    .add('spacing', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { backgroundColor: "red", width: "100px", height: "100px", marginTop: "100px" }))))
    .add('text', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { textAlign: "center" }, "Center"),
    react_1.default.createElement(src_1.default, { textAlign: "right" }, "Right"),
    react_1.default.createElement(src_1.default, { verticalAlign: "middle" }, "Middle"),
    react_1.default.createElement(src_1.default, { color: "red" }, "Right"),
    react_1.default.createElement(src_1.default, { fontFamily: "sans-serif" }, "sans-serif"),
    react_1.default.createElement(src_1.default, { fontWeight: "bold" }, "bold"),
    react_1.default.createElement(src_1.default, { fontWeight: "bold" }, "bold"),
    react_1.default.createElement(src_1.default, { fontSize: "72px" }, "72px"))))
    .add('list', () => (react_1.default.createElement(src_1.default, { is: "ol", listStyleType: "lower-greek" },
    react_1.default.createElement(src_1.default, { is: "li" }, "I\u055Am"),
    react_1.default.createElement(src_1.default, { is: "li" }, "a"),
    react_1.default.createElement(src_1.default, { is: "li" }, "list"))))
    .add('utils', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { cursor: "pointer" }, "Center"),
    react_1.default.createElement(src_1.default, { boxSizing: "border-box" }, "boxSizing: border-box"))))
    .add('ref', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { ref: logRef }, "ref"))))
    .add('ref as React ref', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(src_1.default, { ref: reactRef }, "React ref"))))
    .add('props pass through', () => {
    const CustomComponent = props => react_1.default.createElement("code", null, JSON.stringify(props, undefined, 4));
    return (react_1.default.createElement(src_1.default, { display: "flex", flexDirection: "column" },
        react_1.default.createElement(src_1.default, { is: "input", type: "file" }),
        react_1.default.createElement(src_1.default, { is: CustomComponent, foo: "bar", baz: 123, fizz: { buzz: true } })));
})
    .add('all properties', () => (react_1.default.createElement(src_1.default, null,
    (0, all_properties_component_1.default)(),
    (0, all_properties_component_1.default)())))
    .add('overrides', () => (react_1.default.createElement(src_1.default, null,
    react_1.default.createElement(RedBox, { marginLeft: "5px" }))))
    .add('selectors', () => react_1.default.createElement(selectors_story_1.default, null))
    .add('selector uniqueness', () => react_1.default.createElement(selector_uniquness_story_1.default, null))
    .add('style prop', () => {
    const style = { backgroundColor: 'red', width: 200 };
    return react_1.default.createElement(src_1.default, { style: style }, JSON.stringify(style, undefined, 4));
})
    .add('keyframes', () => react_1.default.createElement(keyframes_story_1.default, null));
