import React from "react";
import style from "./style.module.scss";
import Conf from "../../../conf/conf";

const DoubleHead = ({titlePage, doubleNavLink}) => {
    return (
        <div className={style.contain}>
            <div className={style.title}>{titlePage}</div>
            <div className={style.filter}>
                <ul>
                    {doubleNavLink}
                </ul>
            </div>
            <Conf/>
        </div>
    )
};

export default DoubleHead;