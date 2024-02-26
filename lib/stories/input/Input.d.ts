import React, { ReactNode } from "react";
import "./Input.css";
export interface Props {
    children: ReactNode;
    /** used for adding custom label to the inputs */
    label: string;
    /** used for required fields */
    required: boolean;
    /**used for adding custom placeholders to the inputs  */
    placeholder: string;
    variant: "default" | "input1" | "success" | "warning" | "error";
    size: "sm" | "md" | "lg";
    disabled: boolean;
    Text: [];
    optional: boolean;
    name: string;
    type: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Input: (props: Props) => React.JSX.Element;
