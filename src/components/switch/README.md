### Examples

**Basic**

```jsx
<Switch label="Uncontrolled Switch" name="Switch-example-1" />
```

**Basic (w/ description)**

```jsx
<Switch
    description="This is an uncontrolled switch with a description"
    label="Uncontrolled Switch"
    name="Switch-example-2"
/>
```

**Right Aligned**

```jsx
<Switch
    alignment="right"
    description="This is a right aligned uncontrolled switch"
    label="Right Aligned Switch"
    name="Switch-example-3"
/>
```

**Controlled**

```jsx
const [isChecked, setIsChecked] = React.useState(false);

<>
    <Switch
        description="This is a controlled switch"
        isChecked={isChecked}
        label="Controlled Switch"
        name="Switch-example-4"
        onChange={() => setIsChecked(!isChecked)}
    />
    <Switch
        description="This is a controlled switch with an inverse value"
        isChecked={!isChecked}
        label="Inverted Controlled Switch"
        name="Switch-example-5"
        onChange={() => setIsChecked(!isChecked)}
    />
</>;
```

**Disabled**

```jsx
<Switch isDisabled label="Disabled Switch" name="Switch-example-6" />
```
