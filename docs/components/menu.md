# Menu

The Menu component implements a menu that can be hidden at left or right of the screen. It will render a vail over your content. Instead of using a trigger component, you can change the visibility of the menu by changing the `visible` prop to `true` or `false`.


```jsx
<Menu left visible={this.state.menuVisible} onHide={this.onMenuHide}>
    <Menu.Header title="Suitup UI" icon={logo}/>
    <Menu.Item href="/" text="Inicio"/>
    <Menu.Item text="Containers">
        <Menu.SubItem text="Layout"/>
        <Menu.SubItem text="Container"/>
        <Menu.SubItem text="Box"/>
    </Menu.Item>
</Menu>
```

## Subcomponents
The Menu components includes Menu.Header, Menu.Item and Menu.SubItem subcomponents. They are all optional.

### Menu.Header
Display `title` and `icon`, where the `icon` prop must be a `React.Component`.

### Menu.Item
Represents a root menu item that can have sub items.

### Menu.SubItem
Represents a sub menu item. Should be children of `Menu.Item`.

