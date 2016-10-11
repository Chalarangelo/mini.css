# Changelog

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