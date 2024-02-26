import React from "react";
import "./Dropdown.css"
export interface props {
  label: string;
  size:"sm"|"md"| "lg"
  placeholder:string
}
export const Dropdown = (props:props) => {
  return (
    <div className="dropdowndiv">
      <label htmlFor="" className="dropdownlabel">{props.label}</label>
      <select name="" id="" >
        <option value=""></option>
        <option value="">sdfgh</option>
        <option value="">sdfgh</option>
        <option value="">sdfgh</option>
      </select>
    </div>
  );
};
