const path = require('path');
const argv = require('minimist')(process.argv.slice(2));
const express = require('express');
const cookieParser = require('cookie-parser');
const nextJs = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const payment = require('./payment');

const routes = require('../app/routes');

const dev = !!argv.dev;
const app = nextJs({
    dev,
    dir: 'src/app',
});

const handle = routes.getRequestHandler(app, ({ req, res, route, query }) => {
    app.render(req, res, route.page, query);
});

function createServer() {
    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    server.use(payment);
    server.use(cookieParser());

    server.use(
        '/static',
        express.static(path.join(__dirname, '../src/app/static'))
    );

    server.get('/status', (req, res) => {
        res.status(200).send({
            ok: true,
        });
    });

    server.use(handle);
    return server;
}

const server = createServer();
const prepareP = app.prepare().then(() => {
    server.listen(port, () => {
        server.keepAliveTimeout = 0;
    });
});

module.exports = {
    appServer: server,
    prepareP,
};
