interface TextValuePair<TValue> {
    text: string;
    value: TValue;
}

interface LabelValuePair<TValue> {
    label: string;
    value: TValue;
}

declare type LabelPair = LabelValuePair<string>;
declare type TextPair = TextValuePair<string>;
