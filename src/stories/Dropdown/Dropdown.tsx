import React from "react";
import "./Dropdown.css";
export interface props {
  label: string;
  size: "sm" | "md" | "lg";
  placeholder: string;
}
export const Dropdown = (props: props) => {
  return (
    <select name="" id="" className="select-box">
      <option className="opt" value=""></option>
      <option value="">sdfgh</option>
      <option value="">sdfgh</option>
      <option value="">sdfgh</option>
    </select>
  );
};
