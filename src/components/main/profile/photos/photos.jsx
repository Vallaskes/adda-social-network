import React from "react";
import style from "./style.module.scss";

let albums = [
    {
        img: false,
        title: 'Create folder',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-7.jpg',
        title: 'Adda timeline',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-8.jpg',
        title: 'Upload',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-1.jpg',
        title: 'Office hangout',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-2.jpg',
        title: 'Dream land',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-3.jpg',
        title: 'Travel zone',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-4.jpg',
        title: 'Pure nature',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-5.jpg',
        title: 'Family tour',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-6.jpg',
        title: 'Chill zone',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-10.jpg',
        title: 'Food fun',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-9.jpg',
        title: 'Kitchen cook',
    },
    {
        img: 'https://template.hasthemes.com/adda/adda/assets/images/photos/photo-11.jpg',
        title: 'Gardening',
    },
];

const Photos = ({title}) => {
    return (
        <div className={style.albumContainer}>
            {
                (title ? <div className={style.tt}><h3>Photos</h3></div> : '')
            }
            <div className={style.albums}>
                {
                    albums.map(
                        item => {
                            return (
                                <div className={style.album}>
                                    <div className={style.image}>
                                        {
                                            item.img ? <img src={item.img} alt={item.title}/> : ''
                                        }
                                    </div>
                                    <div className={style.title}>
                                        {item.title}
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

export default Photos;