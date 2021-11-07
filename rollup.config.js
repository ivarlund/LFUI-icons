import multi from '@rollup/plugin-multi-entry';
// rollup.config.js
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "rollup-plugin-typescript2"
const svgr = require('@svgr/rollup').default;
const packageJson = require("./package.json")

export default {
  // entry points
  input: ['src/react/**/*.tsx'],
  // output files
  output: [
    {
      dir: 'dist/react',
      format: "esm", // ES Modules
      sourcemap: true,
    },
  ],
  // Plugins array
  plugins: [
    multi({ entryFileName: 'index.js' }),
    peerDepsExternal(), // prevents bundling peerDependencies
    resolve(), // resolves package entrypoints
    typescript({ useTsconfigDeclarationDir: true }), // typescript
    svgr(),
  ],
}
