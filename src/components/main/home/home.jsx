import React from "react";
import SidebarLeft from "../../sidebar/sidebarLeft/sidebarLeft";
import SidebarRight from "../../sidebar/sidebarRight/sidebarRight";
import {NavLink} from "react-router-dom";
import style from './home.module.scss';

const Home = (props) => {
    return (
        <div className={style.homePage}>
            <SidebarLeft/>
            <main>
                <div className="articleSection">
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
                    <article className={`${style.card} postID2`}>
                        <header className="articleHeader">
                            <div>
                                <div className="postUserImg">
                                    <img src="https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-9.jpg" alt="Avatar user"/>
                                </div>
                                <div className="postInfo">
                                    <h3 className="userName">Jon Wileyam</h3>
                                    <time pubdate dateTime="2001-05-15 19:00">50 min ago</time>
                                </div>
                            </div>
                            <div className="postMenu">
                                <div className="postMenuButton">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="postMenuNav">
                                    <ul>
                                        <li><NavLink to="#">Copy Link To Adda</NavLink></li>
                                        <li><NavLink to="#">Edit Post</NavLink></li>
                                        <li><NavLink to="#">Embed Adda</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </header>
                        <div className="postContent">
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                        </div>
                        <footer className="articleFooter">
                            <div className="postLike">
                                <span className="heart"/>
                                201 people like this
                            </div>
                            <div className="postComments">
                                <span className="comment"/>
                                33
                            </div>
                            <div className="postShare">
                                <span className="share"/>
                                11
                            </div>
                        </footer>
                    </article>
                    <article className={`${style.card} postID3`}>
                        <header className="articleHeader">
                            <div>
                                <div className="postUserImg">
                                    <img src="https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-29.jpg"/>
                                </div>
                                <div className="postInfo">
                                    <h3 className="userName">William Henry</h3>
                                    <time pubdate dateTime="2001-05-15 19:00">59 min ago</time>
                                </div>
                            </div>
                            <div className="postMenu">
                                <div className="postMenuButton">
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="postMenuNav">
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
                                324 people like this
                            </div>
                            <div className="postComments">
                                <span className="comment"/>
                                52
                            </div>
                            <div className="postShare">
                                <span className="share"/>
                                21
                            </div>
                        </footer>
                    </article>
                </div>
            </main>
            <SidebarRight/>
        </div>
    )
};

export default Home;