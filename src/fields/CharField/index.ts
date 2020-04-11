import {Field} from "../Field";
import {CharFieldOptions} from "./CharFieldOptions";

export class CharField extends Field {
    readonly options: CharFieldOptions;

    constructor(options: CharFieldOptions) {
        super(options);
        this.options = options;
    }
}
