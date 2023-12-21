const { configure, presets } = require('eslint-kit')

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  //https://github.com/pmndrs/react-three-fiber/discussions/2487
  extend: {
    rules: {
      'react/no-unknown-property': 'off',
    },
  },

  presets: [
    presets.imports(),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react(),
  ],
})
