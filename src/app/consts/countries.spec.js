import countries, { convert, isValid } from './countries';

describe('countries', () => {
    it('should match snapshot', () => {
        expect(countries).toMatchSnapshot();
    });
    describe('isValid', () => {
        it('should return false if the country code is false', () => {
            const result = isValid('THIS IS NOT A VALID COUNTRY CODE', 'iso2');

            expect(result).toBe(false);
        });
        it('should return true for a valid country code', () => {
            const result = isValid('GBR', 'iso3');

            expect(result).toBe(true);
        });
    });
    describe('convert', () => {
        it('should return the correct format based on the input', () => {
            const result = convert('GBR', 'iso3', 'iso2');

            expect(result).toBe('GB');
        });
    });
});
