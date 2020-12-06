const path = require('path')

module.exports = {
    components: 'src/components/**/*.js',
    ignore: ['**/App.js', '**/*.test.js', '**/GlobalStyle.js', '**/**/Icons.js', '**/**/**/services/*.js'],
    defaultExample: true,
    exampleMode: 'expand',
    usageMode: 'expand',
    styleguideComponents: {
      Wrapper: path.join(__dirname, 'src/styles/StyleWrapper'),
    },
}