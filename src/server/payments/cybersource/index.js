const {
    buildDataToSign,
    signData,
    getStringToSign,
} = require('./cryptography');
const getFrame = require('./frame_template');
const getResponseTemplate = require('./response_template');

module.exports.getCybersourceFrame = (data, config, secretKey) => {
    const paymentData = buildDataToSign(data, config);
    paymentData.signature = signData(getStringToSign(paymentData), secretKey);
    return getFrame(paymentData);
};

module.exports.getCybersourceConfirmation = (responseData, secretKey) => {
    const signature = signData(getStringToSign(responseData), secretKey);

    if (responseData.signature !== signature) {
        return getResponseTemplate({
            response: {
                decision: 'ERROR',
                message: 'Incorrect signature',
            },
        });
    }

    return getResponseTemplate({ response: responseData });
};
