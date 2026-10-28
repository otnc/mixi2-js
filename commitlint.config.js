export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Dependabot titles with long package names can exceed the default 72 characters.
    "header-max-length": [2, "always", 100],
    "body-max-line-length": [0],
    "footer-max-line-length": [0],
  },
};
