# Changelog

## v3.0.1

- Minor fixes in tables. `.horizontal` tables should now behave a bit better and not display a scrollbar, unless necessary. #145

## v3.0.0

- Fully rebuilt framework. A ton of work has been put into creating this version to be the best CSS framework experience you have gotten so far:
  - `core` module - same as before, no breaking changes
  - `layout` module - combination of `grid` and `card`, pretty much same as before, no breaking changes
  - `input_control` - same as before, breaks `checkbox` and `radio` elements
  - `navigation` - same as before, breaks `drawer` element
  - `table` - same as before, removed `scrollable` and `preset` table styles, added `hoverable` table syle
  - `contextual` - same as before, includes part of the `tabs` module, breaks `modal` dialog element
  - `progress` - same as before, some changes in naming conventions and styles
  - `icon` - new module, adds 20 new icons ot the framework, along with some color variants
  - `utility` - same as before, some naming convention changes, removed `breadcrumbs` and `close` components
- Revamped documentation can be found [here](https://minicss.org/docs), making it easy to find what you are looking for.
- Customization tool can be found [here](https://minicss.org/flavors), allowing you to build your own flavors.
- Updated documentation to reflect the changes made.

## v2.3.7

- Fixes a couple of bugs with `checkbox` and `radio` elements.
- Fixes a multitude of bugs with `select` and `option` elements.
- Updated documentation to reflect the changes made.

## v2.3.6

- Fixes a bug that caused transparency in `.modal`s that use `.card`s (#104).
- Documentation update for `.modal`s.

## v2.3.5

- Fixes a bug caused by empty `<td>` elements, causing mobile tables to not display as intended.

## v2.3.4

- Fixed an edge-case that could cause trouble with `<header>` elements (#94).
- Fixes some issues in the documentation (#92, #93).
- Added some more specificity to the custom styling for `<select>` elements.

## v2.3.3

- Added a new `mini-pwa` flavor, targeting Android and mobile devices in general.

## v2.3.2

- Improved the styling of `select` to be a bit lighter in terms of size.
- Added a condition allowing the `select` fix not to be applied.
- Updated `mini-lite` to not include the `select` fix.

## v2.3.1

- Fixed an issue with `<select>` elements on certain devices (#80, #82).
- Fixed an issue with `<input>` elements' padding on certain devices (#81, #83).
- Updated codebase from tabs to spaces, should now look better on GitHub.

## v2.3.0

- Added a new `.modal` component, which allows you to show modal dialogs (`contextual`).
- Added a new `.switch` component for displaying on/off switches (`input_control`).
- Added `.scrollable` tables, allowing for long tables to be displayed in an alternate way (`table`).
- Added `.vertical` input groups, allowing vertical forms to be created more easily (`input_control`).
- Updated **mini-default** color palette. The new palette should now display better on screens with uncommon contrast settings.
- Slightly tweaked the styling of various elements to improve their look.
- Various under-the-hood updates to make everything work better, load faster and be lighter.
- Updated the styling of borders and other elements to use `rem` instead of `px` in all `rem`-based flavors.
- Added a color highlight for the selected tab in `.tabs`.
- Added styling for `disabled` elements in `input_control` that were wrongly omitted in the past.
- Fixed some bugs and improved overall stability, updated all flavors accordingly.

## v2.2.0

- Replaced old classes for generic shadows with one class (`.shadowed`).
- Removed the `.nano` progress style variant.
- Responsive visibility helpers now properly utilize `!important`.
- Updated the styling of the `.close` icon.
- Removed `.alert` and all its variants. Alerts are now deprecated.
- Added a `.toast` message to contextual module, along with variants.
- Removed `.inverse` card color variant, added `.warning` and `.error` variants to replace the old alerts.
- Swapped the order of the input_control and naviation modules.
- Added a fluid typography mode (currently disabled by default on all flavors).
- Added a `.drawer` component in navigation module, along with variants.
- Updated documentation and customization documentation to reflect latest changes.
- Updated all flavors to utilize the latest features.

## v2.1.5

- Proper re-release of `v2.1.4`.

## v2.1.4

- Updated documentation pages for a better user experience.
- Removed excessive styling from certain elements and pseudo-class selectors, optimized parts of the code, effectively shrinking the size of the framework.

## v2.1.3

- Removed some legacy browser support features.
- Updated color palette.
- Changed units from `px` to mostly `rem` and `em`.
- Added **mini-dark** flavor (dakr version of **mini-default**).
- Updated docs.

## v2.1.2

- Updated `::placeholder` definitions (#36).
- Updated the animations on `.animated` alerts, blurriness should be less noticeable now (#35).
- Added `yarn` support.

## v2.1.1

- Added responsive hiding classes in the `utility` module (#61).
- Fixed a bug with `.button-group` on Chrome (#63).
- Fixed a bug with `.horizontal` tables (#69).
- Added **mini-lite** flavor (a lightweight version of **mini-default**).
- Added **mini-nord** flavor (#69).
- Updated flavors to latest version of the framework.
- Documented flavor customization in more detail.
- Added templates to help newcomers use the framework more effectively.
- Restructured parts of the codebase for consistency and clarity. Mixins are now housed in their own files and many modules have introduced hidden and external variables.
- Updated all `@media` queries to be screen-specific.
- Added and updated CDN and general download options (#64).
- Added styling for `<figcaption>` elements.

## v2.1.0

- Added a `.tooltip` component in the `contextual` module (#41).
- Added a predefined layouts in the `grid` module (#53).
- Added `.sticky` functionality to `navigation` module's headers and footers (#26).
- Added `.fluid` input group component to `input_control` module (#50).
- Added proper documentation for a media object in the `grid` module (#22).
- Updated a lot of the documentation to include ARIA guidelines. Updated button elements, so that `role="button"` creates buttons same as the class (#40).
- Updated **mini-default** and **mini-sucroa** flavors to the latest version of the framework.
- Changed the styling of `<nav>` to include a left border sidebar for subcategories.
- Updated selectors in many places and optimized parts of the codebase.
- Added conditional flags to enable or disable several components.
- Added documentation and workarounds for certain table issues (#54).
- Redesigned parts of the documentation to make it display better on certain devices (#58).

## v2.0.2

- Added a new flavor, **sucroa**.
- Updated color palette for **default** flavor to deal with colorblindness issues.
- Added hugging cat.

## v2.0.1

- Updated module structure. `_core.scss` no longer contains all `@import` statements, but they are now included in the flavor files.
- Updated documentation for customization to reflect said changes.

## v2.0.0

- New version, rebuilt from scratch.
- Breaking changes in legacy browser compatibility.
- Full module and component redesign and restructure.
- New documentation and demo pages.

## v1.1.0

- Fixed a problem with disabled buttons not behaving properly (issue #7).
- Added support for `:disabled` pseudo-class for elements with disabled styles (issue #8).
- Added support for `:active` and `:focus` for the close utility class (issue #9).
- New module: Spinners (component comes in two styles) - part of the extra modules.
- Removed the `flavor.scss` file from the `/scss` directory. Default flavor base will be `/flavors/mini-default.scss`.
- Added hover styling and pointer cursor to the thumbnail styling (issue #10).
- Minor change to caret styling (should be virtually identical).
- Updated accordion definitions for consistency.
- Updated label style definitions for consistency.
- Minor changes to progress component styling (should be virtually identical).
- Minor changes to panel component styling (should be virtually identical).
- Bootstrap flavor added.

## v1.0.2

- Refactoring patch (all version will now use vMajor.Minor.Patch instead of just Major.Minor.Patch). Changes will be reflected in the updated links.

## v1.0.1

- Fixed modals covering other elements due to `z-index` (issue #3).
- Fixed label & badge display overlapping in smaller displays (issue #4).
- Fixed display of demo pages and incorrect padding of elements in panels (issue #5).

## v1.0.0

- Initial release.
