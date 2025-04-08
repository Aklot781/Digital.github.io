module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [ "eslint:recommended", "@delement/eslint-config-master" ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-console": "warn",
    semi: [ "error", "always" ],
    indent: [ "error", 2 ],
    "no-multiple-empty-lines": [ "error", { max: 1 } ],
    "space-in-brackets": [ "error", { before: false, after: true } ],
  },
};
