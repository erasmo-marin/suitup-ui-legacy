# Layout

The layout component defines your app main container. It's required by Suitup to do great things, like auto add margin if the Header is fixed, or create the mount point for modals.

You should only have one `Layout` in your app.

```jsx
<Layout>
    <Container>
        <Box horizontal columns={5} gutter="1rem">
            <Box.Child wide={1} key={1}/>
            <Box.Child wide={3} key={2}/>
            <Box.Child wide={1} key={3}/>
        </Box>
    </Container>
</Layout>
```