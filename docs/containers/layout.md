# Layout

The layout component defines your app main container. It's required by Suitup to great things, like auto add margin if the Header is fixed, or create the mount point for modals.

Only one `Layout` is expected per page.

```jsx
<Layout>
    <Container>
        <Box horizontal columns={5} gutter="1rem">
            <Box.Child wide={1}/>
            <Box.Child wide={3}/>
            <Box.Child wide={1}/>
        </Box>
    </Container>
</Layout>
```