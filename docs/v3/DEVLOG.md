# mini.css v3 (Gluon) Development Log

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
