# LFUI-icons 

## Getting started

To install lfui-components in your project, you will need to run the following command using yarn:

```jsx
yarn add https://github.com/lf-digitala-kanaler/LFUI-icons.git#v1.0.0
```

If you prefer Npm, use the following command instead:

```jsx
npm install https://github.com/lf-digitala-kanaler/LFUI-icons.git#v1.0.0
```

## Usage

LFUI icons ships with svg sprites to be self-hosted in your project(we can't store them in a cdn because of CORS Policy issues) which means you need to copy all sprites to your project from the package. You can of course do this manually but it might be easier to add a script that can do this for you. In this example I'm using `copyfiles` to do that.

```jsx
yarn add copyfiles --dev
```

Once that's done add a script that you can run to copy the icons to your project. It's important to keep the folder structure inside the sprite folder since be don't want to load icons we do not need. 

```jsx
"script": { 
 "copy:icons": "copyfiles copyfiles -u 4 node_modules/lfui-icons/dist/sprite/**/* src/icons"
}
```

Now you can start using the icons in your project like this 
```jsx
<svg role="presentation" class="icon" width="20" height="20"><use xlink:href="{{path-to-icon}}/sprite.svg#icon-wallet-20"></use></svg>
```
Our `.icon` class helps with alignment. Note that most icons inherits the color CSS property from the parent element in the DOM (using [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)).

## Migrating fron LFUI 6.x.x

First you need to use LFUI-componets and not LFUI 6.x.x in order to use LFUI-icons(you can use it without LFUI-components if you want but not with any version below 7.0.0). 

There is no automatic way to upgrade from the old icon system, you will have to change the path of all icons in your project to the new structure. 

Icons is now combined to sprites depending on size and the structure looks like:

```jsx
├── 20/
├── 20-color/
├── 24/
├── 24-color/
├── 32/
├── 32-color/
├── 40/
├── 40-color/
├── 70/
├── 70-color/
├── special/
```

Let's have a look how the structure have changed from LFUI [6.7.0](https://lf-digitala-kanaler.github.io/LFUI/670/#/icon). 

#### 10px icons

* **10 px icons** ---> special/
* **20 px icons** ---> 20/
* **20 px color icons** ---> 20-color/
* **24 px icons** ---> 24/
* **24 px color icons** ---> 24-color/
* **26 px icons** ---> special/
* **32 px icons** ---> 32/
* **32 px color icons** ---> 32-color/
* **40 px icons** ---> 40/
* **40 px color icons** ---> 40-color/
* **48 px color icons** ---> special/
* **50 px color icons** ---> special/
* **70x50 px color icons** ---> special/
* **56 px color icons** ---> special/
* **64 px color icons** ---> special/
* **70 px icons** ---> 70/
* **70 px color icons** ---> 70-color/
* **84x50 px color icons** ---> special/
* **Mega menu icons** ---> special/ (these icons have updated names, "icon-" have been removed from the name to match the rest so icon-insurance_home-32 will now be insurance_home-32) 
* **Special** ---> 32/ :sweat_smile:


## Contributing
 
 ### 1. Clone rep
 ### 2. Work in a branch
 
 When contributing to LFUI-icons, your work should always be done in a branch off of your repo, this is also how you will submit your pull request when your work is done.

To create a new branch:

```jsx
 git checkout -b {your-branch-name}
 ```
 
 To install the project's dependencies
  ```jsx
    yarn install

```

 ### 3. Add a new icon 

  Export from sketch/figma and make sure to only use filled outlines with color #ff0000 to make sure that the icons use the current color ( #ff000 will be transformed to currentColor when we transform the icons to sprites).
  
  Place the new icon in src/{size}

  Run `yarn build` to add the new icon to the icon system
   
### 4.Make a pull request

When you are finished with your work it's time to make a pull request. To do so commit your code to your working branch and push it. 

```jsx
 git add .
 git commit -m "YOUR  COMMIT MESSAGE HERE"
 git push origin { YOUR_BRANCH_NAME }

 ```
### 5. Deploy

When the pull request is accepted and merged a Github action will automaticly creat a new release and update the version number. 
