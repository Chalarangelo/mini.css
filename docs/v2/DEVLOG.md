# mini.css v2.0 Development Log

## 20161012

- Initialized pages for v2.
- Initialized `/scss/v2` directory.
- Initialized `_base.scss` partial file.
- Initialized `/flavors/v2` directory.
- Initialized `mini-default` flavor.
- Initialized `DEVLOG.md`.
- **Started developing base from [Normalize.css](https://github.com/necolas/normalize.css) v5.0.0**
  - Removed support for displaying `[hidden]` in IE 10-.
  - Removed support for the display of `template` in IE. `template` is not supported yet in IE, thus this will not make any difference, as long as the element itself is not yet supported.
  - Removed support for the display of `canvas` in IE 9-.
  - Removed styling fixes for checkboxes and radio buttons in IE 10-.
  - Kept the styling fix for `textarea` that only affects IE. It seems like it could be useful elsewhere as well. **Needs further work!**
  - Removed the `progress` styling fix for IE 9- as the element is not supported in IE 9-.
  - Kept the styling for `svg:not(:root)` although it only affects IE 9-. This is due to the fact that SVG rendering is very important.
  - Removed the `img` style fix for IE 10-.
  - Removed the fix for `audio:not([controls])` which only applies to iOS 4-7.
  - Kept the styling fix of `audio` and `video` for IE 9-, as IE 9 supports both elements.
  - *TODO* Change `mark` color to customized from flavor, override normalized default and fix.
  - Kept styling fix of `dfn` for Android 4.3-, as element is properly supported.
  - *TODO*,*UNCERTAIN* Change the `font-weight` of `b` and `strong` elements to a set number (e.g. 700) to avoid the normalize hack.
  - Kept styling fix for `abbr` in Firefox 39-, as the element is well supported.
  - Kept styling fixes for links (`a`), as they are a core element in all browsers and they should be supported well even in older browsers.
  - Removed the styling fix for `figure` for IE 8. `figure` styling will probably be built from the ground up in the core anyways, so this should not be a problem.
  - Kept styling fixes for `figure` and `figcaption` for IE 9-. These elements are supported by IE 9, but not the older versions of IE.
  - Kept the styling fixes for `article`, `aside`, `footer`, `header`, `nav` and `section` for IE 9-. Elements are only supported in IE 9.
- **Organized and cleaned the base**
  - Merged styling fixes for `article`, `aside`, `footer`, `header`, `nav` and `section` with fixes for `figure`, `figcaption` and `main`.
  - Merged styling for `kbd`, `code`, `pre` and `samp`.
- Started documenting default flavor.

## 20161013

- Started coding variables for base of the framework.
- `background-color` and `color` of `body` are going to be `#f9f9f9` and `#222` respectively (default flavor).
- Defaults for `font-family`, `font-size`, `line-height` remain the same.
- Dropped support for `ms-text-size-adjust` in the `html` element, as mobile IE is not well supported by the framework in general.
- Added `apply-defaults-to-all` flag to apply fonts and styles to all elements except `html`, setting fonts and sizes for the whole document properly.
- Set basic styles for headers.
- Change to the color of `small` elements in headers from `#555` to `#444`.
- Built styling for horizontal rules, fixes apply as before.
- `hr` elements get a margin for left and right (`4px`). This is a design decision for the flavor.
- `hr` top and bottom margins changed to `0.5em` from `0.7em`.
- Removed the `font-size: 1em` for the code elements (`code`, `pre`, `kbd`, `samp`) as they should normally be styled using the first style that applies to `html` and all elements. **Highly suggested to use `$apply-defaults-to-all:	true;` always.**
- Added variables for `code`, `pre`, `kbd`, `samp` and a flag for `samp` (`$style-samp-element`) to make sure that no unnecessary styles are added if the `samp` element is not to be used by the developer.
- Added conditions to make sure the least amount of code is used and no defaults are redefined when styling `code`. `kbd`, `samp` and `pre`.
- Changed padding of `pre` elements to `6px` and later to `8px`. Changed color for `hr` to `#666` and later to `#888`.
- Styling and optimization for `small`, `sub` and `sup` elements.
- Changed `font-size` of `small`, `sub` and `sup` elements to `75%`.