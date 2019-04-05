/* eslint-disable  import/no-dynamic-require */
const withPlugins = require('next-compose-plugins');
const withSCSS = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const config = require('../config');

module.exports = withPlugins(
    [
        [withFonts, {}],
        [
            withSCSS,
            {
                cssModules: true,
                cssLoaderOptions: {
                    importLoaders: 1,
                    localIdentName: '[local]___[hash:base64:5]',
                },
                postcssLoaderOptions: {
                    parser: true,
                    autoprefixer: true,
                },
            },
        ],
    ],
    {
        distDir: '../../.next',
        pageExtensions: ['jsx', 'js'],
        exportPathMap() {
            return {
                '/': { page: '/index' },
            };
        },
        serverRuntimeConfig: config.server,
        publicRuntimeConfig: config.client,
        webpack(wpConfig) {
            // console.log('webpack config', config);
            return wpConfig;
        },
    }
);
