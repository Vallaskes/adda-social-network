import React from "react";
import style from "./style.module.scss";

let data = {
    userName: 'Erik Jhonson',
    description: 'I Don’t know how? But i believe that it is possible one day if i stay with my dream all time',
    work: 'Web Developer',
    home: 'Melbourne, Australia',
    position: 'Pulshar, Melbourne',
    interesting: 'Travel, Swimming',
};

const ProfileInfo = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>{data.userName}</h3>
            </div>
            <div className={style.description}>
                <p>{data.description}</p>
            </div>
            <div className={style.info}>
                <div className={style.work}>{data.work}</div>
                <div className={style.home}>{data.home}</div>
                <div className={style.position}>{data.position}</div>
                <div className={style.interesting}>{data.interesting}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;