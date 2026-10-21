import React from 'react'
import PropTypes from 'prop-types'
import { BoxProps } from './types/box-types'
import { EnhancerProps } from './types/enhancers'
import { propTypes } from './enhancers'
import enhanceProps from './enhance-props'
import { extractAnchorProps, getUseSafeHref } from './utils/safeHref'

const Box = React.forwardRef(<E extends React.ElementType>({ is, children, allowUnsafeHref, ...props }: BoxProps<E>, ref: React.Ref<Element>) => {
  // React 19 removed defaultProps on function components; apply the default the
  // same way React did (only when absent, after the user's own props)
  const enhancerProps = props as EnhancerProps
  if (enhancerProps.boxSizing === undefined) {
    enhancerProps.boxSizing = 'border-box'
  }

  // Convert the CSS props to class names (and inject the styles)
  const {className, enhancedProps: parsedProps} = enhanceProps(props)

  parsedProps.className = className

  if (ref) {
    parsedProps.ref = ref
  }

  /**
   * If the user has enabled safe hrefs we want to make sure that the url passed
   * uses a safe protocol and that the other attributes that make the link safe are
   * added to the element
   */
  const safeHrefEnabled = (typeof allowUnsafeHref === 'boolean' ? !allowUnsafeHref : getUseSafeHref()) && is === 'a' && parsedProps.href
  if (safeHrefEnabled) {
    const {safeHref, safeRel} = extractAnchorProps(parsedProps.href, parsedProps.rel)
    parsedProps.href = safeHref
    parsedProps.rel = safeRel
  }

  return React.createElement(is || 'div', parsedProps, children)
}) as <E extends React.ElementType = 'div'>(props: BoxProps<E>) => React.JSX.Element

// @ts-ignore
Box.displayName = 'Box'

// @ts-ignore
Box.propTypes = {
  ...propTypes,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.elementType]),
  allowUnsafeHref: PropTypes.bool
}

export default Box
