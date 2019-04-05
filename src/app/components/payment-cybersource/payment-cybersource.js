import './payment-cybersource.scss';

import PropTypes from 'prop-types';
import React from 'react';

export default class PaymentCybersource extends React.Component {
    static propTypes = {
        paymentApiUrl: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        forename: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        addressLine1: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
    };

    static buildUrl(baseUrl, data) {
        // TODO: send data via POST
        // TODO: add CSRF random key
        const params = Object.entries(data)
            .map(([name, value]) => `${name}=${encodeURIComponent(value)}`)
            .join('&');
        return `${baseUrl}?${params}`;
    }

    render() {
        const {
            paymentApiUrl,
            amount,
            currency,
            email,
            forename,
            surname,
            addressLine1,
            city,
            country,
            postalCode,
        } = this.props;

        return (
            <div
                style={{
                    margin: '0 -1rem',
                }}
            >
                <iframe
                    id="payment_frame"
                    style={{
                        padding: 0,
                        margin: 0,
                        border: 0,
                        height: '570px',
                        width: '100%',
                    }}
                    title="Payment"
                    src={PaymentCybersource.buildUrl(paymentApiUrl, {
                        amount,
                        currency,
                        email,
                        forename,
                        surname,
                        addressLine1,
                        city,
                        country,
                        postalCode,
                    })}
                />
            </div>
        );
    }
}
