import React from "react";
import style from './select.module.scss';

const Option = (props) => {
    return <option selected={props.selected} value={props.option}>{props.option}</option>
};

const Select = ({className, color, name, values, value, id, half = null }) => {
    return (
        <div className={`${style.selectBlock} ${style[color]} ${half ? style.half : ''} ${className}`}>
            <select name={name} id={id}>
                {values.map((option, key) => (
                    <Option key={key} selected={option === value} option={option} />
                ))}
            </select>
        </div>
    )
};

export default Select;