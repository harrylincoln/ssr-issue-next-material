const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

module.exports.signData = (data, secretKey) => {
    const buffData = Buffer.from(data);

    return crypto
        .createHmac('sha256', secretKey)
        .update(buffData.toString(), 'binary')
        .digest('base64');
};

module.exports.buildDataToSign = (data, config) => {
    const {
        amount,
        currency,
        email,
        forename,
        surname,
        addressLine1,
        city,
        country,
        postalCode,
    } = data;
    const currentDate = new Date();
    const dateToSign = `${currentDate.toISOString().split('.')[0]}Z`;
    const referenceNumber = currentDate.getTime();

    return {
        access_key: config.cybersource.accessKey,
        amount,
        bill_to_address_city: city,
        bill_to_address_country: country,
        bill_to_address_line1: addressLine1,
        bill_to_address_postal_code: postalCode,
        bill_to_address_state: '',
        bill_to_email: email,
        bill_to_forename: forename,
        bill_to_surname: surname,
        currency,
        locale: 'en',
        paymentEmbeddedURL: config.cybersource.url,
        profile_id: config.cybersource.profileId,
        reference_number: referenceNumber,
        signed_date_time: dateToSign,
        signed_field_names:
            'access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency',
        transaction_type: 'authorization,create_payment_token',
        transaction_uuid: uuidv4(),
        unsigned_field_names:
            'bill_to_forename,bill_to_surname,bill_to_email,bill_to_address_line1,bill_to_address_city,bill_to_address_country,bill_to_address_state,bill_to_address_postal_code',
    };
};

module.exports.getStringToSign = (data) =>
    data.signed_field_names
        .split(',')
        .map((field) => `${field}=${data[field]}`)
        .join(',');
