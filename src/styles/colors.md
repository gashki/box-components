Color choices should meet [WCAG 2.0 AA guidelines](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) for accessibility.

| Role       | Min Contrast Ratio | Lightest Gray in Palette\* |
| ---------- | ------------------ | -------------------------- |
| Text       | 4.5:1              | `hui-gray-62`              |
| Icons      | 3:1                | `hui-gray-50`              |
| Large Text | 3:1                | `hui-gray-50`              |

\* _against white (#fff) background_

```jsx
const colors = require('./colors');
const swatches = {};

Object.entries(colors).forEach(([color, value]) => {
    const colorName = color.match(/[A-Z][a-z]+/g).join(' ');
    const sassName = color
        .match(/hui|[A-Z][a-z]+|\d+/g)
        .join('-')
        .toLowerCase();

    if (!swatches[colorName]) {
        swatches[colorName] = [];
    }

    swatches[colorName].push([sassName, value]);
});

Object.values(swatches).forEach(swatch => {
    swatch.sort((a, b) => {
        const aName = a[0];
        const aVariant = aName.split('-').pop();

        const bName = b[0];
        const bVariant = bName.split('-').pop();

        if (isNaN(aVariant)) {
            return -1;
        }

        if (isNaN(bVariant)) {
            return 1;
        }

        return (aName < bName) - (aName > bName);
    });
});

<div>
    {Object.entries(swatches).map(([colorName, swatch]) => (
        <div>
            <h4>{colorName}</h4>
            <div className="hui-colors-swatch">
                {swatch.map(([sassName, value]) => (
                    <div>
                        <div className="hui-colors-shade" style={{ backgroundColor: value }} />
                        <label>{`$${sassName} (${value})`}</label>
                    </div>
                ))}
            </div>
        </div>
    ))}
</div>;
```
