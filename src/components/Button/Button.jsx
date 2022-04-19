import React from "react";

import styles from "./Button.module.css";

const Button = ({ type, className, onClick, children }) => {
    return (
        <button
            type={type ? type : "button"}
            className={`${styles.button} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
