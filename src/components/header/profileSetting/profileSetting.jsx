import style from "./profileSetting.module.scss";
import {Link} from "react-router-dom";
import React from "react";
import {ProfileItem, ProfileLinkItem} from "./profileItem/profileItem";
import styleProfile from "./profileItem/profileItem.module.scss";

const dropdownSetting = (e) => {
    let dm = e.target.parentNode.parentNode.querySelector('div[data-dropdown]').dataset.dropdown;
    if (dm === 'hidden') {
        e.target.parentNode.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'visible'
    } else {
        e.target.parentNode.parentNode.querySelector('div[data-dropdown]').dataset.dropdown = 'hidden';
    }
};

let data = {
    profileName: 'Madison Howard',
    profileLink: '#',
    profileImage: 'https://template.hasthemes.com/adda/adda/assets/images/profile/profile-midle-1.jpg',
    profileEmail: 'mailnam@mail.com',
    profileItem: [
        {
            linkItem: [
                {
                    link: '#',
                    icon: `${styleProfile.profileIcon}`,
                    title: 'Profile',
                },
                {
                    link: '#',
                    icon: `${styleProfile.inboxIcon}`,
                    title: 'Inbox',
                },
                {
                    link: '#',
                    icon: `${styleProfile.activityIcon}`,
                    title: 'Activity',
                },
            ],
        },
        {
            linkItem: [
                {
                    link: '#',
                    icon: `${styleProfile.settingIcon}`,
                    title: 'Setting',
                },
                {
                    link: '#',
                    icon: `${styleProfile.singOutIcon}`,
                    title: 'Sing out',
                },
            ],
        },
    ],
};

let prfItm = data.profileItem.map(e =>
    <ProfileItem key={e} pli={e.linkItem.map(i =>
            <ProfileLinkItem key={i} link={i.link} icon={i.icon} title={i.title} />
        )}
    />
);

const ProfileSetting = () => {
    return (
        <div className={style.profileSetting}>
            <div onClick={dropdownSetting} className={style.buttonModal}>
                <img src={data.profileImage} alt={`${data.profileName} avatar`} />
            </div>
            <div data-dropdown="hidden" className={style.profileDropdown}>
                <div className={style.profileHead}>
                    <h6>
                        <Link to={data.profileLink}>{data.profileName}</Link>
                    </h6>
                    <p className={style.mail}>{data.profileEmail}</p>
                </div>
                <div>
                    {prfItm}
                </div>
            </div>
        </div>
    )
};

export default ProfileSetting;