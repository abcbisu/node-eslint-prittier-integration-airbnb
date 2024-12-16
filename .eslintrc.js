module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["prettier"],
  rules: {
    //   "linebreak-style": "off",
    "no-console": "off", // Allow `console.log` statements
    "consistent-return": "off", // Example: Adjust to your team's practices
    "no-underscore-dangle": ["error", { allow: ["_id"] }], // Example: Allow MongoDB's `_id`
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
