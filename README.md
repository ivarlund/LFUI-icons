# LFUI-icons 

## Installation


**Install using yarn**

```jsx
yarn add https://github.com/lf-digitala-kanaler/LFUI-icons.git#v0.1.0
```

**Install using npm**

```jsx
npm install https://github.com/lf-digitala-kanaler/LFUI-icons.git#v0.1.
```

**Manually copy files**

Copy everything inside dist/sprite and place it in your project.

## Usage

LFUI icons ships with svg sprites to be self-hosted in your project(we can't store them in a cdn because of CORS Policy issues) which means you need to copy all sprites to your project from the package. You can of course do this manually but it might be easier to add a script that can do this for you. In this example I'm using `copyfiles` to help with this.

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

<svg role="presentation" class="icon" width="20" height="20"><use xlink:href="{{path-to-icon}}/sprite.svg#icon-wallet-20"></use></svg>

Our `.icon` class helps with alignment. Note that most icons inherits the color CSS property from the parent element in the DOM (using [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)).

## Migrating fron LFUI 6.x.x

First you need to be using LFUI-componets and not LFUI 6.x.x in order to use LFUI-icons(you can use it without LFUI-components if you want but not with any version below 7.0.0). 

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
* **Mega menu icons** ---> special/
* **Special** ---> 32/ :sweat_smile:

 
### TODO
* Add example page of all icons. 
* Add how too add an icon
* Add how to contribute  