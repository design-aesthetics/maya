const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const glob = require('glob');

const isLocalEnv = process.env.APP_ENV === 'local';
const shouldObfuscate = isLocalEnv && process.env.OBFUSCATOR_ENABLED === 'true';

mix.js('resources/js/app.js', 'public/js/c645ab8ff4f1949.js')
    .postCss('resources/css/app.css', 'public/css/7c3db942378cd88.css', [
        require('postcss-import'),
        tailwindcss,
        require('cssnano')({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true, // This option discards all comments
                    },
                },
            ],
        }),
    ])
    .webpackConfig({
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        ecma: 2016,
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2,
                            passes: 2,
                            drop_console: true,
                        },
                        format: {
                            comments: false,
                        },
                        mangle: true,
                        mangle: {
                            properties: true,
                        },
                        module: false,
                        keep_fnames: false,
                        keep_classnames: false,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true,
                        },
                    },
                }),
            ],
        },
        plugins: [
            new WebpackObfuscator({
                rotateStringArray: true,
                stringArray: true,
            }),
        ],
        stats: { children: true },
    })
    .version();
