const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


// Define CSS styles
const styles = [
    { source: 'resources/css/app.css', destination: 'public/css/7c3db942378cd88.css' },
];

// Define JS scripts
const scripts = [
    { source: 'resources/js/app.js', destination: 'public/js/c645ab8ff4f1949.js' }, // app.js
    { source: 'resources/js/nav.js', destination: 'public/js/fa1193269f97e11fd3f4d2b61.js' }, // nav.js

];

// Loop through the scripts array and apply mix.js for each
scripts.forEach(({ source, destination }) => {
    mix.js(source, destination);
});

// cssnano configs
const cssnanoConfig = {
    preset: ['default', {
        discardComments: {
            removeAll: false,
        },
        minifySelectors: false,
    }],
};

// Loop through the css scripts array and apply mix.js for each
styles.forEach(({ source, destination }) => {
    mix.postCss(
        source,
        destination,
        [
            require('postcss-import'),
            require('tailwindcss/nesting'),
            tailwindcss,
            require('cssnano')(cssnanoConfig),
        ]
    );
});


mix.webpackConfig({
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
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
                    mangle: false,
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
            rotateStringArray: false,
            stringArray: false,
        }),
    ],
    stats: { children: true },
})
    .version();
