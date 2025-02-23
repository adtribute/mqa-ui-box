type Omit<T extends Dictionary<any>, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface Dictionary<T> {
    [key: string]: T;
}
export interface SplitProps<P extends Dictionary<any>, K extends keyof P> {
    matchedProps: Pick<P, K>;
    remainingProps: Omit<P, K>;
}
export default function splitProps<P extends Dictionary<any>, K extends keyof P>(props: P, keys: K[]): SplitProps<P, K>;
export {};
