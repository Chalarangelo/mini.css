# mini.css v2.1.0
## A minimal, responsive, style-agnostic CSS toolkit

![Logo](/docs/page_thumb.PNG)

**mini.css** is a tiny CSS toolkit (under 7KB gzipped) that works well on most modern browsers and devices and allows you to customize it quickly and easily. It's written in Sass and tries to make use of HTML5 semantics and modern patterns to deal with common web design problems. You can learn all about using it, its modules and components, as well as see a live demo [here](https://chalarangelo.github.io/mini.css/).

## Setup

**mini.css** is available in both NPM and Bower:

    npm install mini.css

    bower install mini.css


To try out **mini.css** using the default flavor, copy and paste the following code inside your HTML page's `<head>` tag:

	<link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/version/dist/mini-default.min.css">

Replace `version` with a release tag (`v2.0.0` or later) from the [Releases page](https://github.com/Chalarangelo/mini.css/releases).

Alternatively, you can use one of the other [flavors](https://chalarangelo.github.io/mini.css/flavors.html). Simply replace the final part of the URL with the flavor's CSS file (minified or not) and you're good to go!

## Customization

If you want to develop your own flavor or tweak an existing one, head over to the [Customization page](https://chalarangelo.github.io/mini.css/customization.html) to get started.

## Contributing

### Flavors

To develop your own flavor:

- Fork into your own repository.
- Add a flavor file in the `src/flavors` folder by duplicating an existing file and renaming it to whatever you want to name it. **Make sure there are no naming conflicts between your flavor and any of the existing flavors**.
- Edit the flavor file as you desire.
- Submit a pull request. Please provide a brief description of your flavor and, if possible, a Codepen or some screenshots showcasing some of the styles in it.

To develop a module:

- Module contribution guidelines are very strict at the moment. New modules will only be created upon request and **should always be in a new repository**, unless they are part of a Roadmap of a later version. Please submit an issue before developing a module or asking for new modules, as the discussion of said implementations is key to deciding the direction **mini.css** will follow in the future.

To develop some other part of **mini.css**:

- Create an issue for anything else.
- If you make any changes, submit a pull request with as much information as possible about what you changed.

## Contributors

- Angelos Chalaris (@chalarangelo)
- Angeliki Daskalakis (@angiedaskalakis)
- Rory Primrose (@roryprimrose)
- Sandro Magi (@naasking)

## License

The project is licensed under the [MIT License](https://github.com/Chalarangelo/mini.css/blob/master/LICENSE).
