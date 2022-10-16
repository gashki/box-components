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
    description="This is a right aligned uncontrolled switch"
    isRightAligned
    label="Right Aligned Switch"
    name="Switch-example-3"
/>
```

**Controlled**

```jsx
const [checked, setChecked] = React.useState(false);

<>
    <Switch
        checked={checked}
        description="This is a controlled switch"
        label="Controlled Switch"
        name="Switch-example-4"
        onChange={() => setChecked(!checked)}
    />
    <Switch
        checked={!checked}
        description="This is a controlled switch with an inverse value"
        label="Inverted Controlled Switch"
        name="Switch-example-5"
        onChange={() => setChecked(!checked)}
    />
</>;
```

**Disabled**

```jsx
<Switch disabled label="Disabled Switch" name="Switch-example-6" />
```
