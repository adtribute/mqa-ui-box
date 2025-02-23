export declare function getClassNamePrefix(): string;
export declare function setClassNamePrefix(prefix: string): void;
export interface PropertyInfo {
    className?: string;
    safeValue?: boolean;
    complexValue?: boolean;
    jsName?: string;
    cssName?: string;
    defaultUnit?: string;
    isPrefixed?: boolean;
}
export default function getClassName(propertyInfo: PropertyInfo, value: string, selector?: string): string;
