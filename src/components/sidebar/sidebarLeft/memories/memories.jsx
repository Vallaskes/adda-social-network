import React from "react";
import style from "./style.module.scss";

let data = [
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-1.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-2.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-3.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-4.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-5.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-6.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-7.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-8.jpg',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/gallery/gallery-9.jpg',
    },
];

const SweetsMemories = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>Sweets Memories</h3>
            </div>
            <div className={style.memories}>
                {
                    data.map(
                        item => {
                            return (
                                <div className={style.memory}>
                                    <img src={item.img} alt="memory"/>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};

export default SweetsMemories;