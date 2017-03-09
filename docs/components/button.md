# Button

A very simple and clickeable button, like most of the buttons out there, but with a lot of props to customize. 

```jsx
<Button onClick={onClickHandler}>
	click me
</Button>
```



### Props

| Name         |  Type  | Description                              |
| :----------- | :----: | ---------------------------------------- |
| raised       |  bool  | Should it be raised?                     |
| inverted     |  bool  | Should it be inverted colors?            |
| flat         |  bool  | Removes shadows borders and background color? |
| fullWidth    |  bool  | Expand button to the available width?    |
| disabled     |  bool  | Disable button?                          |
| primary      |  bool  | Use *Primary Color* from theme as background? |
| primaryDark  |  bool  | Use *PrimaryDark Color* from theme as background? |
| primaryLight |  bool  | Use *PrimaryLight Color* from theme as background? |
| accent       |  bool  | Use *Accent* from theme as background?   |
| pressed      |  bool  | Controlled pressed state                 |
| type         | String | Just as html button type, ie: *button, submit, reset* |
| text         | String | The button text                          |
| circular     |  bool  | Should display as a circle?              |
| rounded      |  bool  | Should it have rounded borders?          |
| menu         |  bool  | It's a menu button?                      |
| onClick      |  Func  | *onClick* event callback                 |
| onMouseUp    |  Func  | *onMouseUp* event callback               |
| onMouseDown  |  Func  | *onMouseDown* event callback             |

