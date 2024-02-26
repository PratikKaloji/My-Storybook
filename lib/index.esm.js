import React from 'react';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$6 = ".input {\r\n  width: 15px;\r\n  height: 15px;\r\n  cursor: pointer;\r\n  /* border-radius: 5px; */\r\n  accent-color: #434db8; /* used to change the color of the checkbox*/\r\n}\r\n.input:hover{\r\n  border-color: red;\r\n}\r\ninput:focus {\r\n  outline: none;\r\n  /* outline: 1px solid #434db8; */\r\n}\r\n/* input[type=\"checkbox\"]{\r\n  box-shadow: inset 0px 2px 3px 0px #e8ece8;\r\n} */\r\n\r\n/* input[type=checkbox]:hover{\r\n   border-color: #434db8;\r\n} */\r\n.checkboxlabel {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  color: #0f0e0e;\r\n  padding: 2px;\r\n  background-color: transparent;\r\n  position: relative;\r\n  bottom: 3px;\r\n}\r\n.disabled {\r\n  color: #e0e0e0;\r\n  /* background-color: red; */\r\n}\r\n.disabled:hover {\r\n  cursor: not-allowed;\r\n}\r\n/* \r\ninput[type=\"checkbox\"]:active {\r\n  background-color: white;\r\n  border: 1px solid rgb(77, 25, 221);\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.25);\r\n} */\r\n";
styleInject(css_248z$6);

var Checkbox = function (props) {
    function disabled(props) {
        console.log(props.disabled);
        return (props.disabled === true ? "disabled" : null);
    }
    console.log(props.checked);
    return (React.createElement("div", { className: "".concat(disabled(props)) },
        React.createElement("input", __assign({ type: "checkbox", name: "", id: "", className: ["input", "checked", disabled(props)].join(" ") }, props)),
        React.createElement("label", { htmlFor: "", className: ["checkboxlabel", disabled(props)].join(" ") }, props.label)));
};

var css_248z$5 = "select {\r\n  height: 35px;\r\n  width: 175px;\r\n  border-radius: 8px;\r\n  border: 0.5px solid #e0e0e0;\r\n}\r\n.dropdowndiv{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.dropdownlabel {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  color: #8f8e8e;\r\n  padding: 5px;\r\n}\r\nselect option {\r\n  height: inherit;\r\n  color: #8f8e8e;\r\n\r\n}\r\nselect option:hover{\r\n  background-color: #434DB8;\r\n  color: #fff;\r\n}\r\nselect:focus {\r\n  outline: none;\r\n  outline: 1px solid #434db8;\r\n}\r\n";
styleInject(css_248z$5);

var Dropdown = function (props) {
    return (React.createElement("div", { className: "dropdowndiv" },
        React.createElement("label", { htmlFor: "", className: "dropdownlabel" }, props.label),
        React.createElement("select", { name: "", id: "" },
            React.createElement("option", { value: "" }),
            React.createElement("option", { value: "" }, "sdfgh"),
            React.createElement("option", { value: "" }, "sdfgh"),
            React.createElement("option", { value: "" }, "sdfgh"))));
};

