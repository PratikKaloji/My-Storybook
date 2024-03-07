import React from "react";
import "./Loader.scss";
export interface LoaderProps {
    /** To customize the height and width in pixel */
    loadersize: number;
    variant: "Default" | "Loader1" | "Loader2" | "Loader3";
    /**To customize the border width of the loader */
    borderWidth: number;
}
export declare const Loader: (props: LoaderProps) => React.JSX.Element;
