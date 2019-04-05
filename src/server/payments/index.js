const { getParameter } = require('../lib/parameter_store');
const {
    getCybersourceFrame,
    getCybersourceConfirmation,
} = require('./cybersource/index');

function fetchKey() {
    return getParameter({
        Name: '/case/ecomm/cybersource_secret',
        WithDecryption: true,
    });
}

module.exports.frame = async (data, config) => {
    const secretKey = process.env.CYBERSOURCE_SECRET_KEY || (await fetchKey());
    return getCybersourceFrame(data, config, secretKey);
};
module.exports.confirmation = async (data) => {
    const secretKey = process.env.CYBERSOURCE_SECRET_KEY || (await fetchKey());
    return getCybersourceConfirmation(data, secretKey);
};
