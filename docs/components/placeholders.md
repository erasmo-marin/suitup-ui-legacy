# Placeholders

Placeholders are a set components to display fake 'abstract' data while loading the real data. Some components are built to display placeholders, but you can use the placeholders standalone too. 

## Components that comes with placeholders



### Paragraph

The Paragraph component comes with the Paragraph placeholder. It will display it if `loading == true`. The placeholder options are passed in the `placeholder` prop. An example full configuration for the paragraph component with placeholder would be this (the default configuration):



```jsx
<P loading={this.state.loading} placeholder={{
	rows: 5, //numbers of fake rows to display
    justify: false, //expand or not the lines to 100% width
 	lineSpacing: 15, //in pixels
    fontSize: 16, //in pixels
    color: 'rgba(0,0,0,0.05)', //default font color
    rounded: false //this will add a border radius to rows
}}>{this.state.text}</P>
```



