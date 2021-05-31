const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/main.js",
        // vendors: "./src/js/vendors.js"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname,"dist"),
    },
    watch: false,
    watchOptions:{
        ignored: /node_modules/
    },
    module: {
        rules:[
            {
                test: /\.js$/,                
                exclude:/node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    /*"style-loader",*/
                    MiniCssExtractPlugin.loader,  /* Cambiar style-loader por este para tener archivos css */
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),
        new CopyPlugin({
            patterns: [                
                // { from: path.resolve(__dirname,"src","tmpl"), to: "tmpl" },
                // { from: path.resolve(__dirname,"src","libraries"), to: "libraries" },
                { from: "./src/index.html", to: "index.html" },
                // { from: "./src/helper.php", to: "helper.php" },
                // { from: "./src/getvideostream.php", to: "getvideostream.php" },
                // { from: "./src/mod_quantum_library.php", to: "mod_quantum_library.php" },
                // { from: "./src/mod_quantum_library.xml", to: "mod_quantum_library.xml" },                
            ],
        }),
    ],
};