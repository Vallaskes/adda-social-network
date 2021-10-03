import React from "react";
import style from "./modalShare.module.scss";

function closeModal() {
    document.querySelector('div[data-modal-share]').dataset.modalShare = "hidden";
}

const ModalShare = () => {
    return (
        <div data-modal-share="hidden" className={style.modalShare}>
            <form action="/">
                <div className={style.headerModal}>
                    <h3 className={style.titleModal}>Share Your Mood</h3>
                    <div onClick={closeModal} className={style.closeModal}/>
                </div>
                <div className={style.formMain}>
                    <textarea name="textarea" id="shareTextarea" cols="20" rows="10" placeholder="Say Something"/>
                </div>
                <div className={style.footerModal}>
                    <input type="reset" className={style.button} placeholder="Cancel"/>
                    <input type="submit" className={style.button} placeholder="Post"/>
                </div>
            </form>
        </div>
    )
};

export default ModalShare;