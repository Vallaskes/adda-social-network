import style from "./advertizement.module.scss";
import React from "react";

let data = {
    img: 'https://template.hasthemes.com/adda/adda/assets/images/banner/advertise.jpg',
};

const Advertizement = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>Advertizement</h3>
            </div>
            <div className={style.imgBlock}>
                <img src={data.img} alt="Advertizement"/>
            </div>
        </div>
    )
};

export default Advertizement;