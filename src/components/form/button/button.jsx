import React from "react";
import style from "./button.module.scss";
import "./button.scss"

const Button = (props) => {
    return (
        <button className={`${props.className} ${style.button}`}>
            {props.text}
        </button>
    )
};

export default Button;