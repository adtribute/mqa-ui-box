import React from 'react';
import { BoxProps } from './types/box-types';
declare const Box: <E extends React.ElementType<any, keyof React.JSX.IntrinsicElements> = "div">(props: BoxProps<E>) => JSX.Element;
export default Box;
