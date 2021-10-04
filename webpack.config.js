module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            modules: true
                        },
                    },
                    {
                        loader: require.resolve("sass-loader"),
                        options: {
                            sassOptions: {
                                includePaths: ["node_modules"],
                            },
                        },
                    }
                ],
            },
        ],
    },
};
