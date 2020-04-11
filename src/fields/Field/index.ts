import {FieldOptions} from "./FieldOptions";

export abstract class Field {
    readonly errors: string[] = [];
    readonly options: FieldOptions;

    protected constructor(options: FieldOptions) {
        this.options = options;
    }

    public validate = (valueToBeValidated: any): void => {
        if (this.options.required && !valueToBeValidated) {
            this.errors.push('Field is required')
        }
        if (!this.options.allowNull && valueToBeValidated === null) {
            this.errors.push('Field is required')
        }
    };
}
