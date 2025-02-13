module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
