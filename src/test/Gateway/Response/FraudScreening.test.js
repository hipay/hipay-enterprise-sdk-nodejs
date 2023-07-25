const FraudScreening = require('../../../Gateway/Response/FraudScreening');

describe('Test constructor', () => {
    it('Initializes correctly', () => {
        let fraudScreening;

        expect(() => {
            fraudScreening = new FraudScreening({
                scoring: '{SCORING}',
                result: '{RESULT}',
                review: '{REVIEW}'
            });
        }).not.toThrow();

        expect(fraudScreening).toBeInstanceOf(FraudScreening);
        expect(fraudScreening.scoring).toEqual('{SCORING}');
        expect(fraudScreening.result).toEqual('{RESULT}');
        expect(fraudScreening.review).toEqual('{REVIEW}');
    });

    it('Initializes correctly with empty parameters', () => {
        let fraudScreening;

        expect(() => {
            fraudScreening = new FraudScreening({});
        }).not.toThrow();

        expect(fraudScreening).toBeInstanceOf(FraudScreening);
        expect(fraudScreening.scoring).toEqual(null);
        expect(fraudScreening.result).toEqual(null);
        expect(fraudScreening.review).toEqual(null);
    });

    it('Initializes correctly with no parameter', () => {
        let fraudScreening;

        expect(() => {
            fraudScreening = new FraudScreening();
        }).not.toThrow();

        expect(fraudScreening).toBeInstanceOf(FraudScreening);
        expect(fraudScreening.scoring).toEqual(null);
        expect(fraudScreening.result).toEqual(null);
        expect(fraudScreening.review).toEqual(null);
    });
});
