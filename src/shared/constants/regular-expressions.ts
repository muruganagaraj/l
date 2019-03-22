export class RegularExpressions {
    public static emailValidation: RegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.[a-zA-Z]+([-.][a-zA-Z]+)*$/;
    public static regPassword: RegExp = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/;
    public static regsignupEmail: RegExp = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.(com|net|org)\b$/;
    public static urlRegex: RegExp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    public static regPasswordFormat: RegExp = /^.*(?=.{0,9})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!#$%.?:]).*$/;
    public static regForSpace: RegExp = /^.*(?=.*[\s]).*$/;
    public static phoneValidation: RegExp = /^\d{3}-\d{3}-\d{4}$/;
    public static ssnValidation: RegExp = /^\d{3}-\d{2}-\d{4}$/;
}
