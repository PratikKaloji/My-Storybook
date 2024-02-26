import React from "react";
import "./Radio.css";

export interface Props {
  label: string;
  disabled: boolean;
  checked:boolean;
  value:string;
  onChange: (value: string) => void;
}
export const Radio = (props: Props) => {
  function disabled(props: Props) {
    // console.log(props.disabled);
    return props.disabled === true ? "disabledRadio" : null;
  }
  // console.log(props.value)
  return (
    <div className={`${disabled(props)}`} style={{width:"auto",display:"inline"}}> 
      <input
        type="radio"
        name=""
        id=""
        className={["input",disabled(props)].join(" ")}
        {...props}
      />
      <label htmlFor="" className={["radiolabel",disabled(props)].join(" ")} >
        {props.label}
      </label>
    </div>
  );
};
