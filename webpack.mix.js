const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const domain = 'maya.test';
const homedir = require('os').homedir();

// BrowserSync configuration
mix.browserSync({
    proxy: 'https://' + domain,
    host: domain,
    open: 'external',
    https: {
        key: homedir + '/Library/Application Support/Herd/config/valet/Certificates/' + domain + '.key',
        cert: homedir + '/Library/Application Support/Herd/config/valet/Certificates/' + domain + '.crt'
    },
    notify: true,
    files: [
        'app/**/*.php',
        'resources/views/**/*.php',
        'public/js/**/*.js',
        'public/css/**/*.css'
    ]
});

// Define CSS styles
const styles = [
    { source: 'resources/css/app.css', destination: 'public/css/7c3db942378cd88.css' },
];

// Define JS scripts
const scripts = [
    { source: 'resources/js/app.js', destination: 'public/js/c645ab8ff4f1949.js' }, // app.js
    { source: 'resources/js/nav.js', destination: 'public/js/fa1193269f97e11fd3f4d2b61.js' }, // nav.js
    { source: 'resources/js/image-gallery.js', destination: 'public/js/e88123a276601a4fa85f35087.js' }, // img-gallery.js
    { source: 'resources/js/search.js', destination: 'public/js/fb2c0eb72db64a79b143b3f74.js' }, // search.js
    { source: 'resources/js/treatments.js', destination: 'public/js/809f166de994f9e9c9f58922b.js' }, // treatments.js
    { source: 'resources/js/footer.js', destination: 'public/js/7177edbb0f58bc0c3fd020636.js' }, // footer.js
    { source: 'resources/js/products.js', destination: 'public/js/0e214b8306743439e9c1a8f05.js' }, // products.js
    { source: 'resources/js/hero.js', destination: 'public/js/65ba7a4e46d2b859ca0e00022.js' }, // hero.js

];

// Loop through the scripts array and apply mix.js for each
scripts.forEach(({ source, destination }) => {
    mix.js(source, destination);
});

// cssnano configs
const cssnanoConfig = {
    preset: ['default', {
        discardComments: {
            removeAll: true,
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
                        comments: false, // false,
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
                        ascii_only: true, // true,
                    },
                },
            }),
        ],
    },
    plugins: [
        new WebpackObfuscator({
            log: false,
            rotateStringArray: true, // true,
            stringArray: true, // true,
        }),
    ],
    stats: { children: true },
})
    .version();
