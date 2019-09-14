const { getBabelLoader } = require('customize-cra')

module.exports = ({ "ifdef-env": autoEnv, ...options } = {}) => config => {
  const { test, include } = getBabelLoader(config)
  config.module.rules.push({
    test,
    include,
    loader: 'ifdef-loader',
    options: {
      ...autoEnv ? process.env : {},
      ...options
    }
  })
  return config
}
