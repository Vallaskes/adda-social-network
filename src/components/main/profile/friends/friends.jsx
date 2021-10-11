import style from "./style.module.scss";
import React from "react";

let friend = [
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-1.jpg',
        name: 'Kate Midiltoin',
        status: 'Added',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-4.jpg',
        name: 'Jon Wileyam',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-7.jpg',
        name: 'William Henry',
        status: 'Friend request sent',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-22.jpg',
        name: 'Kate Midiltoin',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-10.jpg',
        name: 'Omio Morganik',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-13.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-18.jpg',
        name: 'Erik Jonson',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-25.jpg',
        name: 'Peter Looks',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-16.jpg',
        name: 'Jhon Doe',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-12.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-9.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-17.jpg',
        name: 'Musa Kollins',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-11.jpg',
        name: 'Petter Jhon',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-20.jpg',
        name: 'Henry William',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-32.jpg',
        name: 'Cristian Paul',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-31.jpg',
        name: 'Willson Merry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-29.jpg',
        name: 'Jhonsina Boss',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-26.jpg',
        name: 'William Jowel',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-19.jpg',
        name: 'Ashim Pual',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-23.jpg',
        name: 'Barak Obama',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-1.jpg',
        name: 'Kate Midiltoin',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-4.jpg',
        name: 'Jon Wileyam',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-7.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-22.jpg',
        name: 'Kate Midiltoin',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-10.jpg',
        name: 'Omio Morganik',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-13.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-18.jpg',
        name: 'Erik Jonson',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-25.jpg',
        name: 'Peter Looks',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-16.jpg',
        name: 'Jhon Doe',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-12.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-9.jpg',
        name: 'William Henry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-17.jpg',
        name: 'Musa Killins',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-11.jpg',
        name: 'Petter Jhon',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-20.jpg',
        name: 'Henry William',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-32.jpg',
        name: 'Cristian Paul',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-31.jpg',
        name: 'Willson Merry',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-29.jpg',
        name: 'Jhonsina Boss',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-26.jpg',
        name: 'William Jowel',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-19.jpg',
        name: 'Ashim Pual',
        status: 'Add friend',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-23.jpg',
        name: 'Barak Obama',
        status: 'Add friend',
    },
];

const Friends = ({mini}) => {
    return (
        <div className={`${style.friendsContainer} ${mini ? style.mini : ''}`}>
            {
                mini ? <div className={style.title}><h3>Friends</h3></div> : ''
            }
            <div className={style.friends}>
                {
                    friend.map(
                        item => {
                            return (
                                <div className={style.friendItem}>
                                    <div className={style.avatar}>
                                        <img src={item.img} alt={`${item.name} avatar`}/>
                                    </div>
                                    <div>
                                        <div className={style.name}>{item.name}</div>
                                        <div className="status">{item.status}</div>
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

export default Friends;