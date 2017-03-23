# Image

A Component to display an image keeping the desired aspect ratio, even if your image doesn't have it (but should).

```jsx
<Image src="link/to/your/image" type="backdrop">
	<Image.Vail>
		<h1>Hello!</h1>
	</Image.Vail>
</Image>
```
Image also accept childrens and progressive loading.

What is progressive loading?

It's a technique to load heavy images loading a low quality image first. To use it, you need to pass the `src` prop as an object with the `lq` (low quality) and `hq` (hight quality) properties. Also, if you want to blur the low quality version, you can pass the `blurLowQuality` prop.

Example:

```jsx
<Image
    src={{
      lq: "/img/cat-lq.jpg",
      hq: "/img/cat-hq.jpg"
    }}
    blurLowQuality
    type="square"
    width="100%"
/>
```

**Known Issues**
Currently, the blur is done using the fliter css property, this can cause ugly borders.

### Props

| Name           |     Type      | Description                              |
| :------------- | :-----------: | :--------------------------------------- |
| src            | obj \| string | The image source url or an object with the low quality and high quality urls. |
| type           |    string     | The desired aspect ratio.                |
| blurLowQuality |     bool      | Blur the low quality image?              |
| children       |     node      | The contents of the `Image`              |

