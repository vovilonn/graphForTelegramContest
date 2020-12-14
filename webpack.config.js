const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        publicPath: "",
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    resolve: {
        extensions: [".js", ".json"],
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            // filename: "[name].[contenthash].html",
            template: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};