var css_248z$4 = "/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */\r\n\r\n/* CSS for input field*/\r\n\r\ninput {\r\n  width: 250px;\r\n  height: 35px;\r\n  font-size: 12 px;\r\n  font-family: \"Poppins\";\r\n  font-weight: Regular;\r\n  padding: 0px 8px;\r\n  border-radius: 8px;\r\n  /* border: 0.5px solid #e0e0e0; */\r\n  font-family: \"Poppins\", sans-serif;\r\n  /* color: #c4c3c3; */\r\n}\r\ninput:focus {\r\n  outline: none;\r\n  /* border: 1px solid #434db8 ; */\r\n}\r\n\r\n\r\ninput::placeholder {\r\n  color: #c4c3c3;\r\n  /* padding-left: 8px; */\r\n}\r\n\r\n/* CSS for label*/\r\n\r\n.label {\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 12px;\r\n  color: #8f8e8e;\r\n  padding: 5px;\r\n}\r\n.label span {\r\n  font-size: 12px;\r\n  padding-right: 2px;\r\n  /* margin-left: px; */\r\n  color: #c50303;\r\n}\r\n.msg {\r\n  padding-left: 6px;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\n/* CSS for variants*/\r\n.default {\r\n  border: 0.5px solid #e0e0e0;\r\n}\r\n.default:focus{\r\n  border: 0.5px solid #434db8;\r\n}\r\n.success {\r\n  border: 0.5px solid #5ca700;\r\n}\r\n.warning {\r\n  border: 0.5px solid #ffc600;\r\n}\r\n.input1 {\r\n  border: 0.5px solid #434db8;\r\n}\r\n.error {\r\n  border: 0.5px solid #c50303;\r\n  background-color: #e2bcbc;\r\n}\r\n.error {\r\n  border-bottom: 1px solid red;\r\n}\r\n.disabled {\r\n  /* background-color: #e0e0e0; */\r\n  border: 0.5px solid #e0e0e0 ;\r\n  color:#e0e0e0 ;\r\n  border: none;\r\n}\r\n.sm {\r\n  width: 100px;\r\n}\r\n.md {\r\n  width: 175px;\r\n}\r\n.lg {\r\n  width: 250px;\r\n}\r\nsup {\r\n  color: #c50303;\r\n}\r\n";
styleInject(css_248z$4);

var Input = function (props) {
    function disabled(props) {
        console.log(props.disabled);
        return (props.disabled === true ? "disabled" : "");
    }
    return (React.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            // height: "55px",
            transition: "0.2s",
        } },
        React.createElement("label", { htmlFor: "", className: "label" },
            props.required ? React.createElement("span", null, "*") : React.createElement(React.Fragment, null),
            props.label,
            props.optional ? React.createElement("span", null, "(Optional)") : React.createElement(React.Fragment, null)),
        React.createElement("input", __assign({}, props, { type: props.type, className: [props.variant, props.size,].join(" "), placeholder: props.placeholder, name: props.name })),
        props.error ? (React.createElement("div", null,
            React.createElement(DangerousOutlinedIcon, { style: { fontSize: "12px", color: "red", paddingLeft: "8px" } }),
            React.createElement("span", { className: "msg", style: { color: "red", fontSize: "12px", paddingLeft: "8px" } }, props.Text))) : (React.createElement(React.Fragment, null)),
        props.success ? (React.createElement("div", null,
            React.createElement(CheckCircleOutlineRoundedIcon, { style: { fontSize: "12px", color: "#5ca700", paddingLeft: "8px" } }),
            React.createElement("span", { className: "msg", style: { color: "#5ca700", fontSize: "12px", padding: "0px 5px" } }, props.Text))) : (React.createElement(React.Fragment, null)),
        props.warning ? (React.createElement("span", { className: "msg", style: { color: "#ffc600", fontSize: "12px", paddingLeft: "8px" } }, props.Text)) : (React.createElement(React.Fragment, null)),
        props.disabled ? (React.createElement("div", null,
            React.createElement(InfoOutlinedIcon, { style: { fontSize: "12px", color: "#e0e0e0", paddingLeft: "8px" } }),
            React.createElement("span", { className: ["msg", disabled(props)].join(" "), style: { color: "#e0e0e0", fontSize: "12px", paddingLeft: "8px" } }, props.Text))) : (React.createElement(React.Fragment, null))));
};

var css_248z$3 = ".radiolabel {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-size: 12px;\r\n    color: #0f0e0e;\r\n    padding: 2px;\r\n    background-color: transparent;\r\n    position: relative;\r\n    bottom: 2px;\r\n  }\r\n  .disabledRadio {\r\n    color: #e0e0e0;\r\n    /* background-color: red; */\r\n  }\r\n  .radioinput{\r\n      accent-color: #434db8;\r\n      height: 12px;\r\n      width: 12px;\r\n  }";
styleInject(css_248z$3);

