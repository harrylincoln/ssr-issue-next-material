import inlineConditional from '../inline-conditional';

describe('Inline Conditional', () => {
    it('should return truthy wrapped in an array when condition is true', () => {
        const result = inlineConditional(true, 'TRUTHY', 'FALSY');

        expect(result).toEqual(['TRUTHY']);
    });
    it('should return falsy wrapped in an array when condition is false', () => {
        const result = inlineConditional(false, 'TRUTHY', 'FALSY');

        expect(result).toEqual(['FALSY']);
    });
    it("should return empty array when condition is false and falsy isn't provided", () => {
        const result = inlineConditional(false, 'TRUTHY');

        expect(result).toEqual([]);
    });
});
