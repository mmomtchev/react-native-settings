import * as path from 'path';
import { fileURLToPath } from 'url';
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
                test: /(.[tj]sx?)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'examples'),
                    path.resolve(__dirname, 'node_modules/react-native'),
                    path.resolve(__dirname, 'node_modules/@react-native'),
                    path.resolve(__dirname, 'node_modules/@react-navigation'),
                    path.resolve(__dirname, 'node_modules/expo-dev-menu/vendored/react-native-safe-area-context/src')
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [
                            'module:metro-react-native-babel-preset'
                        ],
                        plugins: [
                            ['react-native-web', {commonjs: true}],
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