import { Injectable } from '@angular/core';

@Injectable()
export class TextPairHelperService {
    public getTextPairValue(pairs: TextPair[], text: string): string {
        if (!pairs || pairs.length === 0 || !text) {
            return undefined;
        }
        for (let i: number = 0; i < pairs.length; i++) {
            if (pairs[i].text === text) {
                return pairs[i].value;
            }
        }
        return undefined;
    }
    public getTextPairText(pairs: TextPair[], value: string): string {
        if (!pairs || pairs.length === 0 || !value) {
            return undefined;
        }
        for (let i: number = 0; i < pairs.length; i++) {
            if (pairs[i].value === value) {
                return pairs[i].text;
            }
        }
        return undefined;
    }
}
