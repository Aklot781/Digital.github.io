import eslintConfig from "@delement/eslint-config-master";

export default [
  ...eslintConfig,
  {
    rules: {
      "semi": [ "error", "always" ],
    },
  },
];
