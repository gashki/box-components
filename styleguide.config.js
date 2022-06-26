module.exports = {
    title: 'Hinker UI',
    webpackConfig: {
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    test: /\.(jsx|tsx)?$/,
                },
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                },
            ],
        },
    },
};
