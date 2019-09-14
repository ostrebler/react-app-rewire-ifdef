module.exports = ({ "ifdef-env": autoEnv, ...options } = {}) => config => {
  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf
  const index = loaders.findIndex(({ loader }) => typeof loader === 'string' && loader.includes('babel-loader'))
  const { loader, options, ...rest } = loaders[index]
  loaders[index] = {
    ...rest,
    use: [{ loader, options }, {
      loader: 'ifdef-loader',
      options: {
        ...autoEnv ? process.env : {},
        ...options
      }
    }]
  }
  return config
}
