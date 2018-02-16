import StyleSheet from './utils/style-sheet'

const styleSheet = new StyleSheet()
styleSheet.inject()

export function add(styles) {
  styleSheet.insert(styles)
}

export function getAll() {
  return styleSheet
    .rules()
    .reduce((combinedRules, rule) => combinedRules + rule.cssText, '')
}

export function clear() {
  styleSheet.flush()
  styleSheet.inject()
}
