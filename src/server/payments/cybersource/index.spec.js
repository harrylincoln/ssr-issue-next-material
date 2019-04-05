/* eslint-disable no-global-assign,global-require */
const { getCybersourceFrame, getCybersourceConfirmation } = require('./index');

jest.mock('uuid/v4', () => () => 'uniq id');

describe('cybersource', () => {
    let config;
    let secretKey;
    beforeEach(() => {
        config = {
            cybersource: {
                url: 'http://someurl/pay',
                profileId: 'profile_id',
                accessKey: 'access_key',
            },
        };
        secretKey = 'cybersource_secret_key';
    });
    describe('Cybersource frame', () => {
        const origDate = Date;
        const dataStub = {
            addressLine1: '',
            amount: '',
            bill_to_address_state: '',
            city: '',
            country: '',
            currency: '',
            email: '',
            forename: '',
            postalCode: '',
            surname: '',
        };
        afterEach(() => {
            // noinspection JSUnresolvedVariable
            Date = origDate;
        });
        beforeEach(() => {
            // noinspection JSUnresolvedVariable
            Date = function _Date() {
                return {
                    getTime: () => 1000000000,
                    toISOString: () => 'iso date',
                };
            };
        });

        it('should set form action', () => {
            const frame = getCybersourceFrame(dataStub, config, secretKey);
            expect(frame).toContain(`action="${config.cybersource.url}"`);
        });
        it('should set access_key field', () => {
            const frame = getCybersourceFrame(dataStub, config, secretKey);

            expect(frame).toContain(
                `<input type="hidden" name="access_key" value="${
                    config.cybersource.accessKey
                }">`
            );
        });
        it('should set access_key field', () => {
            const frame = getCybersourceFrame(dataStub, config, secretKey);

            expect(frame).toContain(
                `<input type="hidden" name="profile_id" value="${
                    config.cybersource.profileId
                }">`
            );
        });
        it('should set signature field', () => {
            const frame = getCybersourceFrame(dataStub, config, secretKey);
            const signature = 'G6qpDQuzEmE3Oftjj8VOS6RQxqErWBDYXh8VbbD1qJg=';

            expect(frame).toContain(
                `<input type="hidden" name="signature" value="${signature}">`
            );
        });
        it('should set bill_to_forename field', () => {
            const frame = getCybersourceFrame(
                { ...dataStub, forename: 'forename' },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_forename" value="forename">'
            );
        });
        it('should set bill_to_surname field', () => {
            const frame = getCybersourceFrame(
                { ...dataStub, surname: 'surname' },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_surname" value="surname">'
            );
        });
        it('should set bill_to_email field', () => {
            const frame = getCybersourceFrame(
                { ...dataStub, email: 'email' },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_email" value="email">'
            );
        });
        it('should set bill_to_address_line1 field', () => {
            const frame = getCybersourceFrame(
                {
                    ...dataStub,
                    addressLine1: 'addressLine1',
                },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_address_line1" value="addressLine1">'
            );
        });
        it('bill_to_address_city', () => {
            const frame = getCybersourceFrame(
                { ...dataStub, city: 'city' },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_address_city" value="city">'
            );
        });
        it('should set bill_to_address_country field', () => {
            const frame = getCybersourceFrame(
                { ...dataStub, country: 'country' },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_address_country" value="country">'
            );
        });
        it('should set bill_to_address_postal_code field', () => {
            const frame = getCybersourceFrame(
                {
                    ...dataStub,
                    postalCode: 'postalCode',
                },
                config,
                secretKey
            );

            expect(frame).toContain(
                '<input type="hidden" name="bill_to_address_postal_code" value="postalCode">'
            );
        });
    });
    describe('Cybersource confirmation frame', () => {
        it('should return accepted payment', () => {
            const responseMock = require('./mocks/confirmation-response');

            const frame = getCybersourceConfirmation(responseMock, secretKey);

            expect(frame).toContain('"decision":"ACCEPT"');
        });
        it('should return error if signature is invalid', () => {
            const responseMock = require('./mocks/confirmation-response');

            const frame = getCybersourceConfirmation(
                {
                    ...responseMock,
                    signature: 'broken signature',
                },
                secretKey
            );

            expect(frame).toContain('"decision":"ERROR"');
        });
    });
});
