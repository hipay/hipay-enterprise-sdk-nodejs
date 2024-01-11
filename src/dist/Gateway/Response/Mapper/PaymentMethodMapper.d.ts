export = PaymentMethodMapper;
declare class PaymentMethodMapper extends AbstractMapper {
    mapModel(): {
        token: any;
        brand: any;
        pan: any;
        cardHolder: any;
        cardExpiryMonth: any;
        cardExpiryYear: any;
        cardId: any;
        issuer: any;
        country: any;
    };
}
import AbstractMapper = require("./AbstractMapper");
//# sourceMappingURL=PaymentMethodMapper.d.ts.map