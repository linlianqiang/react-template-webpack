module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ["stylelint-order"], // stylelint-order是CSS属性排序插件lint工具
  ignoreFiles: ['node_modules/**', 'dist/**', 'lib/**', 'src/assets/fonts/**', 'src/assets/style/reset.css'],
  rules: {
    'scss/at-import-partial-extension': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep']
      }
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': null,
    'keyframes-name-pattern': null
  }
};
