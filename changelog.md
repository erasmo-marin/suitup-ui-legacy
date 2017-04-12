# 0.5.0

Upgrade to react 0.15.3 and react-dom 0.15.3, please upgrade your project since it contains some breaking changes.

# 0.3.9

Optimizations made. Bug fixes. Image component now supports progressive loading.

New components:

* Paragraph

Utils

* Scroll 

## 0.2.2

A new props proxy was added to all Suitup components using decorators. It adds the capability to listen to screen size changes through the screen object and load responsive inline styles.

Example:
```jsx
    let responsiveStyle = {
        mobile: {
             fontSize: '26px'
        },
        tablet: {
            fontSize: '24px'
        },
        fontSize: '18px'
    }
```

In this example, default fontSize will be overwritten when the screen is in the mobile and tablet screen size with the respective values.

## 0.2.1

New props for `Button` component:

for color: `primary, primaryDark, primaryLight, accent`
behavior/style modifiers: `flat, raised, inverted, disabled, fullWidth`

## 0.2.0

Events has been migrated from events to fbemitter, this reduced the bundle size in some kb and fixed a bug causing setState being called when the Device component was not mounted.
So, if you are using the Screen object, you need to update.

**Old was:**

```js
    Screen.onScreenChange(myCallback);
    Screen.offScreenChange(myCallback);
```

**Now it should be:**

```js
    this.myScreenListener = Screen.onScreenChange(myCallback);
    this.myScreenListener.remove();
```
