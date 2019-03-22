import { Pipe, PipeTransform } from '@angular/core';

// In content.html use:
// <div [innerHTML]="property | phonenumber: 'XXX-XXX-XXXX'"></div>
// EX: {{property | phonenumber: 'XXX-XXX-XXXX'}}

@Pipe({
    name: 'phonenumber'
})
export class PhoneNumberPipe implements PipeTransform {
    private readonly defaultPipe: string = 'XXX-XXX-XXX';

    transform(value: string, args?: string): string {
        if (value) {
            return this.createPhoneFormat(value, args);
        }
        return undefined;
    }

    public createPhoneFormat(input: string, args: string): string {
        let position = 0;
        args = args || this.defaultPipe;
        return Array.from(args).map((element: string) => {
            if (element === 'X') {
                element = input[position];
                position++;
            }
            return element;
        }).join('');
    }
}
