import React, { useState } from "react";
import "./Select.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import SearchIcon from "@mui/icons-material/Search";
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
  name: string;
  onChange?: (value: string) => void;
}
export const Select = (props: SelectProps) => {
  const [selectIsOpen, SetSelectIsOpen] = useState(false);
  // const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(props.value);
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
    // setInputValue(optionValue);
    // props.value=optionValue
    setSelectedOption(optionValue);
    if (props.onChange) {
      props.onChange(optionValue);
    }
    handleBlur();
  };

  // console.log(props.value, "props value");
  // console.log(selectedOption, "selected option");
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
        {...props}
      >
        <span style={{ width: "100%", padding: "8px" }}>
          {selectedOption ? selectedOption : props.placeholder}
        </span>
        {selectIsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>

      {/* The below is for Default variant */}

      {selectIsOpen == true ? (
        <div className="select-option-main">
          {/* conditional rendreing for search select */}
          {props.variant == "search select" && (
            <div className="select-search-input-div">
              <input
                type="text"
                className="select-search-input"
                placeholder={props.placeholder}
              />
              <div className="searchIcon-div">
                <SearchIcon />
              </div>
            </div>
          )}
          
          <div className="select-option-group" >
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
                      paddingRight: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {props.variant == "with Icon" && (
                      <span
                        style={{
                          paddingLeft: "8px",
                        }}
                      >
                        <GoogleIcon />
                      </span>
                    )}

                    <span style={{ paddingLeft: "8px" }}>{option.label}</span>
                  </span>
                </li>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* The below is for variant with icons */}

      {/* {props.variant == "with Icon" && selectIsOpen == true ? (
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
      ) : (
        <></>
      )} */}
    </div>
  );
};
