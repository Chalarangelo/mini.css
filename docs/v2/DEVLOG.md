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
- Removed the `font-size: 1em` for the code elements (`code`, `pre`, `kbd`, `samp`) as they should normally be styled using the first style that applies to `html` and all elements. **Highly suggested to use `$apply-defaults-to-all: true;` always.**
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
- Actually deleted `shell` file, moved everything to `core` file, renamed to `mini.scss`.
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
- Tested `tab` system for a while, tried out a lot of things, hardcoded demo.
- Fixed a variable naming discrepancy with `$tab-container-name`/`$tabs-container-name`.
- Softcoded `tab` module with variables. Optimized.
- Added responsiveness to `tab` module.
- Tested `tab` module thoroughly on both Firefox and Chrome (PC), will test further on phone.
- *DESIGN DECISION* The `accordion` and collapse module will be merged with the `tab` and carousel module. This is a very well-thought out decision, based on the fact that `accordion` components behave like `stacked` `tab` components. This means that users will be forced to use a heavier module for both components (which might not be beneficial if they only wish to use the `accordion` component), however this helps users mnemonically, by allowing more functionality in one technically identical structure. The specifics of this decision are laid out below:
	1. The `stacked` class will be used for a `tabs` container, so that an `accordion` component can be easily emulated.
	2. Some of the versatility of the `accordion` class will be sacrificed to allow `stacked` `tabs` to include the same functionality. Minor changes can still be made manually.
	3. The `tabs` module will use different transformation tricks for `stacked` and normal tabs. Specifically, the responsive stacked tabs on smaller screens will use preset `height`, while `stacked` tabs will use `height: auto;`.
	4. All controls for both types of `tab`s will be hidden from screen readers to make the content accessible as-is.
	5. The old `accordion` module will be retired and possibly stored in a legacy folder. People that only want that old-school `accordion` module can use it.
	6. `stacked` `tabs` will allow both `checkbox` and `radio` `input`s, normal ones will not allow `checkbox`. This is in line with the philosophy of the two components.
	7. Carousels can still be built using any of the two styles.
	8. `stacked` `tabs` will feature their own color scheme for some things to allow more customization within the module.
	9. Both components will use a generic `:hover` effect.
	10. The `transform`s applied before to `accordion` will still apply to `stacked` `tabs`.
