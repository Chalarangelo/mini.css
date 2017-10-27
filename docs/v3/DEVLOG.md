# mini.css v3 (Gluon) Development Log

# v3.0.0-alpha.1

## 20171011

- Moved all WIP to `gluon` branch, seems like the right choice.
- Initialized pages for **v3**.
- Initialized new folder structure in `src` and `dist`, moved legacy code from **v2** to `_v2` inside of `src`, so that it can be easily identified.
- Set version for the `gluon` branch to `v3.0.0-alpha.1`, should be ready for a pre-release next month at the latest.
- Started development of `core` and `default` flavor.
- Turned color palette of `core` into CSS variables to allow for customization.
- Changed native font stack to a less legacy-based one.
- Defined defaults for certain variables that were not defined in the past.
- `$_body-margin` and `$_apply-defaults-to-all` are now hidden variables, effectively hiding a layer of complexity behind them and allowing for easier customization and more streamlined defaults.
- Removed a fix for `article, aside, section, figcaption, figure, main, details, menu`, as it was IE-based. Replaced with a single fix for `details` as it could still be a bit of a problem in certain versions of Edge and Firefox.
- Removed fix for `audio, video`, as it was IE-based.
- Removed fix for `svg:not(:root)`, as it was IE-based.
- Completely removed the `dfn` fix, as it's a rarely (if ever) used element and it targets an older version of Android, meaning it's not a really meaningful fix to anyone.
- Stopped right before the headings, these will be updated and built next time.

## 20171015

- Cleaned up `docs` folder to be able to cherry pick into `master` branch for the new version documentation.
- Built up the heading elements (`h1` - `h6`), using CSS variables (`--heading-ratio` for universal heading ratio scaling).
- Added `--secondary-fore-color` for things like `small` in `h1`, which is set to `#424242`. Avoided using the term `--fore-color-lighter` as it could cause ambiguity in reverse-color-palette flavors.
- `small` elements in headings are now by defauly displayed in blocks. I haven't seen many use cases for the old style and the codebase could use the cleanup, so there's that.

## 20171018

- Added universal margin variable `--universal-margin` for an easy way to align content and elements.
- Converted all hardcoded CSS variable names to SCSS variables that are then converted into the final variables. This will allow for an extra layer of customization and help alleviate conflict problems (also allows for code minification in tiny flavor files that require variables names with simpler names).
- Added styling for `p`, `ol` and `ul`, used universal margin and applied its double to the `padding-left` of the lists, so that it is reasonably consistent. Hope this wasn't a mistake.
- Removed the `overflow: visible;` fix that was applied to `hr` for IE (legacy).
- The old *fancy style* of `hr` is now the default and only styling choice. Seems easier that way. Manual tweaking can resolve this for certain flavors.
- Added `--border-color` to use for universal border colors.
- Applied a new gradient style to `hr`, one that uses `transparent` and the `--border-color`. Hopefully, it works as expected.
- Completely remodelled the `blockquote` element, using CSS variables, a cleaner styling and some extra tricks. It should now behave better when there is no `[cite]` attribute present, improving presentation.
- After a couple hours of research on web safe monospaced fonts and fonts that are actually up-to-date, a cup of coffe and a terrible headache, I ended up with the shortest possible `font-family` native font stack for monospaced fonts for `code, pre, kbd`. The only useful article was [this](https://www.client9.com/css-system-font-stack---monospace-v1/), due to the fact that it was posted in the last year. Honestly, the last version used just `monospace`, worst-case scenario there is no improvement whatsoever, but at least I tried. Preliminary results show that this looks pretty decent on Windows.
- `box-shadow` has been dropped entirely for now, it will be added at a later time during a later alpha. For now, I want a quick and dirty solution for the most part.
- Quick and dirty `code` and `kbd` element implementation, tweaks might be required later down the line.
- `pre` element styling now has a sidebar by default and uses a CSS variable for this.
- `samp` element styling removed (at least for now).
- Tested and debugged code up to this point.

## 20171019

- Added styling for `small, sub, sup`. Their `font-size` is now tied to one variable for consistency.
- Styled links, quite simplified but should be easier to work with for now.
- Added styling for `figcaption`, tied color and size to `small`'s size for consistency.
- The revamped `core` module seems to be about `200bytes` heavier than the old one, but certain things will probably be optimized over time.

## 20171020

- Merged PR #105, upgrading aesthetics.

## 20171021

- Started working on the **Gluon** website, just to get a taste for what it will look like and get some feedback.
- *TODO* Retake picture after the splash has been tweaked, right before release.
- Tweaked the splash screen, looks a bit better now and is easier to read.
- Reverted the `hr` fix, as it caused problems.
- Moved some of the documentation from the old website to the `/docs/v3` website.

## 20171024

- Copied `grid` module from the **Fermion** branch, removed 4-step system with `xs` screen size.
- Removed legacy code from `grid`, specifically the one targeting `box-flex` (old syntax). - This trimmed the module size from `940bytes` down to `848bytes`.
- Removed legacy support for prefixed flexbox (`-webkit-`), trimmed off another `91bytes`.
- Improved indentation for `grid` module, now that prefixed code is gone.

## 20171025

- Improved the `grid` module by creating a simple `@mixin` to generate each grid step. Complexity is significantly lower now.
- Properly configured the `grid` module for defaults, without anything stored in CSS variables it now weighs a nice `750bytes`. This will probably grow ever so slightly as soon as I get to add CSS variables.
- Started using variables in `grid`, namely `--universal-padding`. Size increased only by `26bytes`.
- Made `$_include-parent-layout` a hidden variable in `grid`.
- Added scaffolding code in `grid` module, just in case someone decides to use it without any other modules.
- Oddly enough, a flavor file with the default values and clean code is `1.82KB` gzipped, compared to `1.83KB` gzipped in **Fermion**, which means the variables and changes didn't really mess up size so far. Some changes need to be made and some things added, so it's quite probable that this will not be the final number, but still I am very happy about the results so far.

## 20171027

- Changed a lot of the layout and choices made in the `index.html` page, mainly to create a better and more coherent landing page.
- Designed and added `responsive.svg`.
- Created the responsiveness and speed section.
