import style from "./postItem.module.scss";
import React from "react";
import Like from "../like/like";
import Conf from "../conf/conf";

const PostItem = ({userAvatar, userName, time, postContent, uLike, qLike, like, qComment, qShare}) => {
    return (
        <article className={`${style.card}`}>
            <header className={style.articleHeader}>
                <div className={style.userInfo}>
                    <div className={style.postUserImg}>
                        <img className={style.userAvatar} src={userAvatar} alt={`${userName} avatar user`}/>
                    </div>
                    <div className={style.postInfo}>
                        <h3>{userName}</h3>
                        <time pubdate dateTime={time}>{time}</time>
                    </div>
                </div>
                <Conf/>
            </header>
            <div className={style.postContent}>
                <p>{postContent}</p>
                <img src="https://template.hasthemes.com/adda/adda/assets/images/post/post-1.jpg" alt="posts content"/>
            </div>
            <footer className={style.articleFooter}>
                <div className={style.footerLink}>
                    <Like uLike={uLike} />
                    {like ? `${uLike ? 'You and' : ''} ${qLike} people like this` : `No likes`}
                </div>
                <div className={style.ch}>
                    <div className={style.footerLink}>
                        <span className={style.comment} />
                        {qComment}
                    </div>
                    <div className={style.footerLink}>
                        <span className={style.share} />
                        {qShare}
                    </div>
                </div>
            </footer>
        </article>
    )
};

export default PostItem;