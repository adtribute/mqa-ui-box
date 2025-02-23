import * as cache from './cache';
export { default } from './box';
export { default as keyframes } from './keyframes';
export { default as splitProps } from './utils/split-props';
export { default as splitBoxProps } from './utils/split-box-props';
export { setClassNamePrefix } from './get-class-name';
export { configureSafeHref } from './utils/safeHref';
export { CssProps, BoxCssProps, EnhancerProps, SelectorMap } from './types/enhancers';
export { BoxProps, BoxOwnProps, PropsOf, PolymorphicBoxProps, BoxComponent } from './types/box-types';
export { KeyframesPercentageKey, KeyframesPositionalKey, KeyframesTimeline, KeyframesTimelineKey } from './types/keyframes';
export { background, borderRadius, borders, boxShadow, dimensions, flex, interaction, layout, list, opacity, overflow, position, spacing, text, transform, propTypes, propNames, propAliases, propEnhancers } from './enhancers/index';
export declare const hydrate: typeof cache.hydrate;
export declare function extractStyles(): {
    cache: [string, string][];
    styles: string;
};
export declare function clearStyles(): void;
