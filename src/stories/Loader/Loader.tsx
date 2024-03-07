import React from "react";
import "./Loader.scss";
import classNames from "classnames";
export interface LoaderProps {
  /** To customize the height and width in pixel */
  loadersize: number;

  variant: "Default" | "Loader1" | "Loader2" | "Loader3";
  /**To customize the border width of the loader */
  borderWidth: number;
}

export const Loader = (props: LoaderProps) => {
  return (
    <span
      className={classNames(
        "loader",
        `loader-${props.variant}`,
        `loader-size-${props.loadersize}`
      )}
      {...props}
      style={{
        height: `${props.loadersize}px`,
        width: `${props.loadersize}px`,
        borderWidth: `${props.borderWidth}px `,
      }}
    >
      {props.variant === "Default" && (
        <span
          className={classNames(
            "inner-loader",
            `inner-loader-size-${props.loadersize}`
          )}
          {...props}
          style={{
            height: `${props.loadersize - 10}px`,
            width: `${props.loadersize - 10}px`,
            borderRightWidth: `${props.borderWidth}px`,
            borderLeftWidth: `${props.borderWidth}px`,
            // borderWidth:`${props.borderWidth}px`
          }}
        ></span>
      )}
    </span>
  );
};
