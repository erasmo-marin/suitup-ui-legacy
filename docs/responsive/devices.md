# Devices and breakpoints

Suitup UI has 4 breakpoints, used for the Device and Device based Components:

* **mobile:** <= 768px
* **tablet:** 769px to 999px
* **desktop:** 1000px to 1191px
* **widescreen:** >= 1192px

## Device Component

The Device Component can be used to show or hide content based on the defined breakpoints. You can specify more than one breakpoint to the device component.

Example:

```jsx
	<Device devices={["mobile", "tablet"]}>
		<p>Hi! I'm just visible on mobile and tablet!</p>
	</Device>
	<Device device="mobile">
		<p>I'm visible just in mobile</p>
	</Device>
```


## Helpers

You can use the provided device helpers to write more declarative and clear code:

```jsx
	<Mobile>
		<p>You will only see me on mobile!</p>
	</Mobile>
	<Tablet>
		<p>You will only see me on tablet!</p>
	</Tablet>
	<Desktop>
		<p>You will only see me on desktop!</p>
	</Desktop>
	<Widescreen>
		<p>You will only see me on widescreen!</p>
	</Widescreen>
```

# Responsiveness

<span style="color:red">*this section describes a feature that is still in development*</span>

Suitup components and Contianers can receive styles and props to target specific breakpoints.

For example, you can set custom wides for each breakpoints on the `Box.Child` Component. If you miss a breakpoint, Box.Child will use the wide value, or, if it's missing too, it will use the default wide value.

```jsx

import {Box} from 'suitup-ui';

class MyComponent extends React.Component {

	render() {
		let wides = {
			mobile: 12,
			tablet: 6,
			desktop: 3,
			widescreen: 1
		}
		
		return(
				<Box columns={12}>
					<Box.Child wide={3} wides={wides} key={1}>
						<p>Hi</p>
					</Box.Child>
					<Box.Child wide={3} wides={wides} key={2}>
						<p>I</p>
					</Box.Child>
					<Box.Child wide={3} wides={wides} key={3}>
						<p>am</p>
					</Box.Child>
					<Box.Child wide={3} wides={wides} key={4}>
						<p>Responsive</p>
					</Box.Child>
				</Box>
		)
	}
}
```
