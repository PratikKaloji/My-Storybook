import React from "react";
import "./Checkbox.css";
export interface props {
    label: string;
    checked: boolean;
    disabled: boolean;
    onChange: (checked: boolean) => void;
}
export declare const Checkbox: (props: props) => React.JSX.Element;
