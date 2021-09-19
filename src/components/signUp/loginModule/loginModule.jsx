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

let loginDada = [
    {
        className: 'email',
        htmlFor: 'labelEmail',
        text: 'Email',
        type: 'email',
    },
    {
        className: 'password',
        htmlFor: 'labelPassword',
        text: 'Password',
        type: 'password',
    }
];

let inputMap = loginDada.map(e =>
    <LabelInput
        className={e.className}
        htmlFor={e.htmlFor}
        text={e.text}
        type={e.type}
    />
);



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
                    {inputMap}
                    <Button className="white" text="Login"/>
                </form>
            </div>
        </div>
    )
};

export default LoginModule;