module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: { builder: 'webpack5' }
}
