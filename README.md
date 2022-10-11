# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> Länsförsäkringar Icons

SVG icon library for Länsförsäkringar web development.

[Full icon reference →](https://lfds.netlify.app/visual-identity/graphics/icons/)

# Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Making a release](#making-a-release)

# Getting started

```
npm install @lansforsakringar/icons
```

# Usage

The library provides a set of SVG sprites, each containing a comprehensive list of icons. The sprites act as categories: different icon sizes, mono-color, or multi-color.

Because of CORS, the sprites will need to be self-hosted in your project. After installation, you need to copy the icon sprites to your code base from this package and make sure they are HTTP served. While the copy part can be done manually, it's easily done with a small script:

```
npm install copyfiles --save-dev
```

Add a script to your `package.json`.

```json
"script": {
 "copy:icons": "copyfiles copyfiles -u 4 node_modules/@lansforsakringar/icons/dist/sprite/**/* src/icons"
}
```

Now, use the icons in your project.

```html
<svg role="presentation" class="icon" width="20" height="20">
  <use xlink:href="{{path-to-icons}}/sprite/20/icons.svg#icon-wallet-20"></use>
</svg>
```

The `.icon` CSS class is part of [Components][components] and helps with sizing and alignment. Colors are controlled with the native CSS keyword `currentColor`.

# Bugs and feature requests

If you wish to report a bug or submit a feature request, feel free to [open an issue](https://github.com/LF-digitala-kanaler/LFUI-icons/issues/).

# Contributing

After cloning the repo, install the dependencies and build the icons.

```
npm install
npm run build
```

## Working with branches and pull requests

The latest and stable version is always in the `main` branch. New features and patches are then added through dedicated branches and pull requests.

When working on a new feature, begin by creating a new branch from `main`. After finishing your work, squash merge `main` into your branch and then create a pull request.

Please document the changes that you make in the pull request, along with potential changes to existing classes or variables that are to be added to a migration guide later on.

## Adding an icon

Export your icon from Sketch or Figma. Make sure to use only filled outlines and in color `#ff0000`. The build script will replace that exact HEX with `currentColor`.

Place the new icon in `src/{size}` and build, `npm run build`.

## Linting

The project uses [standard][standard]. There are no automated tests beyond that.

```
npm test
```

# Making a release

Releases to npm are manually done. Don't forget to run the build script before publishing a new release.

[components]: https://github.com/LF-digitala-kanaler/LFUI-components
[standard]: https://standardjs.com
[github-packages]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[personal-access-token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
