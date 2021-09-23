import React from "react";
import Button from "../../form/button/button.jsx";
import LabelInput from "../../form/labelInput/labelInput.jsx";
import style from './login.module.scss';

let j = {
    logo: {
        src: 'https://template.hasthemes.com/adda/adda/assets/images/logo/logo.png',
        alt: 'Logo site'
    },
    description: 'It’s helps you to connect and share with the people in your life',
};


const LoginModule = (props) => {
    return (
        <div className={style.loginContainer}>
            <div className={style.loginDescription}>
                <img src={j.logo.src} alt={j.logo.alt} />
                <div className={style.text}>
                    {j.description}
                </div>
            </div>
            <div className={style.loginBlock}>
                <form className="loginForm" action="/">
                    <LabelInput
                        htmlFor="labelEmail"
                        text="Email"
                        type="email"
                    />
                    <LabelInput
                        htmlFor="labelPassword"
                        text="Password"
                        type="password"
                    />
                    <Button className="white" text="Login"/>
                </form>
            </div>
        </div>
    )
};

export default LoginModule;