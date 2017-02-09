# Box

A Box is a Container to build very flexible grids built on top of [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). In the Suitup approach to build web apps, a Box is like a wall, and its childs are the bricks. Box can have an orientation `vertical` or `horizontal`, and can have a variable number of columns (default is 12). Even the gutter is customizable.

The brick, `Box.Child` Component can have a wide (default is 1), and responsive wides for each Suitup breakpoint.

Most of your components should be wrapped inside a Box, it will allow you to position them faster and easily.

```jsx
<Box horizontal columns={5} gutter="1rem">
    <Box.Child wide={1}/>
    <Box.Child wide={3}/>
    <Box.Child wide={1}/>
</Box>
```