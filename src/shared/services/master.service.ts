import { Injectable } from '@angular/core';

@Injectable()
export class MastersService {
    public sampleExample(): TextPair[] {
        return [
            { text: 'Sample1', value: '1' },
            { text: 'Sample2', value: '2' },
        ];
    }
}
