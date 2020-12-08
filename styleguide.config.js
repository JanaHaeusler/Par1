const path = require('path')

module.exports = {
    components: 'src/**/**/*[A-Z].js',
    ignore: ['**/App.js', '**/*.test.js', '**/GlobalStyle.js'],
    defaultExample: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    styleguideComponents: {
      Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
    },
}