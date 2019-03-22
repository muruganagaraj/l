export interface DictionaryModel {
    [key: string]: string;
}

export class Dictionary {
    dictionaryValues: DictionaryModel = {};

    constructor() { }

    // tslint:disable-next-line:no-any
    public setDictionary(key: string, value: any): any {
        this.dictionaryValues[key] = value;
    }
}
