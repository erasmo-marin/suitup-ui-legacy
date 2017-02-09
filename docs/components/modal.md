# Modal

The Modal Component is useful to display interactive components blocking the interaction with other parts of the app.

Modal will be rendered outside the Layout even if you declare it inside the layout. That prevent the parent styles to overwrite the modal positioning.

As the Menu Component, visibility of the component can be controlled through the `visible` prop.

```jsx
<Modal visible={this.state.modalVisible} onChange={this.onModalChange}>
    <Image src="http://f.fwallpapers.com/images/forest-canada.png" type="mediumh" width="100%"/>
    <Modal.Content>
        <p>
            Hi, I'm a modal. I'm useful to show information blocking the interaction with the main view.
        </p>
    </Modal.Content>
    <Modal.Footer>
        <Modal.Action key={1} start text="Ok!" onClick={() => {console.log("Modal Ok!")}}/>
        <Modal.Action key={2} end text="Cancel" onClick={() => {console.log("Modal Cancel")}}/>
    </Modal.Footer>
</Modal>
```

## Subcomponents

You can use the following subcomponents, but they are not required:

### Modal.Content

To display the modal content.

### Modal.Footer

To display controls at the bottom of the modal

### Modal.Action

An action button for Modal