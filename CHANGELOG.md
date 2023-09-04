# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] 2023-09-04

-   Publish a version with React Native 0.72 / React 18.2.0


### [1.0.6] 2022-06-01

-   Hide the back button title on iOS
-   Remove `type: "module"` from `package.json` until [#302](https://github.com/expo/snack/pull/302) is merged

### [1.0.5] 2022-05-30

-   Produce normal ES6 (ES2015) output
-   Use the default font family on all OS

### [1.0.4] Nuked

-   Render clickable the full width of the row on the enum selection screen
-   Try to remove from the export all constructs that may require transpilation

### [1.0.3] 2022-05-22

-   Improve the spinner code to allow fully synchronous updates when the configuration getters/setters are synchronous
-   Render the spinner grace time configurable
-   Fold `jsxLabel` into `label` and add a separate screen title for `SettingsElementEnum`
-   Add a CJS export transpiled to ES5 (ES2009)
-   Transpile the ES6 module to ES6 (ES2015)

### [1.0.2] 2022-05-21

-   Fix generated files not being published in the npm package
-   Downgrade the `@types/react` dependency to 17.0.0

### [1.0.1] 2022-05-21

-   Fix a typo in `package.json`

# [1.0.0] 2022-05-21

-   First release
