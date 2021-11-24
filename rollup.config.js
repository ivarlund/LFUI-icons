import multi from '@rollup/plugin-multi-entry';
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
const svgr = require('@svgr/rollup').default;

export default {
  input: ['src/react/**/*.tsx'],
  output: [
    {
      dir: 'dist/react',
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    multi({ entryFileName: 'index.js' }),
    peerDepsExternal(), // prevents bundling peerDependencies
    resolve(), // resolves package entrypoints
    typescript({ useTsconfigDeclarationDir: true }), // typescript
    svgr(),
  ],
}
