import {Field} from "./fields/Field";

export class Schema {
    public fields: {[key: string]: Field} = {};
    public errors: string[] = [];

    public validate = (requestBody: {[key: string]: any}): void => {
        const entries = Object.entries(this.fields);
        for (const [key, field] of entries) {
            field.validate(requestBody[key]);
            this.errors = [...this.errors, ...field.errors]
        }
    }
}
