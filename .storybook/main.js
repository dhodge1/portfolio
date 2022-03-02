module.exports = {
  stories: [
    '../stories/**/*.stor(y|ies).mdx',
    '../stories/**/*.stor(y|ies).@(js|jsx|ts|tsx)',
    '../components/**/*.stor(y|ies).@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};