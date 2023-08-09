const FraudScreeningMapper = require('../../../../../Gateway/Response/Mapper/FraudScreeningMapper');
const FraudScreening = require('../../../../../Gateway/Response/FraudScreening');

describe('Test mapper', () => {
    it('maps correctly', () => {
        let fraudScreeningMapper = new FraudScreeningMapper({
            scoring: '{SCORING}',
            result: '{RESULT}',
            review: '{REVIEW}'
        });

        expect(fraudScreeningMapper).toBeInstanceOf(FraudScreeningMapper);
        expect(() => {
            fraudScreeningMapper.mapResponseToModel();
        }).not.toThrow();
        expect(fraudScreeningMapper._modelObject).toStrictEqual(
            new FraudScreening({
                scoring: '{SCORING}',
                result: '{RESULT}',
                review: '{REVIEW}'
            })
        );
    });

    it('maps correctly with empty parameters', () => {
        let fraudScreeningMapper = new FraudScreeningMapper({});

        expect(fraudScreeningMapper).toBeInstanceOf(FraudScreeningMapper);
        expect(() => {
            fraudScreeningMapper.mapResponseToModel();
        }).not.toThrow();
        expect(fraudScreeningMapper._modelObject).toStrictEqual(new FraudScreening({}));
    });
});
