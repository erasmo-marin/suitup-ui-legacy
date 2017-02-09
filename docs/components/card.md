# Card

Card component

```jsx
<Card>
    <Image src="https://aos.iacpublishinglabs.com/question/aq/700px-394px/names-forests-canada_dac556c221c80d83.jpg" type="mediumh" width="100%"/>
    <Card.Content>
        <p>I'm a very simple Card. I'm good at showing small information pieces. I allow interactions. If your Card has no interactions, then you should use a Tile or a List instead.</p>
    </Card.Content>
    <Card.Footer>
        <Card.Action start onClick={()=>{ console.log("Ok card") }} text="Ok"/>
        <Card.Action end onClick={()=>{ console.log("Cancel card") }} text="Cancel"/>
    </Card.Footer>
</Card>
```

## Subcomponents

The Card component includes the following subcomponents:

### Card.Content
Display the Card content, like a text.
### Card.Footer
Display controls at the bottom of the Card.
### Card.Action
An action button for Card.