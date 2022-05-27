const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const exec = require('child_process');

const list = fs.readdirSync(path.resolve(__dirname, 'examples', 'items'));

const buildGitHash = exec.execSync('git rev-parse --short HEAD').toString().trimEnd();
const buildDate = exec.execSync('date -u +"%Y-%m-%d"').toString().trimEnd();

const examples = {};
for (const ex of list.map((file) => ({file, name: path.parse(file).name})))
    examples[ex.name] = path.join(__dirname, 'examples', 'items', ex.file);

module.exports = {
    entry: {
        main: './examples/index.tsx',
        ...examples
    },
    module: {
        rules: [
            {
                test: /.[tj]sx?$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'examples'),
                    path.resolve(__dirname, 'node_modules/react-native'),
                    path.resolve(__dirname, 'node_modules/@react-native'),
                    path.resolve(__dirname, 'node_modules/@react-navigation'),
                    path.resolve(
                        __dirname,
                        'node_modules/expo-dev-menu/vendored/react-native-safe-area-context/src'
                    )
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: ['module:metro-react-native-babel-preset'],
                            plugins: [['react-native-web', {commonjs: true}]]
                        }
                    },
                    {
                        loader: './examples/native-loader.cjs'
                    }
                ]
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        esModule: false
                    }
                }
            },
            {
                test: /\.md$/,
                use: ['html-loader', 'markdown-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'examples', 'index.html'),
            inject: false
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version),
            __BUILD_GITHASH__: JSON.stringify(buildGitHash),
            __BUILD_DATE__: JSON.stringify(buildDate)
        }),
        ...Object.keys(examples).map(
            (ex) =>
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, 'examples', 'native.html'),
                    templateParameters: {file: ex},
                    filename: `${ex}.html`,
                    inject: false
                })
        )
    ],
    devServer: {
        port: 8040
    },
    output: {
        filename: 'bundle.[name].web.js',
        path: path.resolve(__dirname, 'docs')
    },
    resolve: {
        extensions: ['.ts', '.tsx', 'web.js', '.js'],
        alias: {
            '@mmomtchev/react-native-settings$': path.resolve(__dirname, 'src'),
            'react-native$': 'react-native-web',
            'react-native-safe-area-context':
                'expo-dev-menu/vendored/react-native-safe-area-context/src'
        }
    }
};
