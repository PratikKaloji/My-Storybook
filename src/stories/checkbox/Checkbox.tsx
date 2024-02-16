import React from "react";

import "./Checkbox.css";
export interface props {
  label: string;
  checked: boolean;
  disabled: boolean;
}
export const Checkbox = (props: props) => {
    function disabled(props:props){
        console.log(props.disabled)
     return (props.disabled===true?"disabled":null)
    }
    
  return (
    <div className={`${disabled(props)}`}>
      <input
        type="checkbox"
        name=""
        id=""
        className={["input", "checked",disabled(props)].join(" ")}
        {...props}
      />
      <label htmlFor="" className={["label",disabled(props)].join(" ")} >
        {props.label}
      </label>
    </div>
  );
};
