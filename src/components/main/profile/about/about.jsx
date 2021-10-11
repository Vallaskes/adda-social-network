import React from "react";
import style from "./style.module.scss";
import Photos from "../photos/photos";
import Friends from "../friends/friends";

let data = {
    aboutNav: [
        {
            title: 'Something about me',
            link: 'about-me',
        },
        {
            title: 'Working zone',
            link: 'work-zone',
        },
        {
            title: 'Educational Qualification',
            link: 'education',
        },
        {
            title: 'Work & Education',
            link: 'work-edu',
        },
        {
            title: 'Friends & Family',
            link: 'friend-family',
        },
        {
            title: 'Contact details',
            link: 'contact-details',
        }
    ],
    aboutText: [
        {
            title: 'Something about me',
            text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc`,
        },
        {
            title: 'Working zone',
            text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc`,
        },
        {
            title: 'Educational qualification',
            text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc`,
        },
        {
            title: 'Work & education',
            text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc`,
        },
        {
            title: 'Friends & family',
            text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc`,
        },
        {
            title: 'Contact details',
            text: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a searc`,
        },
    ],
    books: [
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/books/book-2.jpg',
            name: 'War of Dragon',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/books/book-3.jpg',
            name: 'Moon Light Shadow',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/books/book-4.jpg',
            name: 'OLIO',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/books/book-5.jpg',
            name: 'Art of Illustrator',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/books/book-6.jpg',
            name: 'Best Toure Gide',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/books/book-1.jpg',
            name: 'Blue in the Watter',
        },
    ],
    sports: [
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/sports/sport-2.jpg',
            name: 'Hokey',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/sports/sport-3.jpg',
            name: 'Cricket',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/sports/sport-4.jpg',
            name: 'Tennis',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/sports/sport-5.jpg',
            name: 'Football',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/sports/sport-6.jpg',
            name: 'Soccer',
        },
        {
            img: 'https://template.hasthemes.com/adda/adda/assets/images/sports/sport-1.jpg',
            name: 'Racing car',
        },
    ],
};

const About = () => {
    return (
        <div>
            <div className={style.aboutUser}>
                <div className={style.navigationAbout}>
                    <ul>
                        {
                            data.aboutNav.map(
                                item => {
                                    return (
                                        <li><a href={`#${item.link}`}>{item.title}</a></li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
                <div className={style.textAbout}>
                    <div className={style.titleAbout}>{data.aboutText[0].title}</div>
                    <div className="text">{data.aboutText[0].text}</div>
                </div>
            </div>
            <Photos title={true} />
            <Friends mini={true} />
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Favorite books</h3>
                </div>
                <div className={style.grid}>
                    {
                        data.books.map(
                            item => {
                                return (
                                    <div className={style.item}>
                                        <div className="image">
                                            <img src={item.img} alt={item.name}/>
                                        </div>
                                        <div className={style.itemTitle}>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>Favorite Sports</h3>
                </div>
                <div className={style.grid}>
                    {
                        data.sports.map(
                            item => {
                                return (
                                    <div className={style.item}>
                                        <div className="image">
                                            <img src={item.img} alt={item.name}/>
                                        </div>
                                        <div className={style.itemTitle}>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default About;