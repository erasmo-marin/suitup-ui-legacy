# Theming

## How it works

Suitup components adheres to *progressive truthfulness* exposing several variables to change the UI as you want. You can set your own color palette, change properties for each component or extend the functionallity. With Suitup themes you don't start from scratch, you just modify what you need to modify.

Theme specification is in development, to create themes, just clone the github repo and build your own theme by modifying the files inside `/src/styles`.

## Colors

Suitup uses the material design colors guidelines to set the colors globally. We use two color palettes, one for Primary color and other one for Accent color. For more information you can read the specification here [https://material.io/guidelines/style/color.html](https://material.io/guidelines/style/color.html).


**Basic color settings** (`/src/styles/colors.less`)

```css
/*Base colors*/
@PrimaryColor: #607D8B;
@PrimaryColorDark: #455A64;
@PrimaryColorLight: #CFD8DC;
@AccentColor: #9C27B0;
@BackgroundColor: #fafafa; /*used for layout*/

/*text colors for light backgrounds, don't use gray colors, just change the alpha value*/
@PrimaryText: #212121;
@SecondaryText: rgba(33,33,33,0.7);
@DisabledText: rgba(33,33,33,0.5);
@Dividers: rgba(33,33,33,0.12);

/*text colors for dark backgrounds, don't use gray colors, just change the alpha value*/
@PrimaryTextOverDark: #fff;
@SecondaryTextOverDark: rgba(255,255,255,0.7);
@DisabledTextOverDark: rgba(255,255,255,0.5);
@DividersOverDark: rgba(255,255,255,0.12);

/*Icon color for dark backgrounds, the text color should work ok for most cases*/
@IconLight: #fff;
@IconActiveLight: #fff; 
@IconInactiveLight: rgba(255,255,255,0.5);

/*Icon color for light backgrounds, the text color should work ok for most cases*/
@IconDark: #000;
@IconDarkActive: rgba(0,0,0,0.54);
@IconDarkInactive: rgba(0,0,0,0.38);

```


## Building your own theme

TODO



