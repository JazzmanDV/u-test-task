import React from "react";

import styles from "./Button.module.css";

const Button = ({ type, style, onClick, children }) => {
    return (
        <button type={type || "button"} style={style} className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
