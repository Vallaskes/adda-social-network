import style from "./like.module.scss";
import React from "react";

const Like = ({uLike, active}) => {
    return (
        <span className={`${style.heart} ${uLike ? style.active : ''}`} />
    )
};

export default Like;