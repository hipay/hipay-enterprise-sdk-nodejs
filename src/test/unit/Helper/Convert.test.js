const Convert = require('../../../Helper/Convert');

describe('arrayKeysToCamelCase', () => {
    it('converts snake_case to camelCase', () => {
        expect(
            Convert.arrayKeysToCamelCase({
                source: 'source',
                source_1: 'source1',
                source2: 'source2',
                source_test_3: 'source3',
                source_4: {
                    sub_source_4: 'source4',
                    sub_source_4_bis: {
                        sub_source_4: 'source4'
                    }
                },
                source5: ['source5', 'source5'],
                source6: [
                    {
                        sub_source_6: 'source6',
                        sub_source_6_bis: [
                            {
                                sub_source_6: 'source6'
                            }
                        ]
                    }
                ]
            })
        ).toEqual({
            source: 'source',
            source1: 'source1',
            source2: 'source2',
            sourceTest3: 'source3',
            source4: {
                subSource4: 'source4',
                subSource4Bis: {
                    subSource4: 'source4'
                }
            },
            source5: ['source5', 'source5'],
            source6: [
                {
                    subSource6: 'source6',
                    subSource6Bis: [
                        {
                            subSource6: 'source6'
                        }
                    ]
                }
            ]
        });
    });
});