var Radio = function (props) {
    function disabled(props) {
        console.log(props.disabled);
        return props.disabled === true ? "disabledRadio" : null;
    }
    console.log(props.value);
    return (React.createElement("div", { className: "".concat(disabled(props)), style: { width: "auto", display: "inline" } },
        React.createElement("input", __assign({ type: "radio", name: "", id: "", className: ["input", disabled(props)].join(" ") }, props)),
        React.createElement("label", { htmlFor: "", className: ["radiolabel", disabled(props)].join(" ") }, props.label)));
};

var css_248z$2 = ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n";
styleInject(css_248z$2);

/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, backgroundColor = _a.backgroundColor, label = _a.label, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (React.createElement("button", __assign({ type: "button", className: ['storybook-button', "storybook-button--".concat(size), mode].join(' '), style: { backgroundColor: backgroundColor } }, props), label));
};

var css_248z$1 = ".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n";
styleInject(css_248z$1);

var Header = function (_a) {
    var user = _a.user, onLogin = _a.onLogin, onLogout = _a.onLogout, onCreateAccount = _a.onCreateAccount;
    return (React.createElement("header", null,
        React.createElement("div", { className: "storybook-header" },
            React.createElement("div", null,
                React.createElement("svg", { width: "32", height: "32", viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("g", { fill: "none", fillRule: "evenodd" },
                        React.createElement("path", { d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z", fill: "#FFF" }),
                        React.createElement("path", { d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z", fill: "#555AB9" }),
                        React.createElement("path", { d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z", fill: "#91BAF8" }))),
                React.createElement("h1", null, "Acme")),
            React.createElement("div", null, user ? (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "welcome" },
                    "Welcome, ",
                    React.createElement("b", null, user.name),
                    "!"),
                React.createElement(Button, { size: "small", onClick: onLogout, label: "Log out" }))) : (React.createElement(React.Fragment, null,
                React.createElement(Button, { size: "small", onClick: onLogin, label: "Log in" }),
                React.createElement(Button, { primary: true, size: "small", onClick: onCreateAccount, label: "Sign up" })))))));
};

var css_248z = ".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n";
styleInject(css_248z);

var Page = function () {
    var _a = React.useState(), user = _a[0], setUser = _a[1];
    return (React.createElement("article", null,
        React.createElement(Header, { user: user, onLogin: function () { return setUser({ name: 'Jane Doe' }); }, onLogout: function () { return setUser(undefined); }, onCreateAccount: function () { return setUser({ name: 'Jane Doe' }); } }),
        React.createElement("section", { className: "storybook-page" },
            React.createElement("h2", null, "Pages in Storybook"),
            React.createElement("p", null,
                "We recommend building UIs with a",
                ' ',
                React.createElement("a", { href: "https://componentdriven.org", target: "_blank", rel: "noopener noreferrer" },
                    React.createElement("strong", null, "component-driven")),
                ' ',
                "process starting with atomic components and ending with pages."),
            React.createElement("p", null, "Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Use a higher-level connected component. Storybook helps you compose such data from the \"args\" of child component stories"),
                React.createElement("li", null, "Assemble data in the page component from your services. You can mock these services out using Storybook.")),
            React.createElement("p", null,
                "Get a guided tutorial on component-driven development at",
                ' ',
                React.createElement("a", { href: "https://storybook.js.org/tutorials/", target: "_blank", rel: "noopener noreferrer" }, "Storybook tutorials"),
                ". Read more in the",
                ' ',
                React.createElement("a", { href: "https://storybook.js.org/docs", target: "_blank", rel: "noopener noreferrer" }, "docs"),
                "."),
            React.createElement("div", { className: "tip-wrapper" },
                React.createElement("span", { className: "tip" }, "Tip"),
                " Adjust the width of the canvas with the",
                ' ',
                React.createElement("svg", { width: "10", height: "10", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("g", { fill: "none", fillRule: "evenodd" },
                        React.createElement("path", { d: "M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z", id: "a", fill: "#999" }))),
                "Viewports addon in the toolbar"))));
};

export { Button, Checkbox, Dropdown, Header, Input, Page, Radio };
//# sourceMappingURL=index.esm.js.map
