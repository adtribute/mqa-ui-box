import PropTypes from 'prop-types'
import getCss from '../get-css'
import { PropEnhancerValueType, PropValidators, PropEnhancers, PropTypesMapping, PropAliases } from '../types/enhancers'

export const propTypes: PropTypesMapping = {
  transform: PropTypes.string,
  transformOrigin: PropTypes.string
}

export const propAliases: PropAliases = {}

export const propValidators: PropValidators = {}

const transform = {
  className: 'tfrm',
  cssName: 'transform',
  jsName: 'transform',
  complexValue: true
}
const transformOrigin = {
  className: 'tfrm-orgn',
  cssName: 'transform-origin',
  jsName: 'transformOrigin',
  complexValue: true
}

export const propEnhancers: PropEnhancers = {
  transform: (value: PropEnhancerValueType, prefix?: string) => getCss(transform, value, prefix),
  transformOrigin: (value: PropEnhancerValueType, prefix?: string) => getCss(transformOrigin, value, prefix)
}
