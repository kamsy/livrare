import React from "react";
import PropTypes from "prop-types";
import { capitalizer } from "./utils";

const Button = ({ text, handler, extraClass, icon, ...props }) => (
    <button
        className={`d-flx al-i-c j-c-c custom-button ${extraClass || ""}`}
        onClick={e => {
            e.preventDefault();
            return handler();
        }}
        {...props}>
        {icon && (
            <span className="cmr-1" style={{ height: "18px", width: "18px" }}>
                {icon}
            </span>
        )}
        {capitalizer(text)}
    </button>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
    extraClass: PropTypes.string
};

export default Button;
