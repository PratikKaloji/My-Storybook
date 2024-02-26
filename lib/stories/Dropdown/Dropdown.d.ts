import React from "react";
import "./Dropdown.css";
export interface props {
    label: string;
    size: "sm" | "md" | "lg";
    placeholder: string;
}
export declare const Dropdown: (props: props) => React.JSX.Element;
