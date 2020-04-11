import {Schema} from "./Schema";
import {CharField} from "./fields/CharField";

class TestSchema extends Schema {
    fields = {
        name: new CharField({})
    }
}

describe('It tests schema behaviour',() => {
    it('Smoke test', () => {
        const data = {
            name: 'john doe'
        };
        const schema: TestSchema = new TestSchema();
        schema.validate(data)
    });
});
