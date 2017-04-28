# Changelog

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
