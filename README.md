[![npm version](https://badge.fury.io/js/suitup-ui.svg)](https://badge.fury.io/js/suitup-ui)
[![npm version](https://david-dm.org/erasmo-marin/suitup-ui.svg)](https://david-dm.org/erasmo-marin/suitup-ui.svg)
[![devDependency Status](https://david-dm.org/erasmo-marin/suitup-ui/dev-status.svg)](https://david-dm.org/erasmo-marin/suitup-ui#info=devDependencies)
[![optionalDependency Status](https://david-dm.org/erasmo-marin/suitup-ui/optional-status.svg)](https://david-dm.org/erasmo-marin/suitup-ui#info=optionalDependencies)
[![license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/erasmo-marin/suitup-ui)

# Suitup UI Toolkit

Suitup UI Toolkit is a set of React components to build web apps faster. Themeable, minimalist and easy to use. It will fit to your needs like a custom made suit, so SuitUp! and get started.

## Status of the project

Before you start, take in consideration that Suitup is in development. The first stable version will be 1.0.0, and the release policy is "when it's ready", so don't expect the api to be stable, even in the patch relases before 1.0.0. This is a preview that includes an usable set of components, but not ready for production.

Did you find a bug? Do you want a new feature? Suggestions? Feel free to open issues and make a pull request 😀

## Getting started

Add it to your project:

```bash
npm install suitup-ui --save
```
And then just import the components you need and the css. If you need to make a theme, you need to build your own Suit.

Example using style loader:
```javascript
import "../node_modules/suitup-ui/dist/suitup.ui.min.css";
import { Layout, Container, Box, Button } from 'suitup-ui';
``` 
Also, you can import the less file directly to your project instead, it's in src/styles/index.less

## Components

Suitup includes the following components:

1. Layout
2. Box
  * Box.Child
3. Header
4. Menu
  * Menu.Item
  * Menu.Icon
5. Modal
  * Modal.Content
  * Modal.Footer
  * Modal.Actions
6. Slider
  * Slider.Slide
7. Image
  * Image.Vail
8. Card
  * Card.Content
  * Card.Footer
  * Card.Action
9. Footer
10. Button
11. Icon
12. Device helpers for responsive design
  * Device.Mobile: Component that shows only on Mobile
  * Device.Tablet: Component that shows only on Tablet
  * Device.Desktop: Component that shows only on Desktop
  * Device.Widescreen: Component that shows only on Widescreen
  * Device.Screen: A store that notifies when the Screen type changes


And this is the list of components to be added in the future:

1. Calendar
2. Tile
3. Tabs
4. Form
  * Form.Field
  * Form.Group
  * Form.Input
5. Form widgets
  * Input, Select, Check, Toggle
6. Table
7. Search

## Running the demo

We include a demo that you can use to get started. Just clone the repo, install the dependencies and run it:

```bash
git clone https://github.com/erasmo-marin/suitup-ui.git
cd suitup-ui
npm install
npm install -g less
npm run start
```

### building

```bash
npm run build
```

## Theming

Theming feature is on development. Suitup will expose theme variables in `/src/styles/theme` folder. Basic theming will be just simple as modifying the color palette in `/src/styles/theme/colors`. More complex theming will be available modifying the specific per-module `.less` file in the `/src/styles/theme` folder.

## CLI

A cli is in development. It will allow you to build themes, customize settings, generate your project from bolierplate, etc.

## Docs

For the while, you can access to more documentation in the `/docs` folder. Docs are not linked here. A website is in development.
