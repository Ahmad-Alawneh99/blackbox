// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
	ignorePatterns: ["apps/**", "packages/**"],
	extends: ["@repo/eslint-config/top-level-config.json"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
	  project: true,
	},
  };
