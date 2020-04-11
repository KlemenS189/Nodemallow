import {CharField} from "./index";

describe('Tests CharField', () => {
    it('should produce no errors', () => {
        const field = new CharField({});
        field.validate('test value');
        expect(field.errors).toStrictEqual([])
    });
    it('should test required on undefined', () => {
        const field = new CharField({
            required: true
        });
        field.validate('');
        expect(field.errors).toStrictEqual(['Field is required'])
    });
});
