import React, { useState } from "react";
import "./Select.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { action } from "@storybook/addon-actions";
import classNames from "classnames";

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  label: string;
  variant: "Default" | "with Icon" | "search select";
  onBlur?: () => void;
  onFocus?: () => void;
  options: Option[];
  disabled: boolean;
  /** used for required fields */
  required: boolean;
  /**used for adding custom placeholders to the inputs  */
  placeholder: string;
  optional: boolean;
  value: string;
  onChange?: (value: string) => void;
}
export const Select = (props: SelectProps) => {
  const [selectIsOpen, SetSelectIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // console.log(props.value);
  const handleSelectOpen = () => {
    if (!selectIsOpen && props.disabled) {
      SetSelectIsOpen(false);
    } else if (selectIsOpen) {
      SetSelectIsOpen(false);
    } else {
      SetSelectIsOpen(true);
    }
  };
  const handleBlur = () => {
    // if (inputValue == "") {
    //   SetSelectIsOpen(true);
    //   console.log(inputValue)
    // }
    // else{
    //   SetSelectIsOpen(false);
    //   console.log(inputValue)

    // }
    SetSelectIsOpen(false);
  };
  // console.log(inputValue);
  // console.log(props.value);
  const disabled = props.disabled && "select-disabled";

  const handleClickOption = (optionValue: string) => {
    setInputValue(optionValue);
    // props.value=optionValue
    if (props.onChange) {
      props.onChange(optionValue);
    }
    handleBlur();
  };
  return (
    <div className="select-main-div">
      <label htmlFor="" className="storybook-select-label">
        {props.required && (
          <span className={classNames("storybook-label-span")}>*</span>
        )}
        {props.label}
        {props.optional && (
          <span className={classNames("storybook-label-span")}>(Optional)</span>
        )}
      </label>
      <div
        // className="select-inner-div"
        className={classNames(`select-inner-div`, `${disabled}`)}
        onClick={handleSelectOpen}
        // onBlur={handleBlur}
        onFocus={action("onFocus")}
        tabIndex={0}
      >
        <span style={{ width: "100%", padding: "8px" }}>{inputValue}</span>
        {selectIsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>
      {selectIsOpen == true && (
        <div className="select-option-group">
          {props.options.map((option) => {
            return (
              <li
                key={option.value}
                className="select-option"
                // {props.value=option.value}
                onClick={() => {
                  handleClickOption(option.value);
                  // console.log(option.value);
                }}
              >
                <span
                  style={{
                    paddingLeft: "8px",
                    paddingRight: "8px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <GoogleIcon />
                  <span style={{ paddingLeft: "8px" }}>{option.label}</span>
                </span>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};
