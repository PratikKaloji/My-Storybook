import React from "react";
import "./Select.scss";
interface Option {
    value: string;
    label: string;
}
export interface SelectProps {
    label: string;
    variant: "Default" | "with Icon" | "search select";
    onBlur?: () => void;
    onFocus?: () => void;
    options: Option[];
    disabled: boolean;
    /** used for required fields */
    required: boolean;
    /**used for adding custom placeholders to the inputs  */
    placeholder: string;
    optional: boolean;
    value: string;
    name: string;
    onChange?: (value: string) => void;
}
export declare const Select: (props: SelectProps) => React.JSX.Element;
export {};
