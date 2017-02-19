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