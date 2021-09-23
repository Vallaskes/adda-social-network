import React from "react";
import style from "./button.module.scss";

const Button = ({className, text, color, full = null}) => {
    return (
        <button className={`${style.button} ${style[color]} ${full ? style.full : ''} ${className}`}>
            {text}
        </button>
    )
};

export default Button;