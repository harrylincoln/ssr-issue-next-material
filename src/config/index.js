const argv = require('minimist')(process.argv.slice(2));

const environment = argv.env || process.env.environment || 'local';

/* eslint-disable-next-line import/no-dynamic-require */
