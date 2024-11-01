import path from 'path';

import { StorybookConfig } from '@storybook/react-webpack5';

const storybookConfig: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: (config) => {
    // Resolve absolute imports
    config.resolve?.modules?.push(path.resolve(process.cwd(), 'src'));

    return config;
  },

  addons: ['@storybook/addon-webpack5-compiler-swc'],
};

// eslint-disable-next-line import/no-default-export
export default storybookConfig;

// const storybookConfig: StorybookConfig = {
//   stories: ['../stories/**/*.stories.tsx'],
//   typescript: { reactDocgen: 'react-docgen-typescript' },
//   core: {
//     builder: 'webpack5',
//   },
//   webpackFinal: (config) => {
//     config.module?.rules?.push({
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'sass-loader'],
//       include: path.resolve(__dirname, '../'),
//     });

//     // Resolve absolute imports
//     config.resolve?.modules?.push(path.resolve(process.cwd(), 'src'));

//     return config;
//   },
// };
