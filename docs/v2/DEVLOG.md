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
- Changed all header `margin`s to be `8px` left and right.
- Added `margin` for paragraphs (`1px` top and bottom and `10px` left and right).
- Specified fancy styling flag (`$horizontal-rule-fancy-style`) for `hr` elements and variable (`$horizontal-rule-fancy-gradient`) to specify linear gradient styling to be used instead of the default `border` styling. This styling supports most browsers, but does not work with IE 9- and Opera Mini. Prefix `-webkit` is added to support some browsers.
- Added variable for bold elements to set `font-weight` manually, so that no problems occur and users can fine-tweak this to their liking.
- Removed fix for `b` and `strong` as the above change addresses the issue.
- `pre` `padding` set to `12px` instead of `8px`.
- Added `overflow: auto;` to `pre` elements so that they are responsive and display properly on all devices.

## 20161014

- Added extra styling option for `small` elements in headers using a flag (`$make-header-smalltext-block`) and two variables (`$header-smalltext-b-font-size` and `$header-smalltext-b-top-margin`) to customize the styling of such elements.
- Minor changes to the way the index page looks for the version 2. Changed tagline and added version codename.
- Added github buttons under title in the index page.
- Optimized the way `small` element styling is applied in headers when it is displayed as a block.
- Added fancy styling for `pre` elements with a flag (`$add-pre-element-sidebar`) and a corresponding variable (`$pre-element-sidebar-style`).
- Added margin for `pre` elements to be in line with paragraphs.
- Changed borders for `pre` elements: left-side borders' `border-radius` is now `0`.
- Changed index, centered title etc.
- Deployed first live demo version of the framework's demo index.

## 20161015

- Updated references to `background-color` and `background-image` to use the `background` shorthand instead.
- Changed palette white from `#f9f9f9` to `#fcfcf` to pass all WCAG tests.
- Added styling for `mark` elements to serve as primary contextual elements.
- Added mixin for `mark` elements (`make-mark-alt-color`) to make variants of the `mark` element (`secondary` and `tertiary`).
- Made color palette for marks, passes all WCAG tests.
- `mark` element styling (`padding`, `margin`, `font-size`, `line-height`) implemented and optimized.
- Optimized `mark` color variant mixin.
- Tweaked values of `mark` color variants to be less strict but still pass the WCAG AA test and most other tests (sometimes they won't pass the WCAG AAA test but that's ok).
- Added mixin for `mark` elements (`make-mark-alt-style`) to make style variants (`tag` and `bubble`). Optimized.
- Added some more text to demo index.
- Deployed live demo index.
- Created svg logo.
- Added logo to demo page.
- Created favicon from logo.
- Added favicon to demo page.
