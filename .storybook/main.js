const path = require("path");

module.exports = {
  "stories": [
    "../packages/**/**/**/*.stories.js", // packages/vue/所有组件都进行发布
    "../stories/**/*.stories.mdx",
  ],
  "addons": [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
        },
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          // include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    "@storybook/addon-actions",
    '@storybook/addon-a11y',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'resolve-url-loader',],
        include: path.resolve(__dirname, '../packages/'),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader'],
        include: path.resolve(__dirname, '../packages/'),
      }
    );
    return config;
  },
}
