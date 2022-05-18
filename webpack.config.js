import * as path from 'path';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = fs.readdirSync(path.resolve(__dirname, 'examples', 'items'));

const examples = {};
for (const ex of list.map((file) => ({ file, name: path.parse(file).name })))
    examples[ex.name] = path.join(__dirname, 'examples', 'items', ex.file);

export default {
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
                    path.resolve(__dirname, 'node_modules/expo-dev-menu/vendored/react-native-safe-area-context/src')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                'module:metro-react-native-babel-preset'
                            ],
                            plugins: [
                                ['react-native-web', { commonjs: true }],
                            ]
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
                        esModule: false,
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
        ...Object.keys(examples).map((ex) => new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'examples', 'native.html'),
            templateParameters: { file: ex },
            filename: `${ex}.html`,
            inject: false
        }))
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
            'react-native-settings-screen$': path.resolve(__dirname, 'src'),
            'react-native$': 'react-native-web',
            '../Utilities/Platform': 'react-native-web/dist/exports/Platform',
            '../../Utilities/Platform': 'react-native-web/dist/exports/Platform',
            './Platform': 'react-native-web/dist/exports/Platform',
            './RCTAlertManager': 'react-native-web/dist/exports/Alert',
            'react-native-safe-area-context': 'expo-dev-menu/vendored/react-native-safe-area-context/src'
        }
    }
};