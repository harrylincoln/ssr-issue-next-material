const express = require('express');
const config = require('../config');
const qs = require('qs');

const router = express.Router();
const { frame, confirmation } = require('./payments');

module.exports.frame = async (req, res) => {
    res.status(200);
    const response = await frame(req.query, config.server);
    res.send(response);
};

module.exports.confirmation = async (req, res) => {
    const responseData = qs.parse(req.body);
    const response = await confirmation(responseData);
    res.status(200);
    res.send(response);
};

router.use('/cybersource_frame', module.exports.frame);
router.use('/cybersource_confirmation', module.exports.confirmation);

module.exports = router;
