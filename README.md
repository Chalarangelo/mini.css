# mini.css
A minimal, responsive, style-agnostic CSS framework

[![npm](https://img.shields.io/npm/v/mini.css.svg)](https://www.npmjs.com/package/mini.css)
[![license](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/Chalarangelo/mini.css/blob/master/LICENSE)
[![website](https://img.shields.io/badge/website-online-green.svg)](https://chalarangelo.github.io/mini.css/)

![Logo](/docs/page_thumb.png)

**mini.css** is a lightweight CSS framework (under 7KB gzipped) designed with mobile devices and modern browsers in mind. Responsiveness, ease of use and customization are some of the main features of the framework, while accessibility and extensive documentation are some of the secondary focuses of the project. The framework is written using Sass, while most of its components are based on Flexbox.

## Setup & usage

You have 4 options when it comes to setting up **mini.css**:

1. [Use a package manager](#method-1-use-a-package-manager-recommended) (recommended)
2. [Use GitCDN](#method-2-use-gitcdn)
3. [Use Rawgit](#method-3-use-rawgit)
4. [Use cdnjs](#method-4-use-cdnjs-preferred-for-older-releases) (preferred for older releases)

For instructions on how to use, best practices, templates and other usage information, please visit the framework's [documentation](https://chalarangelo.github.io/mini.css/modules.html).

#### Method 1: Use a package manager (recommended)

1. Install **mini.css** using `npm`, `yarn` or `bower`.
```
npm install mini.css
yarn add mini.css
bower install mini.css
```
2. Pick one of the available [flavors](https://chalarangelo.github.io/mini.css/flavors.html) and use its CSS file.

3. Start working on your project. Detailed documentation is available on the framework's [website](https://chalarangelo.github.io/mini.css/modules.html), so be sure to check it out.

#### Method 2: Use GitCDN

**mini.css** is also hosted on [GitCDN](http://gitcdn.link/), an open-source service, so you can easily grab the latest release's distributables. Simply link to your preferred flavor inside your HTML page's `<head>` tag:
```html
<link rel="stylesheet" href="https://gitcdn.link/repo/Chalarangelo/mini.css/master/dist/{mini-flavor}.css" />
```

Remember to replace `{mini-flavor}` with the flavor's name (e.g. `mini-default` or `mini-default.min` for the default flavor).

#### Method 3: Use RawGit

**mini.css** is also hosted on [RawGit](https://rawgit.com/), another open-source service, so you can easily grab a specific release's distributables. Simply link to a release and your preferred flavor inside your HTML page's `<head>` tag:
```html
<link rel="stylesheet" href="cdn.rawgit.com/Chalarangelo/mini.css/{release-tag}/dist/{mini-flavor}.css" />
```

Remember to replace ` {release-tag}` with a release from the [Releases page](https://github.com/Chalarangelo/mini.css/releases) and `{mini-flavor}` with the flavor's name (e.g. `mini-default` or `mini-default.min` for the default flavor).

#### Method 4: Use cdnjs (preferred for older releases)

If you would rather use an older version of the framework, you should head over to [cdnjs](https://cdnjs.com/libraries/mini.css) for a list of releases and flavor files supplied with them.

## Flavors & customizaton

*Flavors* are one of the key features of **mini.css**, allowing you to customize your website's design and make your project stand out. We provide you with a few pre-defined [flavors](https://chalarangelo.github.io/mini.css/flavors.html) that might suit your needs and will help you figure out how to use the framework and create websites and apps with it.

But you can easily build you own flavors by editing a flavor file and customizing almost everything. For more information, head over to the [Customization page](https://chalarangelo.github.io/mini.css/customization/index.html) and build your own flavor the way you like it.

---

## Contributing

- Have you found a bug in the framework? Do you want to request a new feature or suggest a new flavor? Maybe found some documentation that is unclear or incomplete? Open an [issue](https://github.com/Chalarangelo/mini.css/issues/new) and we will be with you shortly.

- Have you developed a new flavor and want to share it with the world? Open an [issue](https://github.com/Chalarangelo/mini.css/issues/new) about it, so that we can link to your repository from the framework's documentation and let the world know. We will try to keep you posted on any new releases coming, so that you can update your flavor as necessary.

- Have you developed a module for the framework? Well, we don't really accept new modules right now, but if it works, we will certainly tell people that it's available. Open an [issue](https://github.com/Chalarangelo/mini.css/issues/new) about it and we will figure it out together.

## Maintainers & contributors

The team behind **mini.css** is as follows:
- Angelos Chalaris ([@chalarangelo](https://github.com/Chalarangelo)) - Sass archmage, project manager

Special thanks to these fine folks for helping in the development of **mini.css**:
- Angeliki Daskalakis ([@angiedaskalakis](https://github.com/AngieDaskalakis)) - Author of the [Sucroa](https://github.com/Chalarangelo/mini.css/blob/master/dist/mini-sucroa.css) flavor
- [@tphecca](https://github.com/tphecca) - Author of the [Nord](https://github.com/Chalarangelo/mini.css/blob/master/dist/mini-nord.css) flavor
- [Per Harald Borgen](https://scrimba.com/perborgen) - Introductory video creator
- Rory Primrose ([@roryprimrose](https://github.com/roryprimrose)) - Code restructure
- Sandro Magi ([@naasking](https://github.com/naasking)) - [Multiple](https://github.com/Chalarangelo/mini.css/issues?q=is%3Aissue+author%3Anaasking) suggestions, ideas, bug reports

## License

**mini.css** is an open-source framework and is licensed under the [MIT License](https://github.com/Chalarangelo/mini.css/blob/master/LICENSE).
