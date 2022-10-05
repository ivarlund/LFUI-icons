# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> Länsförsäkringar Icons

Crisp SVG icon library for Länsförsäkringar web development.

[Full icon reference →](https://lfds.netlify.app/visual-identity/graphics/icons/)

# Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Making a release](#making-a-release)

# Getting started

```
npm install @lansforsakringar/components
```

# Usage

Icons ships with **svg sprites**. They are self-hosted in your project (because of CORS), so you need to copy the icon sprites to your project from this package. This can be done manually, but preferably automaticlly. In below example, we're using `copyfiles`.

```
npm install copyfiles --save-dev
```

Add a script to your `package.json`. Make sure to keep the exact folder structure inside the sprite folder, so we don't load any unused sprites.

```json
"script": {
 "copy:icons": "copyfiles copyfiles -u 4 node_modules/@lansforsakringar/icons/dist/sprite/**/* src/icons"
}
```

Now, use the the icons in your project

```html
<svg role="presentation" class="icon" width="20" height="20">
  <use xlink:href="{{path-to-icons}}/sprite/20/icons.svg#icon-wallet-20"></use>
</svg>
```

The `.icon` is part of [Components][components] and helps with alignment. Colors are controlled with `currentColor`.

# Bugs and feature requests

If you with to report a bug or submit a feature request, feel free to [open an issue](https://github.com/LF-digitala-kanaler/LFUI-icons/issues/). The more information that you provide, the better.

# Contributing

After cloning this repo, install the dependencies and build the icons.

```
npm install
npm run build
```

## Working with branches and pull requests

The latest and stable version is always in the `main` branch. New features and patches are then added through dedicated branches and pull requests.

When working on a new feature, begin by creating a new branch from `main`. After finishing your work, squash merge `main` into your branch and then create a pull request.

Please document the changes that you make in the pull request, along with potential changes to existing classes or variables that should be added to a migration guide later on.

## Adding an icon

Export icon from sketch/figma and make sure to only use filled outlines of the color `#ff0000`. That color will be transformed to `currentColor` when the icon sprites are built.

Place the new icon in `src/{size}` and build, `npm run build`.

## Linting

The project uses [standard][standard]. There are no automated tests beyond that.

```
npm test
```

# Making a release

When the pull request is accepted and merged, a Github Action will automatically create a new minor release and bumb the version. You can control the release type with your [commit message](https://github.com/mathieudutour/github-tag-action#bumping)

[components]: https://github.com/LF-digitala-kanaler/LFUI-components
[standard]: https://standardjs.com
[github-packages]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[personal-access-token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
