import React, { ReactNode } from "react";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import "./input.scss";
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
  variant: "default" | "input1" | "success" | "warning" | "error";
  size: "sm" | "md" | "lg";
  disabled: boolean;
  Text: [];
  // error: boolean;
  // success: boolean;
  // warning: boolean;
  optional: boolean;
  // rightAligned: boolean;
  name: string;
  type: string;
  // type:
  //   | "text"
  //   | "password"
  //   | "date"
  //   | "datetime-local"
  //   | "email"
  //   | "number"
  //   | "tel"
  //   | "color"
  //   | "time"
  //   | "url"
  //   | "week";

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = (props: Props) => {
  function disabled(props) {
    // console.log(props.disabled)
    return props.disabled === true ? "disabled" : "";
  }
  // {console.log(props.error)}

  const condition =
    props.variant == "default"
      ? "default"
      : props.variant == "success"
      ? "success"
      : props.variant == "error"
      ? "error"
      : props.variant == "warning"
      ? "warning"
      : "";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // height: "55px",
        transition: "0.2s",
      }}
    >
      <label htmlFor="" className="label">
        {props.required ? <span>*</span> : <></>}
        {props.label}
        {props.optional ? <span>(Optional)</span> : <></>}
      </label>

      <input
        {...props}
        type={props.type}
        className={[props.variant, props.size, condition].join(" ")}
        placeholder={props.placeholder}
        name={props.name}
      />

      {condition == "error" ? (
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
      {condition == "success" ? (
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
      {condition == "warning" ? (
        <span
          className="msg"
          style={{ color: "#ffc600", fontSize: "12px", paddingLeft: "8px" }}
        >
          {props.Text}
        </span>
      ) : (
        <></>
      )}
      {props.disabled == true ? (
        <div>
          <InfoOutlinedIcon
            style={{ fontSize: "12px", color: "#e0e0e0", paddingLeft: "8px" }}
          />
          <span
            className={["msg", disabled(props)].join(" ")}
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
