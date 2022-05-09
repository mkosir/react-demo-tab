import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
//@ts-ignore types package is broken - https://www.npmjs.com/package/@types/rollup-plugin-size-snapshot
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import packageJson from './package.json';
import tsConfig from './tsconfig.base.json';

const isProduction = process.env.NODE_ENV === 'production';

const inputFile = 'src/index.ts';

const rollupConfig = defineConfig([
  {
    input: inputFile,
    output: [
      {
        file: packageJson.main,
        name: packageJson.name,
        format: 'umd',
        sourcemap: !isProduction,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-tabs': 'react-tabs',
          'react-syntax-highlighter': 'react-syntax-highlighter',
          '@rehooks/local-storage': '@rehooks/local-storage',
        },
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction,
      },
    ],
    plugins: [
      sizeSnapshot({ matchSnapshot: Boolean(process.env.MATCH_SNAPSHOT) }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.prod.json',
      }),
      terser({
        output: { comments: false },
        compress: {
          pure_getters: true,
        },
        toplevel: true,
      }),
      image(),
      visualizer({
        filename: 'bundle-analysis.html',
        title: `${packageJson.name} - Rollup Visualizer`,
        open: false,
      }),
    ],
    external: [
      // Ensure dependencies are not bundled with the library
      ...Object.keys(packageJson.peerDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
      'react-tabs/style/react-tabs.css',
    ],
  },
  {
    input: inputFile,
    output: { file: packageJson.types, format: 'esm' },
    plugins: [
      dts({
        compilerOptions: {
          baseUrl: tsConfig.compilerOptions.baseUrl,
          paths: tsConfig.compilerOptions.paths,
        },
      }),
    ],
    external: ['react-tabs/style/react-tabs.css'],
  },
]);

// eslint-disable-next-line
export default rollupConfig;
