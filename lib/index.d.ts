import React, { ReactNode } from 'react';

interface props$1 {
    label: string;
    checked: boolean;
    disabled: boolean;
    onChange: (checked: boolean) => void;
}
declare const Checkbox: (props: props$1) => React.JSX.Element;

interface props {
    label: string;
    size: "sm" | "md" | "lg";
    placeholder: string;
}
declare const Dropdown: (props: props) => React.JSX.Element;

interface Props$1 {
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
declare const Input: (props: Props$1) => React.JSX.Element;

interface Props {
    label: string;
    disabled: boolean;
    checked: boolean;
    value: string;
    onChange: (value: string) => void;
}
declare const Radio: (props: Props) => React.JSX.Element;

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    type: "primary" | "secondary" | "danger" | "success";
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**k
     * Button contents
     */
    label: string;
    disabled: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ type, size, backgroundColor, label, ...props }: ButtonProps) => React.JSX.Element;

declare const Page: React.FC;

type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => React.JSX.Element;

export { Button, Checkbox, Dropdown, Header, Input, Page, Radio };
