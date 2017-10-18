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
