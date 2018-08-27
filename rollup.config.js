
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  sourcemap: true,
  output: [
    {
      format: 'umd',
      name: 'Tofu',
      file: 'build/index.js',
    },
    {
      format: 'es',
      file: 'build/index.module.js',
    },
  ],
  plugins: [
    resolve(),
    babel({
      // exclude: 'node_modules/**', // direct dependencies three.interaction source code from node_modules
    }),
  ],
  extend: true,
  external: [ 'three', 'tofu.js' ],
  globals: {
    three: 'THREE',
    'tofu.js': 'Tofu',
  },
  watch: {
    exclude: [ 'node_modules/**' ],
  },
};
