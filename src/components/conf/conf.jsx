import React from "react";
import style from "./style.module.scss";
import {NavLink} from "react-router-dom";

const dropdownMenu = (e) => {
    let dm = e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown;
    if (dm === 'hidden') {
        e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'visible'
    } else {
        e.target.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'hidden';
    }
};

let data = [
    {
        link: '#',
        text: 'Copy Link To Adda',
    },
    {
        link: '#',
        text: 'Edit Post',
    },
    {
        link: '#',
        text: 'Embed Adda',
    },
];

const Conf = () => {
    return (
        <div className={style.postMenu}>
            <div onClick={dropdownMenu} className={style.postMenuButton}>
                <span/>
                <span/>
                <span/>
            </div>
            <div data-dropdown="hidden" className={style.postMenuNav}>
                <ul>
                    {
                        data.map(
                            item => {
                                return (
                                    <li>
                                        <NavLink to={item.link}>{item.text}</NavLink>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
};

export default Conf;