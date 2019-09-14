# react-app-rewire-ifdef

Adds [ifdef-loader](https://github.com/nippur72/ifdef-loader) to a react-app-rewired config, which allows JavaScript or TypeScript conditional compilation with preprocessed statements like `#if`, `#elif`, etc.

## Installation

```
yarn add --dev react-app-rewire-ifdef
```

## Example

`config-overrides.js` :

```javascript
const rewireIfdef = require('react-app-rewire-ifdef')

module.exports = rewireIfdef({
  MY_VAR_1: true,
  VARIABLE2: 'some string',
  "ifdef-verbose": true // see ifdef-loader's doc for more details
})
```

I added one option that _is not_ in `ifdef-loader` : `"ifdef-env"` which, when set to `true`, automatically loads all environment variables into the loader. For example :

```javascript
const rewireIfdef = require('react-app-rewire-ifdef')

module.exports = rewireIfdef({
  "ifdef-env": true
})
```

Then in your app code :

```javascript
/// #if NODE_ENV === 'production'
console.log('This line of code will only exist in production mode !')
/// #endif
```
