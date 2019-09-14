const { getBabelLoader, addWebpackModuleRule } = require('customize-cra')

module.exports = ({ "ifdef-env": autoEnv, ...options } = {}) => config => {
  const { test, include } = getBabelLoader(config)
  return addWebpackModuleRule({
    test,
    include,
    loader: 'ifdef-loader',
    options: {
      ...autoEnv ? process.env : {},
      ...options
    }
  })(config)
}
