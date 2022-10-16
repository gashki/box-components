### Examples

**Basic**

```jsx
<Switch name="Switch-example-1" label="Uncontrolled Switch" />
```

**Basic (w/ description)**

```jsx
<Switch
    description="This is an uncontrolled switch with a description"
    name="Switch-example-2"
    label="Uncontrolled Switch"
/>
```

**Right Aligned**

```jsx
<Switch
    description="This is a right aligned uncontrolled switch"
    name="Switch-example-3"
    isRightAligned
    label="Right Aligned Switch"
/>
```

**Controlled**

```jsx
const [checked, setChecked] = React.useState(false);

<>
    <Switch
        checked={checked}
        description="This is a controlled switch"
        name="Switch-example-4"
        label="Controlled Switch"
        onChange={() => setChecked(!checked)}
    />
    <Switch
        checked={!checked}
        description="This is a controlled switch with an inverse value"
        name="Switch-example-5"
        label="Inverted Controlled Switch"
        onChange={() => setChecked(!checked)}
    />
</>;
```

**Disabled**

```jsx
<Switch disabled name="Switch-example-6" label="Disabled Switch" />
```
