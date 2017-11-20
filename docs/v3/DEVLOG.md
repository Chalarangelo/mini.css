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
- Created tailored section.
- Landing page is mostly complete, footer and some minor changes are missing, I can start working on the rest of the docs now.

## 20171106

- Scraped the old website to get content for new documentation.
- Started development of the new website app in `v3_dev`. This is going to be where the docs app is going to be created in.
- Initial scaffolding of the documentation UI.
- Added conditions for `box-shadow` values in `core`. The module is mostly complete, apart from extra features that I might want to add in the future.
- Decided not to add the `select` fix in `input_control`. Browsers are pretty wild around the element and its use cases are causing a ton of complications. It is possible, but quite unlikely that it will be rebuilt in the old way in the future, but most likely it will just follow the OS/Browser/Native UI as it should have done originally. It's debatable if this is for the best, but quite frankly it saves me a lot of time and effort for a single element and a lot of bytes in the codebase. I would rather not style it and provide an outside fix for safety, one that goes a bit against semantics to provide better styling. If you are reading this and want to tell me why this was a bad choice and led to the demise of the **hugging cat**, kindly do!
- Added styling for `form` elements, simplified the values of `padding` to make them more reasonable and uniform.
- `legend` elements now have larger text (`1rem` over `0.875rem` in the past). This is done with accessibility in mind, making sure that users will have an easier time reading forms, which are a crucially important part of websites nowadays. Also simplified padding to be more universal and avoid cluttering.

## 20171107

- Built `.input-group`s from the ground up, cleaning legacy code and making sure everything works just like before.
- Copied over the fix for `number` `input`s, still valid.
- Removed the `textarea` fix, as it only applies to IE.
- Copied over fixes for `search` elements, as they seem to apply to modern browsers.
- Used CSS variables for most of the form `input` custmization, these should be easy to change.
- Replaced old `::placeholder` definitions with `:placeholder-shown` for most browsers, kept the `-ms-` prefixed one for Edge. Using `:placeholder-shown` is following the latest standards, it has a high implementation rate, does not conflict with the browser support **Gluon** is targeting and, if it does not work, the code will default to what browsers usually do, which is pretty much what I am doing, too. It also simplifies the code a bit. `::-ms-placeholder` simulates the default behavior, so all browsers should get a similar styling.
- Copied over all the fixes for `button` and similar elements, as they were up-to-date.
- Created proper variables for `button`-like elements, built element syling on CSS variables.
- Tested CSS variables for button, should allow for easy customization and additional styles, meaning it will be a breeze to add all the extra stuff as soon as possible.
- Bundled up `[disabled]` styling for all elements in `input_control` as this should now be the default behavior of the code.
- Dealt with #114. It shouldn't be a problem anymore.
- Added mixins for `button` elements in `input_control`. They should now be perfectly usable.
- Removed `header` `display` fix as it was targeting IE 9-.
- Implemented `header` and links/buttons in it, `logo` is still missing.
- Implemented `.sticky` for all `navigation` elements that needed it.

## 20171108

- Started debugging the extremely problematic `header` `.button`s. Figured out that `line-height: 2.4375` can fix the issue, no clue why that is, but I am going to use it for a little while.
- Realized that `header` button-like elements don't need that high a specificity, provided that they should always appear after the definitions of `input_control`, thus lowered the specificity. This will trim off a couple of bytes, but it might eventually cause problems. Remember this decision should that happen and blame the **hugging cat**.
- Figured out the `line-height` thing for the afforementioned elements.
- Styled `.logo` in `header`. The styling is now far simpler and easier to use.
- Removed `display:block` fix from `nav` as it was targeting IE 9-.
- Tweaked and rebuilt the styling of `nav` elements. It should now be more mobile-friendly, too, especially when used in combination with a `.drawer`.
- Rebuilt `.drawer`, breaking changes in the old code, but managable as far as I can tell.
- `.drawer` will now be either left or right, no option for both. This can be altered in the code or by hand (if I make a tool, I should remember to add an option - *TODO*).
- `footer` `display:block` fix removed - IE 9-.
- `footer` rebuilt, pretty similar to the last iteration, except for colors.

## 20171109

- Renamed `grid` to `layout`. It will now house the `card` module, too. This is done to make sure that cards are never used without the grid system, as they wouldn't work too well without it.
- Fully implemented the `card` module into `layout`, gave me no trouble. It's fully operational and tested. Some color tweaking might be required, but everything is pretty much ready for deployment in the `layout` module.
- Customized `checkbox` and `radio` input elements, they should work pretty much fine.

## 20171112

- Updated `navigation` module to use Unicode symbols instead of icons. This will allow for more customization of the icons used in terms of color and alignment.
- Modularized colorization of `form` and `input` elements, everything should now work fine by itself.

## 20171113

- Properly applied variable styling to `checkbox` and `radio` elements. They now use the `base-font-size` Sass variable to get their size, which makes sense.
- Added `.button-group`s, they seem to behave properly, `border-color` could use some tweaking maybe.
- Added external Sass variables to all modules (hopefully I didn't miss any), so that they can be used on their own now (not recommended, but doable).
- Updated color palettes that should have better contrasts (slight deviation from the old ones, but this might change before release).
- Added all necessary variants for `.button`-like elements.
- Added custom styles necessary for `.card` elements.
- After compilation of the completed modules, the size is `4.58KB`, whereas the size of the **Fermion** branch with the same things (meaning the switches and other ditched components were not included) was `4.56KB`. This is unbelievable and makes the **hugging cat** really happy.
- Recompiled the `mini-default` flavor files. They should be mostly ready for release by now.

## 20171114

- Struggled for a couple of hours with the whole docs architecture, finally moved to a new customized build system.
- Added the `getting-started` section to the documentation, this should now start to look like a real website.
- Worked on documentation and custom tool, it should now support a lot of the data that is thrown at it.
- Fixed a huge bug that I expected to blow up in my face eventually, where I had removed the `max-width` propert from `.col-` elements. Everything should be bug-free in the `grid` components now.

## 20171115

- Documented headings.
- Documented code and quotations.
- Documented lists.
- Documented images.
- Added `margin` to `figcaption` elements to reset the browser defaults.

## 20171116

- Updated `layout` to make sure everything is bug-free. The `grid` in particular is not very friendly lately.
- Fixed a couple of bugs in `input_control` as well.
- Improved the build script to actually render the `modifiers` section, it should be complete now, I think.
- Documented `grid`. The whole old module has been merged into one long card with all the information readily available. Hopefully it's less complicated now.
- Changed the color of `main` in the documentation to help the cards pop out a little bit more.

## 20171117

- Documented `card` and `card section` to complete the `layout` module's docs.
- Altered the `dark` section colors, didn't really like them.
- Cleaned up certain parts of the docs just a little bit.

## 20171118
- Documented `button` elements and input grouping.
- Documented `header`, `footer` and `nav`.

## 20171119

- Documented `drawer`.
- Implemented search functionality, using `fuse`. It all works pretty well.
- Added `index.html` generation code in the build file, this will allow me to not load a script for the versioning.
- Polished menus with icons, updated menus.
- Updated splash page with all the necessary thing and buttons.
- Optimized all images to make the pages lighter.
- Updated links to open in new tabs when they are external.
- Generated new favicons.
- Everything should be ready to release `v3.0.0-alpha.1` tomorrow.

## 20171120

- Updated `.drawer` documentation to include customization.
- Recompiled default flavor just in case.
- Fixed the devlog showing wrong dates. **Hugging cat** was at it again, it seems!
- Unleashed the first **Gluon** alpha unto the world!
