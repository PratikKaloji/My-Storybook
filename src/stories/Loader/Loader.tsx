import React from "react";
import "./Loader.scss";
import classNames from "classnames";
export interface LoaderProps {
  /** To Customize the color of the loader */
  color: string;
  /** To customize the height and width in pixel */
  loadersize: number;
}

const Loader = (props: LoaderProps) => {
  return (
    <span
      className={classNames("loader", `loader-size-${props.loadersize}`)}
      {...props}
      style={{
        borderTopColor: `${props.color}`,
        height: `${props.loadersize}px`,
        width: `${props.loadersize}px`,
      }}
    ></span>
  );
};

export default Loader;