- Refactored code of `tabs` to work with the above decision, removed obsolete artifacts from the `accordion` module.
- Made a few minor tweaks, decided not to add `accordion`-specific styling, as the current styling is just enough.
- Edited the demo page to include most of the new functionality.
- *TODO* Move `accordion.scss` to the `legacy` folder etc.
- Deployed live demo.
- Tested on mobile, found some presentational problems.
- Minor change to the way `transition`s work for `tabs`, they will now all utilize the `transform` implementation.
- Deployed updated live demo page.
- Tested on mobile, works better.
- Minor `tabs` update for `:first-of-type` and `:last-of-type` selectors. This update should fix square top-right corners for single collapses.
- Deployed live demo.
- New module restructure: all modules will be moved to core, some merges might have to be applied (check issue #14). Restructure was applied as follows:
	- Added the functionality of the new `alert` module to `contextual`. Includes mixin `make-alert-alt-color` for different `alert` color variants.
	- Restructured folders. `mini-shell` removed, `mini-core` renamed to `mini`. `mini` is the core folder now.
	- Created branch `v1-neutrino` both locally and on Github to support legacy versions in the future. `master` is now the branch for **Fermion** only.
	- Aggressive deletion of older files. The following folder are now gone: `scss/mini`, `scss/mini-extra`, `flavors` except for the contents of the `v2` folder and the folder itself.
	- Renamed `mini.scss` to `core.scss`, moved to the `scss/v2/mini` directory.
	- Deleted `accordion` module file as it was obsolete.
	- Renamed `scss` directory to `src`. Renamed `flavors` directory to `dist`.
	- Moved flavors from their directory to the `src` directory. CSS files produced from flavor files will go to the `dist` folder, along with the minified versions.
	- *TODO* Update the `package.json` and `bower.json` files according to the new framework version.
	- Updated live demo page reference to use the new structure.

## 20161110

- Continued module restructure and cleanup as follows:
	- Code cleanup in `core`, indentation change to tabs for consistency, indentation fixes etc.
	- Started converting media queries from `only screen and ()` to plain `()`. Changes have been applied to `grid` module.
	- Code cleanup in `grid`, indentation etc.
	- Code cleanup in `table`. Media query conversions applied. Optimization.
	- Code cleanup in `form`.
	- Code cleanup in `button`. Updated `file` `input`s to be accessible.
	- Code cleanup in `checkbox`. Optimizations.
	- Restructured `form`, `button` and `checkbox` into one module: `input_control`. Made necessary changes for this to work properly.
	- Code cleanup in `progress`. Merged `spinner` into `progress`. Removed `spinner-dot` from the `spinner` module as it was not a great component.
	- Code cleanup for `contextual`. Minor `mark` optimizations. Added `alert` mixin `make-alert-alt-style` for alternative `alert` styles.
	- Removed `spinner` file.
	- Cleanup for `navigation`.
	- Cleanup for `utility`.
	- Cleanup for `card`. Changed loading order and variables to better reflect the new module system. Updated media queries.
	- Cleanup for `tab`, updated media queries.
- Deployed live demo after cleanup.
- Added modular `box-shadow` to `card`s.
- Added modular `box-shadow` for `pre`, `code`, `kbd` and `mark`.
- Added `border-style` and `border-radius` to `mark` contextual defaults.
- Changed `padding` of `mark` elements.
- Added modular `box-shadow` to `alert`s.
- Added modular `box-shadow` for `form`, decided not to add for `fieldset` due to the way it displays and how it sort of clashes with the ideas of material design.
- Added modular `box-shadow` for `button` and button-like elements.
- Added modular `box-shadow` for `header` decided not to add for `nav` and `footer`.
- Added modular `box-shadow` for `progress` element.
- Added modular `box-shadow` for `table` element. Tweaked to be responsive on smaller screens.
- Added modular `box-shadow` for `tabs` container. This might have some minor problems with `border-radius`es.
- Added flexbox-based `button-group` system. Added responsiveness to it and optimized accordingly.
- Deployed live demo with new features.

## 20161111

- Rebuilt `breadcrumbs` from scratch. Uses flexbox.
- Changed `clearfix`, `center-block`, `hidden` and `visually-hidden` from mixins to normal components.
- Changed the appearance of `button-group`, it will now use `border` and `border-radius` more creatively to get rid of unnecessary and excessive styling.
- Added mixin `make-box-shadow-generic` in `utility`, used it to create a class for `box-shadow:none;` just in case.
- Added mixin in `progress` `make-spinner-donut-alt-style` for `spinner-donut` and created `large` variant with it.
- Added extra variables and styles for `grid` reordeing for `first`, `last` and `normal` (reset).
- Deployed demo page.
- Squashed a couple of bugs in header caused by `button` elements and button-likes using `box-shadow` and/or `border`/`border-style`.
- Renamed `index.html` from `v2` to `demo.html`.
- Created `template.html` as an empty template for pages for the framework's demo pages.
- Created new `index.html` as introduction page. Bare minimum content added.
- Added some custom styling for the cards in `index`.
- Changed the `border-radius` of `card`s to `0`.
- Deployed new live demo page.
- Fixed a mixup bug with `header` and `heading`. All the `hX` elements now use `heading` instead of `header` to deal with that problem.
- Slightly tweaked the `margin`s and stuff of `p` and `hX` elements.
- Added file size comparison between toolkits.
- Updated `table` `border-radius`es.
- Deployed live demo with fixes etc.
- Added a module list and browser support to the `index` page.

## 20161113

- Added `docs/v2/playground.html` to more extensively test some of the components, especially `card`s and more specifically `fluid` ones.
- Added the fix for `fluid` `card`s using `width: auto;` which was supposed to solve some issues (see #31).
- Figured out a new design paradigm for `fluid` `card`s inside `col-` elements: if two separate `div` containers are used, no `card` "spilling" is observed. This could be either a temporary or a permanent solution depending on the complexity of the real issue at hand. However **Fermion** can initially release like this, as the issue is considered controlled and stable for now.
- Removed the old fix from the `index` page, updated as needed.
- Removed a typo in the index page that read `Reponsive`.
- Figured out a good enough solution for the `fluid` `card` problem.
- Pushed the urgent `fluid` `card` fix to all deployed pages.
- Removed the `playground` page as its purpose was fulfilled.
- Closed issue #31 for good.
- Squashed another major bug in the `make-card-alt-size` mixin, stemming from the use of the conditions and logical operators in that. The issue was thoroughly tested and resolved for all cases. `&&` was replaced with `and` in said condition combination.
- Tested some minor color issues with the page's background color and the cards' background color. Made some adjustments, uncertain if I will keep them.
- Added `$table-body-back-color`, `$table-body-fore-color` and `$table-head-fore-color` in addition to the existing `$table-head-back-color` and optimized them accordingly.
- *TODO* Some minor changes to `.button-group` might be needed (button shadows overlapping and existing, the extra border etc.).

## 20161114

- Added the basic setup instructions in the `index` page.
- Added a few links for getting started in the `index` page. Page is complete for now.
- Minor updates to resources, description, title etc, updated `template` as well.
- Added links for the rest of the docs.
- Added browser logos to the table of `index`.

## 20161115

- Fixed `Reponsive` in `index`...
- Tested `table` `horizontal` layout with flexbox.

## 20161116

- Created `modules.html` page, added content.
- Bumped FontAwesome to v4.7.0 as some icons I used were from that version.

## 20161117

- Started writing `core.html` page.
- Added basic info in `core` page and info on headings.
- Minor changes in `core` module formatting.
- Added `core` documentation for common textual elements.
- Updated stylesheet reference to the latest changes for live pages.

## 20161119

- Started writing `grid.html` page.
- Added basic info for grid, set layout for the page, checked styles - they're all good for grid.
- Added layout demo showcase for the screen specific layouts.


## 20161121

- Changed `grid` breakpoints to `768px` and `1280px` accordingly to better support different resolutions.
- Updated `$button-group-mobile-breakpoint` to `767px` so that it will break on resolutions under `768px` instead of including `768px`.
- Same update for `$table-mobile-breakpoint` to `767px`.
- Updated `grid.html` documentation to reflect the latest changes.
- Updated all demo pages with latest reference to css file.
- Added dos and don'ts in the grid page under the first section.
- Added screen-specific layouts in the `grid.html` doc page.
- Added offsets to the `grid.html` doc page.
- Added reordering to the `grid.html` doc page, `grid` documentation finished - some polishing might still be required.
- Added a rule for `fluid` `card`s inside `col-` elements, allowing the side margins to disappear at the edges of the grid, allowing for better content viewing on mobile. Only for the demo, not in the actual toolkit.
- Changed the value of `$tab-stacked-breakpoint` to	`767px` in line with above changes.
- Added `th` to the accessible hiding rule in the `table` module as a safeguard for different things.
- Heavily edited the `table` module. Desktop view now includes whole ruleset inside the `table` element, so no leaks will happen. Did the same for the responsive part of the module.
- Added support for horizontal and non-responsive tables in the `table` module. Added lots of new variables and rules as needed.
- Tested new `table` module functionality thoroughly. Everything seems to work like a charm, even if the implementation is a little bit fiddly due to flexbox playing some tricks.
- Updated a few colors for consistency.
- Added support for `striped` `table`s in the `table` module. Updated accordingly with variables and the likes.
- Added responsiveness for `striped` `table`s.
- Updated stylesheet references for all live pages.
- Fixed typos and proofread the `grid` documentation page.
- Added sample `hr` to the `core` documentation page.

## 20161122

- Added side `padding` to the `horizontal` `table`s.
- Fixed the way `th` elements display on `vertical` `table`s that contain `th` elements inside the `tbody` by adding a semi-specific rule for the `thead` `th` elements. More specificity caused problems.
- Tested `table` module changes on mobile, Firefox and Chrome.
- Created `navigation.html`.
- Added basic info for `navigation` doc page.
- Added basic structure for `navigation` doc page.
- Added samples for `header`, `nav` and `footer` in the `navigation` doc page.
- Added `box-shadow` to the `nav` element to be in line with the rest of the design. Added a `border`, too.
- Tweaked colors and values of other things in the `navigation` module's variables in the flavor file.
- Updated `navigation` module with optimization and borders.
- Updated all `box-shadow` variable checks to test for `none` instead of `0` as that is the proper syntax used for no shadows. This will help with user-friendliness in customization.
- Added some extra styling to the `header` component, allowing `span` elements to be used as separators between links.
- Added defaults to header at the very top.
- Added description for the `header` component in the `navigation` doc page.
- Added description for the `nav` component in the `navigation` doc page.
- Added `footer` documentation in the `navigation` doc page. Finished the page.

## 20161124

- Created `docs/v2/progress.html` doc page for `progress` module.
- Added variable `$progress-max-value` for the arithmetic max value of the `progress` elements, changed to `1000` from original default `100`.
- Made some minor tweaks to the `progress` module and component.
- Opened a question on SO about the `progress` element's `margin-right`: http://stackoverflow.com/questions/40795218/progress-element-does-not-respect-right-margin
- Wrote the basic information for the `progress` module on the doc page.

## 20161125

- Added high-tech feature queries for `progress` elements and variants, `margin` and `width` should now work properly. Tested in Firefox and Chrome.
- Updated demo pages with latest build.
- Tweaks in the `core` module to use a `px`-based root in the `html` element.
- Tweaks in the `core` module to use the "native font stack" - See here: https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/
- Documented basic `progress` module's `progress` element structure.
- Added `spinner` support for older `webkit`-based browsers.
- Added variables and styling for `ol` and `ul` lists in the `core` module after realising I forgot to style these elements and having found a bit of a styling discrepancy.
- Updated `core` documentation page to reflect list changes.
- Made some tweaks in the `utility` module to make `breadcrumbs` work as before.
- Added `progress` variant section in the `progress` module's doc page.
- Updated `index` to reflect the minor bloating of the files that has occured lately. Shame, really.
- Completed documentation for `progress` module.

## 20161126

- Tweaks and additions to the `contextual` module. `alert`s should now have the proper mixins, `mark` has an extra class for `inline-block` and `mark` mixins have been updated to incorporate shadows.
- Contextual testing in `playground`.
- Updated `progress` module mixin to use `box-shadow` if available.
- Removed `max-width: 100%` from the `alert` component as it was not needed due to `display: block;`.
- Updated transitions to use `-webkit-` prefix as needed.
- Added animated `alert`s on condition.
- Documented basic `mark` behavior and stuff.
- Basic documentation for `alert`s.
- Documented `animated` `alert`s. Documentation of `contextual` seems to be complete.
- Added `card` doc page.
- Added some basic info on `card`s in doc page.
- Updated basic documentation for `card` module in doc page.
- Updated some mixins in the `card` module.
- Tested video embedding in `card`s and it works!
- Added some information and demos about `card` `section`s.
- Changed values for some `card` module variables used in mixins.
- Fully documented `card` module.
- Updated `img` responsiveness in `core` to use `max-width` instead of `width`.
- Added documentation for responsive `img` and general typography rules in the `core` doc page.
- Deployed latest demo CSS file.
- Deleted `template.html` as I never actually used it.
- Deleted parts of `playground.html` to reflect documented modules.

## 20161128

- Updated the `card` doc page to include some technical info about the `object-fit` usage. Polyfills should help with the problems.
- Started the `table` doc page.
- Made `alert`s not have rounded corners.
- Added some base info on `table` module doc page and a basic example.
- Full documentation for `table` module.
- Updated all doc pages to use **2 spaces** per indentation.

## 20161205

- `playground` cleanup, readying for the rest of the modules to be tested and documented.
- Added empty `input_control.html` documentation page for the module of the same name.
- Basic structure for `input_control` module's doc page.
- Updated color definitions for almost all the `input_control` `form` elements.
- Changed the `placeholder` rules a little bit to work properly for all elements now.
- Tested a few things in `playground` about `input_control`.
- Changed a little it of the colors used for `button` components. The `background` color used is custom, not from the material colors of Google Material, as I had to find a middle ground. The only discrepancy so far.
- Added customizable `$button-group-margin` and `$button-group-box-shadow` for `button-group` to make it more well-defined.
- Tweaked size variants for `button`s.
- Added `inverse` `button` style to the list of `button` styles.
- Removed the `custom` `button` demo that was still lingering in the current flavor.
- Updated colors and stuff for `button` color variants. They should be consistent now.

## 20161206

- Tweaks to the `checkbox` and `radio` components. Added a lot of customization and recalculated their values from the ground up. This should fix problems with displaying them on different screens.
- Updated the awkward `navigation` `header` component after the `button` changes.
- Logo in `header` changed to reflect the new style.
- Changed `button` default coloration to a material color palette from Google Material Design, so that it will now be more consistent. Tweaked `opacity` to make this work.
- Bumped demo stylesheet to latest commit.
- Tweaked `tab` module colors and variables for consistency with the rest of the modules.
- Added basic documentation for `form`s and `input`s in the `input_control` doc page.

## 20161207

- Documented `radio` and `checkbox` in the `input_control` doc page.
- Tweaked all references of `$back-color` to now use `#fafafa` instead of the previous `#f5f5f5`. This will make contrast better and allow for better visibility of certain pieces of text.
- Full documentation for `button`s and `button-group`s.
- Added documentation for `file` upload in the `input_control` module. Docs complete.
- Removed `demo.html` as it had outlived its purpose.
- `playground.html` cleanup. Moved all the rest of the data from the old `demo` page into it.

## 20161210

- Added `tab.html` for `tab` module documentation.
- Basic documentation and syntax explanation of `tab` module.
- Added documentation for `stacked` `tab`s in `tab` module doc page. Module documentation complete.
- `playground` cleanup, only `utility` module remains there now.
- Added `$breadcrumbs-margin` and updated accordingly to actually use a proper `margin` value if one is speciified, otherwise it will apply the resets.
- *TODO* Add responsive margin and responsive padding mixins in `utility`.
- *TODO* Add circular fixed size elements with close and dropdown icon that will change background color from opacity 0.00 to 1 (transitioned) when hovered over, selected, active etc.
- *TODO* Add folder for `v1` in `docs`, keep folder for `v2`. Add an `index.html` in `v2` that will redirect to the main `index.html`, move contents currently in `v2` to main `docs` folder. Move contents of main `docs` folder to `v1` afterwards. This will allow doc pages by version, while being SEO friendly.
- *TODO* Create a cheatsheet page for all the syntaxes for `v2` as a quick and easy guide to find things. Add to main menu.
- *TODO* Update the `style`sheet for all pages to use a file probably (more calls, but easier to maintain).

## 20161211

- Created `utility.html`, started documentation.
- Implemented mixins for responsive `padding` and `margin` in `utility`.
- Implemented new `close` icon/button in `utility`.
- Documented visibility helpers, floats etc., borders and shadows for `utility`.


## 20161213

- Used `utility` mixins to create `responsive-margin` and `responsive-padding` classes.
- Thoroughly tested `close` and `breadcrumbs`. Found dos and don'ts.
- Completed documentation for `utility` module.
- Removed `playground.html` page, as it was no longer needed.
- Updated comments for modules, so that they can show up in the resulting file.
- Removed local stylesheet from all pages, added newest version of live stylesheet.
- **Updated live demo to showcase new file size, new module components and full documentation for modules.**
- Added some basic OpenGraph meta properties to `index` for Facebook sharing tests.
- Added `flavors.html` and `customization.html`.
- Probably finished `flavor.html`.

## 20161215

- Added styling for `blockquote` in `core` module, just to make sure nothing is really missing.
- Demo updated to include the latest addition.
- Updated table of sized in `index`.
- Started writing `customization`.
- Documented `core` in `customization`.
- `customization` documentation complete (very simplistic, but I think the flavor file is better as a guideline).
- Updated `bower.json` and `package.json`.
- Added `.npmignore` and tested to see if it works.
- Moved docs around, getting ready for release.

## 20161216

- Created `quick_reference.html` page for quick reference.
- Documented `core`'s quick reference with codepens etc.
- Updated link references to `v2.0.0` instead of `v2.0`.
- Added documentation for `grid` module in the quick reference guide.
- Made logo redirect to `index` on all pages.
- Structured base of the whole `quick reference` page.
- Written documentation for `navigation` in quick reference.
- Linked to `quick_reference.html` from all page's header.


## 20161219

- Added code to `quick reference` from all modules. Codepens not done yet.
- Typo fixes and changes in `table`.
- Created codepens until the end of `contextual`, `progress` and `utility` will be done later today.
- *TODO* Notes for `quick reference`.
- *TODO* Readme, demo image etc.
- Extensive proofreading and fixes.
- Finished Codepens.

## 20161220

- Added notes for `input_control` in `quick reference`.
- Documented `table` in `quick reference`.
- Documented `card` in `quick reference`.
- Documented `tab` in `quick reference`.
- Documented `contextual` in `quick reference`.
- Documented `progress` in `quick reference`.
- Documented `utility` in `quick reference`.
- Updated **README** and OpenGraph in `index`.
- Added OpenGraph info to all pages.
- Doc page code cleanup.
- Updated everything, releasing **v2.0.0**.

# v2.0.1 Development Log

## 20161222

- Merged the pull request from @roryprimrose.
- Changed the `typography.scss` file to `core.scss`.
- Moved the `@import` statements to the flavor files.
- Updated `customization.html` to make sure the notes reflect the new structure of the toolkit.
- Demo pages updated to use the latest version of the toolkit (v2.0.1).
- Updated `CHANGELOG.md` to reflect new changes.
- Moved mixin `@include` statements inside the flavor files.

# v2.0.2 Development log

## 20161230

- Tweaked default color palette to deal with red-green colorblindness (see #52). `contextual` and `input_control` are affected by this change.
- *TODO* Update the live version sheets to use the v2.0.2 sheet, update all the references in live demo, update the flavors page.
- *TODO* Update the live version local sheets to use the new colors whenever needed.
- *TODO* New flavor with girlfriend.

## 20161231

- GF worked on `sucroa` flavor.

## 20170101

- GF finished `sucroa` flavor.

## 20170102

- Merged pull request for `sucroa` flavor.
- Documented `sucroa` flavor in `flavors.html`.
- Updated `README` and `CHANGELOG`.
- Updated `.do` and `.dont` classes for doc pages.
- Doc pages updated to use v2.0.2.

# v2.1.0 Development log

## 20170106

- Created a new branch for the development of v2.1.0.
- Added `$include-parent-layout` flag, which will allow rows declaring column layout for children.
- Implemented the whole *simple* layout structure for the `grid` module, allowing a `.row` to set the layout of its children, using a `.cols-{SZ}-{WD}` class.
- Decided to include the new `grid` system in the `mini-default` flavor, as its functionality could be beneficial to a lot of people. The new filesize (gzipped) is `6.47KB` over the previous `6.32KB`.
- Added what is basically an *auto-grid* option in `.row.cols-sm` and similar for other sizes, that auto-sizes all columns in a given row. Might come in handy.
- Updated `index.html` to show *under 10KB* instead of *about 5KB* in the **Minimal** card in order to deal with the controversy surrounding this specific line.

## 20170107

- Thoroughly tested `position: sticky` for `header` elements. It seems to work quite fine. - #24
- Tested `position: sticky` for breadcrumbs and other elements. Layout seems to get in the way quite a lot. Implementation might only be viable for `header` elements for now.
- Added `$include-header-sticky` flag and required variables to implement the `.sticky` class.
- Tested a new layout idea in `demo.html`, this is how the new `index.html` should look like in the next update (top part only).
- Updated `index.html` to use the new `.sticky` `header`, along with other styling changes, such as content sizing.
- *TODO* Update the rest of the pages, bump everything to `v2.1.0` and use the local stylesheets in the meantime.
- Content spacing changes in `index.html`.

## 20170108

- Added `$include-footer-bottom` flag, coded the necessary parts for absolute-bottom-aligned `footer` elements. - Resolved #42
- Updated all pages to use the new `footer` absolute-alignment. Should solve some issues on different devices.
- Changed the implementation of the new `footer` to `sticky`, instead of absolute.
- Rolled back all pages that were affected. Should work like a charm now!
- Finalized the `sticky` `footer`.

## 20170113

- Added support for ARIA `role="button"` in the `input_control` module by default. Filesize has bloated to a horrifying 6.92KB.
- Highly optimized `input_control` module's buttons and button groups, by removing redundant selectors, based on specificity, bringing down the filesize to a managable 6.59KB again.
- Optimized `sticky` `footer`s and `header`s a little bit. Should have no effect on filesize.

## 20170116

- Added `$include-horizontal-table` flag in `table` module to conditionally enable/disable the `horizontal` `table`s.
- Updated `breadcrumbs` component in the `utility` module to properly utilize the `ceil()` Sass function, so that no white line errors are shown, effectively fixing the only bug I managed to find with the component's presentation.
- Updated `utility` module's `visually-hidden` to properly do its job.
- First demo of the `tooltip` component. Works properly. Needs some tweaks to display a top and bottom variant, based on user choice.

## 20170118

- `tooltip` added to `contextual` module, minor changes to it, allows both top and `bottom` versions at the same time.
- Updated `tooltip` component to use variables.
- Added mixins for `tooltip`. Tested them.
- Added proper `tooltip` in the `default` flavor. Size now is `6.81KB`. Implementation of issue #41 is now completed.
- `DEVLOG.md` cleanup to make Markdown great again...
- Played with **hugging cat** to prepare it for the update.

## 20170127

- `tooltip` updated, dealing with a small misalignment bug in alternate styles.
- Added `$nav-include-sublink-bar` flag for `nav` element's subcategories to add a sidebar to them. Styled them as necessary and used proper variables. Tested reasonably extensively, no bugs should be present.
- With the addition of the new `nav` sidebar to the main flavor, the file size is now `6.86KB`. This is very close to the final size for the *v2.1.0* release, as most of the new features have been added already.
- Added `label` element `padding` via variables to address certain issues. Tweaked `checkbox` and `radio` components to match changes.
- Added flag for `fluid` `input-group`s and created the related component. `fluid` `input-group`s will now be part of the default flavor, taking the file size up to `6.93KB`, which is probably the final size of the next release. - Deals with #50.

## 20170131

- Added flags for `floats` and `clearfix`, turned both utilites of by default, as they are mostly useless.
- After removing the two components mentioned above, size is now `6.89KB`.
- `center-block` turned off using a flag by default. File size is now `6.87KB`. All legacy utilites have been disabled by default.
- Updated `utility.html` page to reflect the fact that these utilities are no longer present by default.
- Updated `quick_reference.html` to reflect the fact that these utilities are no longer present by default.

## 20170201

- Changed **hugging cat**'s clothes. It's February now!
- Added hidden flag `$input-high-specificity-selectors` to `input_control` to deal with high specificity selectors for `input` elements.
- Tested the new `input` styling, does not seem to cause any trouble with `button`-type `input`s, thus it will probably be the default choice from now on. File size dropped to an astonishing `6.72KB`, which seems like a pretty great tradeoff. Some more tweaks might be required, but this should be mostly fine!
- Tweaked the `input` styling to make sure all `button`-type `input`s are properly styled.
- Added `:hover` and `:disabled` selectors to `input` elements, making sure as many states as possible are covered now.
- Cleaned `:focus:invalid:focus` selector, as I could not find any test cases for it. Size is now `6.75KB`.
- Added safeguard for the `progress` element's `.nano` variant's case with `margin` of `0`. Should now behave properly.
- Added `@supports` statement to help `tooltip` component place itself whenever possible. Changed a few of the selectors in `tooltip` to be as specific as needed and work as required.
- Updated `tooltip` mixin to reflect the above changes.

## 20170202

- Added `[role="button"]` selector for elements inside `header`, did not remove any other selectors from component as specifity would be too low if changed.
- Updated `.card.section` to work properly with `[role="button"]` elements.
- #22: Spent a lot of time testing possible implementation of *Media Object*. See related issue for what I ended up with.
- Updated `index.html`. It's now ready for v2.1.0.
- Created the module `header` navigation bar to help make navigation easier.
- Updated all `head` elements for all pages.
- Updated top navigation for all pages.


## 20170207

- `index.html` and `core.html` are complete. Moving on to `grid.html`.
- Altered `grid.html` to better present the `basic layout` and `screen-specific layouts` cards.
- Spent a few minutes dealing with tabs and spaces and html page optimizations etc.
- Shrinked the size of `index.html`, minimized the internal CSS of the page.
- Dealt a little bit with other pages' `header` elements and some styling.
- Shrinked the size of `core.html`, minimized the internal CSS of the page.
- Minimized the internal CSS of all the pages.
- Shrinked page sizes a little bit across all pages, except `quick_reference.html`.
