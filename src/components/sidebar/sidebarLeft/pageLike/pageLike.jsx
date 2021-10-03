import React from "react";
import style from "./pageLike.module.scss";
import Like from "../../../like/like";

let data = [
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-1.jpg',
        hvg: 'Travel The World',
        cat: 'Adventure',
        like: true,
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-10.jpg',
        hvg: 'Foodcort Nirala',
        cat: 'Food',
        like: false,
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-5.jpg',
        hvg: 'Rolin Theitar',
        cat: 'Drama',
        like: false,
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-35x35-4.jpg',
        hvg: 'Active Mind',
        cat: 'Fitness',
        like: false,
    },
];

const PageLike = ({className}) => {
    return (
        <div className={`${style.paddingBlock} ${className}`}>
            <div className={style.titleBlock}>
                <h3>Page You May Like</h3>
            </div>
            <div className={style.likeFriends}>
                {
                    data.map(
                        item => {
                            return (
                                <div className={style.likeItem}>
                                    <div className={style.userAvatar}>
                                        <img src={item.img} alt="user avatar"/>
                                    </div>
                                    <div>
                                        <div className={style.heaving}>{item.hvg}</div>
                                        <div className={style.category}>{item.cat}</div>
                                    </div>
                                    <Like uLike={item.like}/>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
};

export default PageLike;