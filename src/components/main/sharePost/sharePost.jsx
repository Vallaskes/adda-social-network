import React from "react";
import style from "./sharePost.module.scss";
import ModalShare from "./modalShare/modalShare";

function openModal() {
    document.querySelector('div[data-modal-share]').dataset.modalShare = "visible";
}

const SharePost = () => {
    return (
        <div className={style.shareSection}>
            <img className={style.userAvatar} src="https://template.hasthemes.com/adda/adda/assets/images/profile/profile-small-37.jpg" alt="user avatar"/>
            <div onClick={openModal} className={style.shareForm}>Say something</div>
            <ModalShare />
        </div>
    )
};

export default SharePost;