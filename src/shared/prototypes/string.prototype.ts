String.prototype['allCapsToCamelCase'] = function (): string {
    return this.toLowerCase().replace(/_\w/g, (match: string) =>
        match[1].toUpperCase()
    );
};

String.prototype['endsWith'] = function (str: string): boolean {
    if (!str) {
        return true;
    }
    if (str.length > this.length) {
        return false;
    }
    return this.indexOf(str, this.length - str.length) === 0;
};

String.prototype['padLeft'] = function (width: number, padChar: string = ' '): string {
    const input: string = this as string;
    if (this.length >= width) {
        return input;
    } else {
        padChar = padChar || ' ';
        const content: string[] = [];
        content.length = width - input.length + 1;
        return content.join(padChar) + input;
    }
};

String.prototype['padRight'] = function (width: number, padChar: string = ' '): string {
    const input: string = this as string;
    if (this.length >= width) {
        return input;
    } else {
        padChar = padChar || ' ';
        const content: string[] = [];
        content.length = width - input.length + 1;
        return input + content.join(padChar);
    }
};

String.prototype['snakeCaseToCamelCase'] = function (): string {
    return this.replace(/\W+(.)/g, function (x: string, chr: string): string {
        return chr.toUpperCase();
    }).replace('-', '');
};

String.prototype['startsWith'] = function (str: string): boolean {
    if (!str) {
        return true;
    }
    if (str.length > this.length) {
        return false;
    }
    return this.indexOf(str) === 0;
};

interface String {
    allCapsToCamelCase(): string;
    endsWith(str: string): boolean;
    padLeft(width: number, padChar: string): string;
    padRight(width: number, padChar: string): string;
    snakeCaseToCamelCase(): string;
    startsWith(str: string): boolean;
}
