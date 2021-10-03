import React from "react";
import SidebarProfileBlock from "./profileBlock/profileBlock";
import style from "./style.module.scss";
import PageLike from "./pageLike/pageLike";
import TopNews from "./topNews/topNews";
import SweetsMemories from "./memories/memories";
import ProfileInfo from "./profileInfo/profileInfo";

const SidebarLeft = ({className}) => {
    return (
        <aside id="sidebarLeft" className={`${style.column} ${className}`}>
            <SidebarProfileBlock className={style.block} />
            <ProfileInfo className={style.block} />
            <SweetsMemories className={style.block}/>
            <PageLike className={style.block}/>
            <TopNews className={style.block}/>
        </aside>
    )
};

export default SidebarLeft;