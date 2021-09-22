import style from "./postItem.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";

const PostItem = () => {
    return (
        <article className={`${style.card} postID1`}>
            <header className="articleHeader">
                <div>
                    <div className="postUserImg">
                        <img src="https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-1.jpg" alt="Avatar user"/>
                    </div>
                    <div className="postInfo">
                        <h3 className="userName">Merry Watson</h3>
                        <time pubdate dateTime="2001-05-15 19:00">20 min ago</time>
                    </div>
                </div>
                <div className="postMenu">
                    <div className="postMenuButton">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <div style={{display: 'none'}} className="postMenuNav">
                        <ul>
                            <li><NavLink to="#">Copy Link To Adda</NavLink></li>
                            <li><NavLink to="#">Edit Post</NavLink></li>
                            <li><NavLink to="#">Embed Adda</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="postContent">
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                <img src="https://template.hasthemes.com/adda/adda/assets/images/post/post-1.jpg" alt="post image"/>
            </div>
            <footer className="articleFooter">
                <div className="postLike">
                    <span className="heart"/>
                    You and 201 people like this
                </div>
                <div className="postComments">
                    <span className="comment"/>
                    41
                </div>
                <div className="postShare">
                    <span className="share"/>
                    7
                </div>
            </footer>
        </article>
    )
};

export default PostItem;