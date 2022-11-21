const path = require('path');

const sections = [
    {
        name: 'Colors',
        content: 'src/styles/colors.md',
    },
    {
        name: 'Components',
        description: '',
        components: () => ['src/components/switch/Switch.tsx'],
        sectionDepth: 1,
        usageMode: 'expand',
    },
];

const getComponentPathLine = componentPath => {
    const componentDir = path.dirname(componentPath);
    const componentName = path.basename(componentPath, path.extname(componentPath));
    const relativePath = componentDir.replace(/\\/g, '/').replace(/(.*\/)?src\//, '');

    return `import ${componentName} from 'hinker-ui/es/${relativePath}/${componentName}';`;
};

module.exports = {
    getComponentPathLine,
    pagePerSection: true,
    require: ['/src/styles/examples.scss'],
    sections,
    title: 'Hinker UI',
    webpackConfig: {
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    test: /\.tsx?$/,
                },
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
    },
};
