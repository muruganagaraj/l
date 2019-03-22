/* tslint:disable: no-input-rename */
/* tslint:disable: no-any */
import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { RegularExpressions } from '../constants/regular-expressions';

@Directive({
    selector: '[attorney-first-allow-only]'
})
export class AllowOnlyDirective {
    @Input('attorney-first-allow-only') allowOnly: string;
    parts: any;
    allowedCodes: any;
    private ssnType: string = 'ssn';
    private phoneTye: string = 'phone';
    private isAndroid: boolean = false;
    constructor(private element: ElementRef) {
        this.isAndroid = this.isChromeAndroid();
    }

    @HostListener('keypress', ['$event']) onKeyPress(event: any): void {
        const e = <KeyboardEvent>event;
        const key = <KeyboardEvent>event;
        if (this.allowOnly) {
            this.setAllowedCodes();
            this.restrictCharacters(e.which, key);
        }
    }

    @HostListener('paste', ['$event']) onPaste(event: any): void {
        let pastedText: string = this.getPastedText(event);
        if (event.target.getAttribute('maxlength') && pastedText && pastedText.length > +event.target.getAttribute('maxlength')) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (event.target.hasAttribute('ssn-number')) {
            pastedText = this.allowedFormatCheck(pastedText, event, this.ssnType);

        } else if (event.target.hasAttribute('phone-number')) {
            pastedText = this.allowedFormatCheck(pastedText, event, this.phoneTye);

        }
        this.generalValidationForAllowOnly(pastedText, event, true);
    }
    @HostListener('input', ['$event'])
    handleInput(event: any): void {
        if (this.isAndroid) {
            const keyCode: number = this.getNewKeyCode(event.target.value.replace(event.data, ''), event.target.value);
            if (this.allowOnly) {
                this.setAllowedCodes();
                this.restrictCharacters(keyCode, event);
            }
        }
    }

    public getAllowedCodes(allowed: string): number[] {
        switch (allowed) {
            case 'numbers': return this.getRange(48, 57);
            case 'characters': return this.getRange(65, 90).concat(this.getRange(97, 122));
            case 'uppercase': return this.getRange(65, 90);
            case 'lowercase': return this.getRange(97, 122);
            case 'spaces': return [32];
            case 'dots': return [46];
            case 'dashes': return [45];
            case 'commas': return [44];
            default: return [];
        }
    }

    public getRange(start: number, end: number): number[] {
        const range: number[] = [];
        for (let i: number = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    }

    public restrictCharacters(keyCode: number, event: any): void {
        if (!this.allowedCodes.some((code: number) => code === keyCode)) {
            if (this.isAndroid) {
                if (!(keyCode === 8 || keyCode === 0 || keyCode === 46)) {
                    const selectionstart: number = event.target.selectionStart;
                    this.element.nativeElement.value = this.element.nativeElement.value.replace(event.data, '');
                    // this.modal.reset(this.element.nativeElement.value);
                    this.element.nativeElement.setSelectionRange(selectionstart, selectionstart);
                }
            } else {
                if (keyCode === 8 || keyCode === 0) {
                    event.defaultPrevented = false;
                } else {
                    event.preventDefault();
                }
            }
        }
    }

    public getPastedText(e: any): string {
        let clipboardData: any = e['clipboardData'];
        if (clipboardData === undefined) {
            clipboardData = window['clipboardData'];
        }
        if (!clipboardData || !clipboardData.getData || !clipboardData.getData('text')) {
            return undefined;
        }
        if (/text\/html/.test(clipboardData.types)) {
            return clipboardData.getData('text/html');
        }
        if (/text\/plain/.test(clipboardData.types)) {
            return clipboardData.getData('text/plain');
        }
        if (clipboardData.getData('text')) {
            return clipboardData.getData('text');
        }
        return undefined;
    }

    public textContainsOnlyValidCodes(text: string, codes: number[]): boolean {
        let code: number;
        for (let i: number = 0; i < text.length; i++) {
            code = text.charCodeAt(i);
            if (!codes.some((c: number) => c === code)) {
                return false;
            }
        }
        return true;
    }
    private setAllowedCodes(): void {
        this.parts = this.allowOnly.split(' ')
            .filter((part: string): boolean => Boolean(part));
        this.allowedCodes = this.parts.reduce((codes: any, part: string) => codes.concat(this.getAllowedCodes(part)), [13]);
    }

    private allowedFormatCheck(pastedText: string, event: any, type: string): string {
        const maxLength: number = this.getMaxLength(type);
        if (pastedText && pastedText.replace(/-/g, '').length !== maxLength) {
            event.stopPropagation();
            event.preventDefault();
        } else {
            if ((RegularExpressions.phoneValidation.test(pastedText) && type === this.phoneTye) ||
                (RegularExpressions.ssnValidation.test(pastedText) && type === this.ssnType)) {
                this.allowOnly = this.allowOnly + ' dashes';
            } else {
                const isValidNumber: boolean = this.generalValidationForAllowOnly(pastedText, event);
                if (isValidNumber) {
                    pastedText = this.transformPhoneSsn(pastedText, type);
                    if (event.currentTarget.attributes['ng-reflect-model']) {
                        event.currentTarget.attributes['ng-reflect-model'].nodeValue = pastedText;
                    }
                    this.element.nativeElement.value = pastedText;
                } else {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
        }
        return pastedText;
    }
    private transformPhoneSsn(value: string, type: string): string {
        let formattedText = '';
        switch (type) {
            case this.phoneTye:
                formattedText = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                break;
            case this.ssnType:
                formattedText = value.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3');
                break;
        }
        return formattedText;
    }
    private generalValidationForAllowOnly(pastedText: string, event: any, isCalledFromPasteEvent: boolean = false): boolean {
        this.parts = this.allowOnly.split(' ')
            .filter((part: string): boolean => Boolean(part));
        this.allowedCodes = this.parts.reduce(
            (codes: any, part: string) => codes.concat(this.getAllowedCodes(part)), [13]);
        if ((pastedText && !this.textContainsOnlyValidCodes(pastedText, this.allowedCodes))
            || (isCalledFromPasteEvent && !pastedText)) {
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        return true;
    }
    private getMaxLength(type: string): number {
        let maxLength: number = 0;
        switch (type) {
            case this.phoneTye:
                maxLength = 10;
                break;
            case this.ssnType:
                maxLength = 9;
                break;
        }
        return maxLength;
    }
    private isChromeAndroid(): boolean {
        return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    }
    private getNewKeyCode(oldString: string, newString: string): number {
        if (oldString.length > newString.length) {
            return null;
        }
        for (let x = 0; x < newString.length; x++) {
            if (oldString.length === x || oldString[x] !== newString[x]) {
                return newString.charCodeAt(x);
            }
        }
        return null;
    }
}
