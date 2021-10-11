import React from "react";
import SidebarLeft from "../../sidebar/sidebarLeft/sidebarLeft";
import SidebarRight from "../../sidebar/sidebarRight/sidebarRight";
import style from './home.module.scss';
import PostItem from "../../postItem/postItem";
import SharePost from "../sharePost/sharePost";

let data = {
    postItem: [
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-1.jpg',
            userName: 'Merry Watson',
            time: '2001-05-15 19:00',
            postContent: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
            qLike: '201',
            qComment: '41',
            qShare: '7',
            uLike: true,
            like: true,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-9.jpg',
            userName: 'Jon Wileyam',
            time: '2001-05-15 19:00',
            postContent: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for`,
            qLike: '201',
            qComment: '33',
            qShare: '11',
            uLike: false,
            like: false,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-29.jpg',
            userName: 'William Henry',
            time: '2001-05-15 19:00',
            postContent: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
            qLike: '324',
            qComment: '52',
            qShare: '21',
            uLike: false,
            like: true,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-1.jpg',
            userName: 'Merry Watson',
            time: '2001-05-15 19:00',
            postContent: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
            qLike: '201',
            qComment: '41',
            qShare: '7',
            uLike: true,
            like: true,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-9.jpg',
            userName: 'Jon Wileyam',
            time: '2001-05-15 19:00',
            postContent: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for`,
            qLike: '201',
            qComment: '33',
            qShare: '11',
            uLike: false,
            like: false,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-29.jpg',
            userName: 'William Henry',
            time: '2001-05-15 19:00',
            postContent: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
            qLike: '324',
            qComment: '52',
            qShare: '21',
            uLike: false,
            like: true,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-1.jpg',
            userName: 'Merry Watson',
            time: '2001-05-15 19:00',
            postContent: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.',
            qLike: '201',
            qComment: '41',
            qShare: '7',
            uLike: true,
            like: true,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-9.jpg',
            userName: 'Jon Wileyam',
            time: '2001-05-15 19:00',
            postContent: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for`,
            qLike: '201',
            qComment: '33',
            qShare: '11',
            uLike: false,
            like: false,
        },
        {
            userAvatar: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-29.jpg',
            userName: 'William Henry',
            time: '2001-05-15 19:00',
            postContent: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
            qLike: '324',
            qComment: '52',
            qShare: '21',
            uLike: false,
            like: true,
        },
    ],
};

let postItem = data.postItem.map( e =>
    <PostItem
        key={e}
        userAvatar={e.userAvatar}
        userName={e.userName}
        time={e.time}
        postContent={e.postContent}
        qLike={e.qLike}
        qComment={e.qComment}
        qShare={e.qShare}
        uLike={e.uLike}
        like={e.like}
    />
);

const Home = () => {
    return (
        <div className={style.homePage}>
            <SidebarLeft/>
            <main>
                <SharePost/>
                <div>
                    {postItem}
                </div>
            </main>
            <SidebarRight/>
        </div>
    )
};

export default Home;