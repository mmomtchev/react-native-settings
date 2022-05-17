import * as path from 'path';
import { fileURLToPath } from 'url';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        main: './examples/index.tsx',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                }
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'node_modules/react-native'),
                    path.resolve(__dirname, 'node_modules/react-native-safe-area-context')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        /*presets: [
                            'module:metro-react-native-babel-preset'
                        ],*/
                        plugins: [
                            ['react-native-web', {commonjs: true}],
                            ['module-resolver', {alias: { '^react-native$': 'react-native-web' }}]   
                        ]
                    }
                }
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
        })
    ],
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(__dirname, 'doc')
    },
    resolve: {
        extensions: ['.ts', '.tsx', 'web.js', '.js'],
        alias: {
            '^react-native$': 'react-native-web',
            'react-native-settings-screen': './src'
        },
        plugins: [new TsconfigPathsPlugin()]
    },
};