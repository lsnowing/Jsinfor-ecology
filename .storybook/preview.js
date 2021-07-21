import { app } from '@storybook/vue3';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.use(Antd)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light-theme',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light-theme', title: 'Light theme' },
        { value: 'dark-theme', title: 'Dark theme' },
      ],
    },
  },
}