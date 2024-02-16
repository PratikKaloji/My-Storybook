import React, { HTMLAttributes, ReactNode } from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import "./Input.css";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export interface Props {
  children: ReactNode;
  /** used for adding custom label to the inputs */
  label: string;
  /** used for required fields */
  required: boolean;
  /**used for adding custom placeholders to the inputs  */
  placeholder: string;
  variant: "default" | "input1" | "success" | "warning" | "error" | "disabled";
  size: "sm" | "md" | "lg";
  disabled: boolean;
  Text: [];
  error: boolean;
  success: boolean;
  warning: boolean;
  optional: boolean;
  rightAligned: boolean;
}
export const Input = (props : Props) => {
  function disabled(props){
    console.log(props.disabled)
 return (props.disabled===true?"disabled":"")
}
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "55px",
        transition: "0.2s",
      }}
    >
      <label htmlFor="">
        {props.required ? <span>*</span> : <></>}
        {props.label}
        {props.optional ? <span>(Optional)</span> : <></>}
      </label>
      <input
        type="text"
        {...props}
  
        className={[props.variant, props.size,].join(" ")}
        placeholder={props.placeholder}
      />
      {props.error ? (
        <div>
          <DangerousOutlinedIcon
            style={{ fontSize: "12px", color: "red", paddingLeft: "8px" }}
          />
          <span
            className="msg"
            style={{ color: "red", fontSize: "12px", paddingLeft: "8px" }}
          >
            {props.Text}
          </span>
        </div>
      ) : (
        <></>
      )}
      {props.success ? (
        <div>
          <CheckCircleOutlineRoundedIcon
            style={{ fontSize: "12px", color: "#5ca700", paddingLeft: "8px" }}
          />
          <span
            className="msg"
            style={{ color: "#5ca700", fontSize: "12px", padding: "0px 5px" }}
          >
            {props.Text}
          </span>
        </div>
      ) : (
        <></>
      )}
      {props.warning ? (
        <span
          className="msg"
          style={{ color: "#ffc600", fontSize: "12px", paddingLeft: "8px" }}
        >
          {props.Text}
        </span>
      ) : (
        <></>
      )}
      {props.disabled ? (
        <div >
          <InfoOutlinedIcon
            style={{ fontSize: "12px", color: "#e0e0e0", paddingLeft: "8px" }}
          />
          <span className={["msg",disabled(props)].join(" ")}
            style={{ color: "#e0e0e0", fontSize: "12px", paddingLeft: "8px" }} 
          >
            {props.Text}
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
