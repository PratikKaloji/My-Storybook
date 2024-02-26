import React from "react";
import "./RadioButton1.css";

export interface Props {
  label: string;
  disabled: boolean;
  checked:boolean
}
export const RadioButton1 = (props: Props) => {
  function disabled(props: Props) {
    console.log(props.disabled);
    return props.disabled === true ? "disabledRadio" : null;
  }
  return (
    <div className={`${disabled(props)}`}>
      <input
        type="radio"
        name=""
        id=""
        className={["radioInput", "checked",disabled(props)].join(" ")}
        {...props}
      />
      <label htmlFor="" className={["radiolabel",disabled(props)].join(" ")} >
        {props.label}
      </label>
    </div>
  );
};
