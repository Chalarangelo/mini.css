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
- Changed color palette to use material colors for primary, secondary and tertiary, passes most tests (usually is ok in almost 100% of cases).
- Updated page to test `mark` in headers.
- Deployed live version with updated tags.


## 20161019

- More fiddling with palettes. Tried to update colors to material design: `body` `color` is now `#212121`. `body` `background` is now `#fafafa`. `small` inside header `color` is now `#424242`. Codeblock `background` is now `#e0e0e0` and `pre` sidebar `border-color` is `#1565c0`. `mark` `background`s changed to `#0277bd`, `#f44336` and `#558b2f` respectively.
- Added `display: inline-block` to `mark` alternate styles, to avoid splitting of the element into smaller parts (e.g. broken pills).
- Started styling links. `a` `color` will be `#0277bd` normally.
- Added `background` property to `a` in order to apply underlining using image.
- Added flag for `a` `text-decoration:underline` (`$apply-link-underline`) and checks/optimizations for `font-weight`.
- Removed fixes from Normalize about `a` elements, as they were opinionated and unnecessary.
- Added flag for `a` using fancy `:hover` and other focused effects instead of `color` (`$apply-link-hover-fade`).
- Opened issue for module restructure (#14).
- Module restructure based on issue #14 (partial for whatever work was already done):
  - Renamed `_base.scss` to `_core.scss` and created folder for submodules (`mini-core`).
  - Created `_contextual.scss` for `mark` styling.
  - Comments and sections for core.
- Changed import in flavor, imported contextual in core.
- Corrected and finalized display of `abbr` elements with a `title` attribute: Border fix for older Firefox version was kept, dropped some styling for the underline, underline will now always be normal `text-decoration: underline` on all browsers (opinionated).
- Kept display fix for `audio` and `video` for IE 9, as the elements are supported, moved to top of head.
- Added flag (`$include-dfn-fix`) to enable/disable the fix of `dfn` element on older Android versions based on user preference.
- Disabled said flag, due to hope that when this framework releases, there will be too few people using said older Android versions, so this will not be an issue. Also, `dfn` is not a very commonly used element in a lot of pages, might go unnoticed.
- Moved fix for `svg` in IE at the top.
- Added `TODO`s for other fixes.
- Updated index page, probably broke the live version for a while.

## 20161020

- Added some more comments for enabling and disabling modules from core.
- Browser-specific prefixed properties will now precede unprefixed ones. Changes have been applied.
- Started styling `progress` bars in `mini-core/progess`.
- Since CSS3 transitions are supported unprefixed a lot and mostly older browsers use prefixes, no prefixed versions will be added. Apart from that, if the transitions do not play on older browsers, there will be no significant changes, meaning the experience will be less rich but functionally the same.
- `progress` background set to `#f5f5f5` to achieve a very pale shadow effect. Some users might not see that color difference but that's ok.
- `progress` foreground set to `#01579b` (dark blue from material palette).
- `progress` element tweak added to work in IE 10+. Older browsers will probably default to their original display for the element. This is on intentional (Opera Mini is also not supported).
- Changed conditions for `progress` styling, as the `[value]` attribute did not make a huge difference. Progress elements that do not have a `[value]` attribute will almost always cause trouble on some browsers, no matter what. Thus, it is suggested to set a `value="0"` if possible. Otherwise, Javascript shall be used.
- Opened [question on StackOverflow](http://stackoverflow.com/questions/40149311/transition-for-progress-element-on-value-change) about transitions for progress bars.
- Added mixin for `progress` bars that are inline `make-progress-inline` and used it to create `inline` class for `progress` elements.
- Opinionated `vertical-aling: middle` for said mixin and `display: inline-block` to make sure everything works according to what it should.
- `width` of said mixin's result is specified in `em` (`20em` specifically) to make sure it will work well on all screen and is dependent on text.
- Optimized inline `progress` mixin.
- Added condition for `progress` margin to optimize for `0`.
- Created mixin for color variants of `progress` (`make-progress-alt-color`) and added style imports for `secondary` and `tertiary` elements. Optimized.
- Used slightly different colors from `mark` variatns for `progress` color variants (all material).
- Created mixin `make-progress-alt-style` for style variants of `progress`.
- Created `nano` variant for `progress` (nanobar progress) using above mixin.
- Documented mixins for `progress`, optimized etc.


## 20161021 (last change a bit past midnight but still counts)

- Created `mini-core/grid` for flexbox grid system.
- Opened relevant breaking changes issue (#16).
- Opened issue for `progress` element's transitions on value change.
- Started project for feature backlog on Github.
- Created basis for grid system container (fluid only) - `grid`.
- Read a lot of the spec, decided on browser support, coded the `row` basis for the grid system.
- Updated breaking changes issue with more information.
- Added some comments and moved the notes in the flavor file.
- Added set of variables for class names, prefixes, columns, breakpoints etc for grid system.
- Added definitions for extra small screen sizes, using loops etc. Optimized accordingly, tested on local demo.
- Added definitions for small screen sizes, optimized, test on local demo.
- Added definitions for medium and large screen sizes, optimized and tested locally.
- Updated grid definitions to add `$grid-column-padding` so that users can customize the padding for columns.
- Rebuilt demo page from scratch for version 2, added a lot of nice styles etc.
- Updated the edges of the favicon.
- Added grid demo on live page.
- Deployed live demo.
- Added demo docs for progress bars.
- Created `mini-core/table` to build the responsive table module.
- Reorganized variables and imports in order of importance for core and default flavor.
- Added table styling and responsiveness, made customizable etc.
- Added demo table to page, tested.
- Minor consistency reorganization in table module.
- Updated demo page, deployed live.

## 20161023

- Removed `table-layout: fixed;` from tables.
- Added `mini-core/button` and started testing button styling.
- Removed the reset for `:-moz-focusring` (`outline: 1px dotted ButtonText`) for buttons as it was unnecessary and didn't look great.
- Moved fix for `::-moz-focus-inner` to the `button` module.
- Moved generic fix for Android, iOS and Safari to `button` module.
- Removed generic styling reset for `button`, `input`, `optgroup`, `select` and `textarea` based on the fact that the styles are already applied in the first rule `html, *`.
- Split some fixes into generic and button-specific.
- Moved `::-webkit-file-upload-button` fixes to the `button` module.
- Proof-of-concept for `button` module defaults and core, file input is not styled yet (will be done via label hack).
- *TODO* Softcode the `button` module's defaults, add extra styles, classes etc.
- Deployed live demo with hardcoded buttons to test.

## 20161024

- Rebuilt grid system to work with 3 screen sizes instead of 4. Legacy system is now used only if a flag (`$use-four-step-grid`) is enabled.
- Three-step grid breakpoints tweaked to `800px` and `1080px` accordingly.
- Deployed live demo with new grid.

## 20161025

- Issue maintenance and minor changes to issue structure on Github.
- Due to implicit labeling (e.g. `<label>Name:<input></label>`) not being correctly handled by some assistive technologies, explicit labels will be used for the `file` `<input>` elements. 
- Added `$hide-file-inputs` flag to decide the styling of `file` `<input>` elements.
- Softcoded changes and optimized some things in the `button` module.
- Updated demo page.
- Added and optimized `make-button-alt-color` mixin, created `primary` color variant.
- Added `secondary` and `tertiary` button variants using the mixin. Tested colors.
- Added button overrides for links styled as buttons for `text-decoration: underline` and `&:hover { opacity: 0.75}`. Should now not give away the fact that it's a link.
- Added `make-button-alt-style` mixin, created `small` and `large` style variants.
- Added and tested an entirely custom button style that does something very different compared to the original variants. Variables and mixins included in the flavor file, but are commented out, as they are only used as a demonstration. *TODO* Add a blog post later down the line where I design a full flavor using the files etc., showcasing things like these.
- Forms module started at `mini-core/form`.
- `input` element selection is based on `not:()` selectors instead of straightforward selection as this is more compact in terms of code and allows for non-standard `input`s like `date` types to by easily styled.
- Added a list of `TODO`s in the `form` module, tried some base styling just to make sure everything works.
- Moved style links at the very top of the `<head>` of the page.
- Updated live demo with latest stylesheet (again).

## 20161026

- Added `textarea` and `select` to the `form` `input` styling.
- Added rule for `:not([type="hidden"])`.
- Added `form` element styling (hardcoded still).
- Added demo forms for inline and aligned.
- Modified `input` `background-color` from `#f5f5f5` to `#fafafa`. Changed `background-color` to `background`.

## 20161030

- Opened issue about certain `input` elements.
- Dropped styling for `range` and `color` `input`s.
- Changed form styling a little bit (hardcoded).
- Added styling for `placeholder`s.
- Defined styles for `fieldset`, `legend` and custom class for `input` and `label` grouping (`input-group`).
- Added variables for `form` styling.
- Softcoded most of the stuff for `form` styling.
- Tested `form` styling thoroughly and optimized code.
- Moved fixes from `core` to `form` module for most of the `form` elements (except `search`).
- Deployed updated live page.
- Decided to avoid styling `search` `input` `type`s, due to lack of support for magnifying lens icon for most search inputs. Generally speaking this can easily be added by the user.
- Reorganized the loading order of modules in `core`.
- Added `search` fixes to `form` module.
- *DESIGN DECISION* To deal with accessibility concerns and the very "hacky" way navigation was implemented in the previous version, the following design decisions have been made.
  1. The top menu will be based around the `header` element and will not be able to do `display: fixed`. This will allow content over the fold to appear when important content exists in the menu. Space for a logo and some additional things will be added there.
  2. `nav` will be used as a vertical menu, not `fixed`, that will display any navigational content as required by the user. This is the traditional navigation menu. It will be embeddable in a grid column left or right based on user preference.
  3. Dropdown components will be removed, as the top bar does not need them to work properly and the side bar can be toggled with code.
  4. Sidebar collapsing will not be added as a checkbox hack anymore, but users will be able to use Javascript for that.
  5. An example of Javascript will be added for said collapse.
- All `checkbox` and `radio` elements will be `display: none` by default. Grouping one in an `input-group` with a `label` will give the desired style to the label.
- Created module `mini-core/checkbox`.
- Started styling `checkbox`es and `radio` buttons. Got most of the styling done, hardcoded.
- Updated demo again.

## 20161102

- Updated `checkbox` and `radio` styles for accesibility. Now they are visible to screen readers.
- Added style for `:hover`, :focus`, `:active` for the `label` elements of the `checkbox` module.
- Added `tabindex` marks for labels in the `checkbox` module demo.
- Added styling for `readonly` and `disabled` for `checkbox` module.
- Updated `checkbox` module and added variables.
- Added issue for flag `use-checkbox-tick-mark` to allow for one of two styles for `checkboxes` and variables according to that. Implementation pending for **v2.1** or similar.
- Minor updates to `button` and `form` for CSS consistencies.
- Added variables for `checkbox` module, optimized a little bit. (Some optimizations do not make sense, like no-border checkboxes and radio buttons, so I omitted them for this reason).
- Added edge case for tabbing to checkbox for `focus`, which will make the `label`'s box `border` glow to the blue-ish shade usually used.
- Removed `readonly` styling for `checkbox` and `radio` as it does not work due to technicalities.
- Updated demo page for `checkbox` module.
- Created `mini-core/navigation` for the navigational components.
- Cleanup in `core`, moved fixes for navigational to proper file, moved leftover fixes to their proper place.
- Added responsiveness for `img`.
- Updated demo page for `checkbox` module.
- Changed `inline` `progress` elements to use `vw` instead of `em`. Fixed a rare bug that would be caused due to that.
- Coded the `header` element's styling. Optimized.
- Made `header` responsive.
- Added demo for `header` element.
- Updated live page for `header`.
- *NOTE* There is some bleedthrough of styles from `button` to `navigation`, specifically for `header`. This is not a problem, but should be noted for further reference/testing etc.
- Extended testing for `header`, there seem to be no bugs.
- Deployed demo page with `header`.
- Added simple styling for `nav`. Created iteration builder for `sublink` and categories tree.
- Tested and optimized `nav`, added demo to `index`.
- Deployed demo page again.
- Added styling and variables for `footer`.
- Changed optimization for links in `footer` and `nav` to not distinguish between `:visited` links and normal ones, style needed reapplication.
- Tested `footer` component styling.
- Added `footer` to the demo page.
- Changed demo page structure to follow the ordering of modules in `core`.
- Tweaked `progress` `inline` to `60vw` instead of `80vw`, should fit more screens properly.
- Added a heading for the `utility` module section in demo page.
- Deployed demo page yet again.
- Created `mini-core/utility` for utilities and helper classes.
- Copied almost verbatim the mixins from *v1* for `make-border-generic` and `make-border-radial-style`. Added variables and calls for mixins in flavor.
- Copied and tweaked `make-breadcrumbs` mixin from *v1*'s extras.
- Changed the way `breacrumbs` are built (use some `em`-based `padding` now instead of some whitespaces).
- Dropped mixin for `make-btn-group`, opened issue (#23) to later build it.
- Added utility mixin `make-hidden` from *v1*, exactly the same.
- Added new utility mixin `make-visually-hidden` for accessible elements that are visually hidden.
- Added `make-floats` and `make-center-block` mixins along with `make-clearfix` mixin from *v1*.
- Explained utilities in demo page.
- Deployed demo page with utilities docs.
- Started developing `shell`. Added `shell` file and `mini-shell/card` file for the `card` module.
- Actually deleted `shell` file, moved everything to `core` file, renamed to `_mini.scss`.
- Played around with `card`s a little bit, got a few basic ideas down, tested centering in `row`, not worthwhile.
- Some minor styling for cards has been done, lots of work needed still.

## 20161103

- Added some more info in issue #16 about breaking changes and cards etc.
- Added the proper features needed for media inside `card`s, images and other parts named as media will respond as required and images will resize and center properly. This, in turn broke support for certain browsers.
- Added flexbox properties to cards to `align-self` and `justify-content` so that contents and containers will display properly.
- Created `large` and `small` variants for `card`s.
- Optimized `card`s and added variables etc.
- Tested cards, seem to work properly.
- Minor restructure of `utility` for consistency and such.
- Created mixin `make-card-section-alt-color` for alternate background `card` `section`s. Added a couple of variants just for fluff.
- Opened issue for more mixins to be added to `card` module later.
- Deployed live page.


## 20161104

- Added mixin `make-card-alt-color` to `card` module. Supplied an example of a different card (`primary`).
- Added mixin `make-card-alt-size` for `card` sizes.
- Changed `card`'s `small` and `large` to use above mixin.
- Added `fluid` for `card`s.
- Fixed a bug with `fluid` `card`s, the new optimization and checking routine should work for all percentage-based values.
- Updated demo a little bit to showcase all of the new features of `card`s.
- For consistency reasons (inconsistent `margin`s might cause problems with `card`s of different types), there is no choice to change the `margin` of customized `card`s through via mixin.
- Created mixin `make-card-section-alt-style`, added `double-padded` style to add twice the `padding` to sections.
- Deployed updated demo page.
- Added a new mixin `add-grid-row-cards-alignment` without parameters that allows `row`s to align the elements they contain automatically horizontally.
- Deployed demo again.

## 20161109

- Changed `checkbox` module a little bit to use `floor()` functions to fill the `:after` part, so that everything will look kinda tidier on most browsers. This has been modified after testing on more screens and noticing some minor discrepancies with the way `radio`s are presented.
- Created `mini-shell/accordion` for the `accordion/collapse` module (`accordion` from now on).
- Started styling the `accordion` component.
- *DESIGN DECISION* The `accordion` component will be used both for single collapses and multiple ones.
- Added accessibility to `accordion` component.
- Tweaked the way the `accordion` works to use `transform: scaleY()` so that the `transition` will work with it. Using `height` did not work due to the value of `auto` when content was shown.
- Fixed bug with `clip` and `clip-path` in Chrome for `accordion` module.
- Changed the way `accordion` works to use variables. Optimized code.
- Added demo for `accordion` to the `index` page.
- Tweaked values and colors of `accordion`. Tested in both Chrome and Firefox.
- Added support for `-webkit-` prefix for `transform` to support some browsers.
- Updated demo page for `accordion` with `radio`s as well.
- Added a small section about `tab`s and `carousel`s, just to allow me to test presentation a bit more.
- Deployed demo page with `accordion` demo.
- Added `mini-shell/tab` and `mini-shell/spinner` for the `tab` and `spinner` modules accordingly.
- Created `spinner-dot` class and custom-tailored the `spinner` for that. *NOTE* This spinner does not work perfectly fine with many elements, some tweaking might be required.
- Created `spinner-donut` class and made styling for that `spinner`.
- Added mixin `make-spinner-donut-alt-color` to allow for custom `spinner` styles. No optimizations are applied to this mixin, due to the fact that overwriting the background might cause trouble with the foreground etc.
- Optimized and softcoded most of the `spinner` module's stuff.