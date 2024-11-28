# No-Sweat™ ESLint, Prettier and TypeScript setup

These are my settings for ESLint and Prettier

You might like them - or you might not. Don't worry you can always change them.

## What it does

- Lints JavaScript and TypeScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes inside of html script tags
- Lints + Fixes React via eslint-config-airbnb
- You can see all the [rules here](./.eslintrc.js). You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Project Install

It's recommended you install this once per every project. ESLint used to have global configs, but no longer.

1. If you don't already have a `package.json` file, create one with `yarn init -y`.

2. Then we need to install this config

```
npm install eslint-config-kiprasmel
```

4. We need to put our eslint settings in a file in the root of your project. I prefer to use our existing `package.json`, and add an `eslintConfig` property. You can also create a new `.eslintrc` or `.eslintrc.js` file that lives where package.json does:

**in package.json**, add this anywhere top level. Like right under your "scripts" object.

```json
"eslintConfig": {
	"extends": ["kiprasmel"]
}
```

Or put this in a `.eslintrc` file

```json
{
	"extends": ["kiprasmel"]
}
```

TypeScript users will also need a `tsconfig.json` file in their project.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
	"lint": "eslint .",
	"lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `yarn lint` and fix all fixable issues with `yarn lint:fix`. You probably want your editor to do this though.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```js
{
	"extends": [
		"kiprasmel"
	],
	"rules": {}
}
```

### Prettier Rules

You can put this in your ESLint config as a rule like so:

```json
{
	"extends": ["kiprasmel"],
	"rules": {
		... any eslint rules here
		"prettier/prettier": [
			"error",
			{
				"singleQuote": true,
				"endOfLine": "auto",
				"tabWidth": 4
			},
		],
	}
}
```

Note if you are switching to double quotes, you'll also need to add this eslint rule, or they will fight to the death!

```js
quotes: ["error", "double"];
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
	"editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
},
```

```json
{
	"editor.formatOnSave": true,

	"eslint.enable": true,
	"editor.codeActionsOnSave": {
		"source.fixAll": "explicit",
		"source.fixAll.eslint": "always"
	},

	"eslint.run": "onSave",
	"eslint.format.enable": true,

	"[javascript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
	"[typescript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint"
	},

	"prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
}
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With Create React App

1. Run `npx install-peerdeps --dev eslint-config-kiprasmel`
1. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "kiprasmel"`

## With Gatsby

1. Run `npx install-peerdeps --dev eslint-config-kiprasmel`
1. follow the `Local / Per Project Install` steps above

## With WSL

It should work as above.

## With JetBrains Products (IntelliJ IDEA, WebStorm, RubyMine, PyCharm, PhpStorm, etc)

If you have previously configured ESLint to run via a File Watcher, [turn that off.](https://www.jetbrains.com/help/idea/using-file-watchers.html#enableFileWatcher)

### If you choose Local / Per Project Install Above

1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (optionally just search settings for "eslint")
1. Select **Automatic ESLint Configuration**
1. Check **Run eslint --fix on save**

### If you choose Global Install

The following steps are for a typical Node / ESLint global installtion. If you have a customized setup, refer to JetBrains docs for more [ESLint Configuration Options](https://www.jetbrains.com/help/webstorm/eslint.html#ws_js_eslint_manual_configuration).

1. Open ESLint configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > ESLint (optionally just search settings for "eslint")
1. Select **Manual ESLint configuration**
1. Choose your **Node interpreter** from the detected installations
1. Select the global **ESLint package** from the dropdown
1. Leave Configuration File as **Automatic Search**
1. Check **Run eslint --fix on save**

### Ensure the Prettier plugin is disabled if installed.

1. Open Prettier configuration by going to File > Settings (Edit > Preferences on Mac) > Languages & Frameworks > Code Quality Tools > Prettier (optionally just search settings for "prettier")
1. Uncheck both **On code reformat** and **On save**
1. _Optional BUT IMPORTANT:_ If you have the Prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already.
	 1. Make sure the **Run for files** glob does not include `js,ts,jsx,tsx`.
	 2. An example glob for styles, config, and markdown. `{**/*,*}.{yml,css,sass,md}`

## With TypeScript, Yarn, Pnpm

Same instructions as above.

## Issues with ESLint not formatting code

If you experience issues with ESLint not formatting the code or you receive a `Parsing error: Cannot find module '@babel/preset-react` error message then you need to check that you opened the folder where you installed and configured ESLint directly in VS Code. The correct folder to open will be the one where you installed the `eslint-config-kiprasmel` npm package and where you created the `.eslintrc` file.

Opening a parent folder or child folder in your code editor will cause ESLint to fail in finding the ESLint npm packages and the formatting won't work.

```sh
your-username
	|
	projects
		|
		beginner-javascript # <- Open this folder directly in your code editor
			.eslintrc
			package.json
			node_modules/
			exercises/
			playground/
```

## License

[MIT](./LICENSE)
