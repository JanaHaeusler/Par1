const path = require('path')

module.exports = {
  components: [
    'src/app/**/[A-Z]*.js',
    'src/create/**/[A-Z]*.js',
    'src/details/**/[A-Z]*.js',
    'src/edit/**/[A-Z]*.js',
    'src/overview/**/[A-Z]*.js',
  ],
  ignore: [
    '**/App.js',
    'src/**/**/*.test.js',
    '**/GlobalStyle.js',
    'src/app/Icons/Icons.js',
  ],
  defaultExample: true,
  usageMode: 'expand',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
  },
  theme: {
    color: {
      baseBackground: '#f8f8f8',
      sidebarBackground: '#fff',
    },
  },
}
