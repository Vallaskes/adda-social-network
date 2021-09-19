import React from "react";
import style from './select.module.scss';
import './select.scss';

const Option = (props) => {
    return <option value={props.value}>{props.value}</option>
};

const Select = (props) => {
    return (
        <div className={`${props.className} ${style.selectBlock}`}>
            <select name={props.name} id={props.id}>
                {props.values}
            </select>
        </div>
    )
};

export {Select, Option};