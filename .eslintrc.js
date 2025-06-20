#!/usr/bin/env node
// .eslintrc.js

/**
 * The ESLint + Prettier config from Kipras <kipras@kipras.org> (https://kipras.org)
 *
 * Supports TypeScript!
 * (
 *   https://javascriptplayground.com/typescript-eslint/
 * & https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 * )
 *
 */

// This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: [
		"airbnb",
		"eslint:recommended",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:monorepo/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser", // babel-eslint
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			impliedStrict: true,
			classes: true,
		},
	},
	env: {
		browser: true,
		node: true,
		jquery: true,
		jest: true,
	},
	rules: {
		/** typescript-specific */
		"@typescript-eslint/no-inferrable-types": 0,
		"@typescript-eslint/no-use-before-define": 0 /** allow `const foo = require("bar");` in typescript */,
		"@typescript-eslint/consistent-type-assertions": 0 /** allow let a: T = <T>"something of type T" */,
		"@typescript-eslint/no-empty-function": 1,
		"@typescript-eslint/no-empty-interface": 1,
		"@typescript-eslint/ban-ts-comment": 1,
		"@typescript-eslint/interface-name-prefix": 0 /** it's suggested in the typescript's own codebase, but not in general projects */,
		"@typescript-eslint/camelcase": 0,
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-angle-bracket-type-assertion": 0, // is way more useful at times
		"@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/no-non-null-assertion": 0, // sometimes useful escape hatch
		"@typescript-eslint/no-unused-vars": 2,

		/** end typescript-specific */

		/** flow-specific */
		"flowtype/no-types-missing-file-annotation": 0,
		"flowtype/space-after-type-colon": 0,

		/** end flow-specific */

		/** disabled because conflicts with prettier's indent. */
		indent: [0, "tab"],

		/** disable meh stuff */

		"no-debugger": 0,
		"no-alert": 0,
		"no-await-in-loop": 0,
		"no-plusplus": 0,
		"no-continue": 0,
		"eslint-disable max-classes-per-file": 0,
		"eslint-disable lines-between-class-members": 0,
		"no-nested-ternary": 0,
		"no-return-await": 0,
		"prefer-template": 0,
		"no-whitespace-before-property": 1,
		"no-empty-pattern": 0,
		"no-use-before-define": 0,
		"no-void": 0,
		camelcase: 0,

		/** end disable meh stuff */

		"no-return-assign": ["error", "except-parens"],
		"no-restricted-syntax": [2, "ForInStatement", "LabeledStatement", "WithStatement"],
		// conflicts with @typescript-eslint/no-unused-vars
		"no-unused-vars": [
			0,
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: "res|next|^err",
			},
		],
		"prefer-const": [
			"error",
			{
				destructuring: "all",
			},
		],
		"arrow-body-style": [2, "as-needed"],
		"no-unused-expressions": [
			2,
			{
				allowTaggedTemplates: true,
			},
		],
		"no-param-reassign": [
			1,
			{
				props: false,
			},
		],
		"no-console": 0,
		"import/prefer-default-export": 0,
		import: 0,
		"func-names": 0,
		"space-before-function-paren": 0,
		"comma-dangle": 0,
		"max-len": 0,
		"import/extensions": 0,
		"import/no-import-module-exports": 0,
		"no-underscore-dangle": 0,
		"consistent-return": 0,
		"react/display-name": 1,
		"react/no-array-index-key": 0,
		"react/react-in-jsx-scope": 0,
		"react/prefer-stateless-function": 0,
		"react/forbid-prop-types": 0,
		"react/prop-types": 0,
		"react/no-unescaped-entities": 0,
		"jsx-a11y/accessible-emoji": 0,
		"react/require-default-props": 0,
		"react/jsx-props-no-spreading": 0,
		"react/jsx-no-target-blank": 0,
		"react/button-has-type": 1,
		"react/function-component-definition": 0,
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
		],
		radix: 0,
		"no-shadow": [
			2,
			{
				hoist: "all",
				allow: ["resolve", "reject", "done", "next", "err", "error"],
			},
		],
		quotes: [
			2,
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		semi: [2, "always"],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				singleQuote: false,
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				arrowParens: "always",
				breakBeforeElse: true,
				disableLanguages: [],
				flattenTernaries: true,
				proseWrap: "never",
				htmlWhitespaceSensitivity: "ignore",
			},
		],
		/** https://eslint.org/docs/rules/spaced-comment */
		"spaced-comment": [
			"error",
			"always",
			{
				line: { markers: ["*package", "!", "/", ",", "="] },
				block: {
					balanced: true,
					markers: ["*package", "!", ",", ":", "::", "flow-include"],
					exceptions: ["*"],
				},
			},
		],
		"jsx-a11y/href-no-hash": "off",
		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				aspects: ["invalidHref"],
			},
		],
		"jsx-a11y/no-noninteractive-element-interactions": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
	},
	plugins: [
		"html",
		"prettier",
		"react-hooks",
		"@typescript-eslint/eslint-plugin",
		"clean-regex" /** https://github.com/RunDevelopment/eslint-plugin-clean-regex */,
	],
	overrides: [
		/** set parser to js for js files */
		{
			files: ["*.[mj]sx?"],
			parser: "esprima" /** leggo typescript! */,
		},

		/** properly handle `yaml` (must) and optionally `md` files */
		{
			files: ["*.yaml", ".yml", "*.md"],
			rules: {
				indent: ["error", 2],
			},
		},
	],
};
