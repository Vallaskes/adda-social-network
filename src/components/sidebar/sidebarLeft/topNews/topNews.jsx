import React from "react";
import style from "./topNews.module.scss";

let data = [
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-20.jpg',
        desc: 'Any one can join with us if you want',
        time: '2 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-18.jpg',
        desc: 'Any one can join with us if you want',
        time: '10 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-13.jpg',
        desc: 'Any one can join with us if you want',
        time: '20 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-17.jpg',
        desc: 'Any one can join with us if you want',
        time: '30 min ago',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-10.jpg',
        desc: 'Any one can join with us if you want',
        time: '40 min ago',
    },
];

const TopNews = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>Latest top news</h3>
            </div>
            <div className={style.news}>
                {
                    data.map(
                        item => {
                            return (
                                <div className={style.newsItem}>
                                    <div className={style.userAvatar}>
                                        <img src={item.img} alt="user avatar"/>
                                    </div>
                                    <div className={style.description}>
                                        <span>
                                            {item.desc}
                                        </span>
                                        <time>
                                            {item.time}
                                        </time>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};

export default TopNews;