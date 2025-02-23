"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is_production_1 = __importDefault(require("./is-production"));
const isBrowser = typeof window !== 'undefined';
function last(arr) {
    return arr[arr.length - 1];
}
function sheetForTag(tag) {
    if (tag.sheet) {
        return tag.sheet;
    }
    for (let i = 0; i < document.styleSheets.length; i += 1) {
        if (document.styleSheets[i].ownerNode === tag) {
            return document.styleSheets[i];
        }
    }
    return;
}
function makeStyleTag() {
    const tag = document.createElement('style');
    tag.type = 'text/css';
    tag.setAttribute('data-ui-box', '');
    tag.append(document.createTextNode(''));
    (document.head || document.querySelector('head')).append(tag);
    return tag;
}
class CustomStyleSheet {
    constructor(options = {}) {
        this.tags = [];
        this.ctr = 0;
        this.injected = false;
        this.isSpeedy = options.speedy === undefined ? (0, is_production_1.default)() : options.speedy;
        this.maxLength = options.maxLength || 65000;
    }
    getSheet() {
        return sheetForTag(last(this.tags));
    }
    inject() {
        if (this.injected) {
            throw new Error('StyleSheet has already been injected.');
        }
        if (isBrowser) {
            this.tags[0] = makeStyleTag();
        }
        else {
            this.sheet = {
                cssRules: [],
                insertRule: (rule) => {
                    ;
                    this.sheet.cssRules.push({ cssText: rule });
                }
            };
        }
        this.injected = true;
    }
    speedy(bool) {
        if (this.ctr !== 0) {
            throw new Error(`StyleSheet cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`);
        }
        this.isSpeedy = Boolean(bool);
    }
    _insert(sheet, rule) {
        sheet.insertRule(rule, sheet.cssRules.length);
    }
    insert(rule) {
        if (isBrowser) {
            const sheet = this.getSheet();
            if (this.isSpeedy && sheet != null) {
                this._insert(sheet, rule);
            }
            else {
                last(this.tags).append(document.createTextNode(rule));
            }
        }
        else if (this.sheet) {
            this.sheet.insertRule(rule, this.sheet.cssRules.length);
        }
        this.ctr += 1;
        if (isBrowser && this.ctr % this.maxLength === 0) {
            this.tags.push(makeStyleTag());
        }
        return this.ctr - 1;
    }
    flush() {
        if (isBrowser) {
            this.tags.forEach(tag => tag.parentNode.removeChild(tag));
            this.tags = [];
            this.sheet = null;
            this.ctr = 0;
        }
        else if (this.sheet) {
            this.sheet.cssRules = [];
        }
        this.injected = false;
    }
    rules() {
        if (!isBrowser) {
            return (this.sheet ? this.sheet.cssRules : []);
        }
        const arr = [];
        this.tags.forEach(tag => {
            const sheet = sheetForTag(tag);
            if (sheet) {
                const rules = Array.from(sheet.cssRules);
                arr.splice(arr.length, 0, ...[...rules]);
            }
        });
        return arr;
    }
}
exports.default = CustomStyleSheet;
