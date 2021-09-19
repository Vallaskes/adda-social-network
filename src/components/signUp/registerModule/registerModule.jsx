import React from "react";
import {Link} from "react-router-dom";
import Button from "../../form/button/button.jsx";
import LabelInput from "../../form/labelInput/labelInput.jsx";
import {Select, Option} from "../../form/select/select.jsx";
import style from './register.module.scss';

let d = {
    backgroundImage: 'url(https://template.hasthemes.com/adda/adda/assets/images/timeline/adda-timeline.jpg)',
    description: 'Let’s see what’s happening to you and your world. Welcome in Adda.',
    heaving1: 'Create An Account',
    heaving3: 'Wellcome to Adda',
    registerInputData: [
        {
            className: 'email',
            htmlFor: 'labelEmail',
            text: 'Email',
            type: 'email',
        },
        {
            className: 'phone',
            htmlFor: 'labelPhone',
            text: 'Number phone',
            type: 'tel',
        },
        {
            className: 'half marginRight',
            htmlFor: 'labelFirstName',
            text: 'First Name',
            type: 'text',
        },
        {
            className: 'half',
            htmlFor: 'labelLastName',
            text: 'Last Name',
            type: 'text',
        },
        {
            className: 'password',
            htmlFor: 'labelPassword',
            text: 'Password',
            type: 'password',
        },
    ],
    selectData: [
    {
        className: 'half grey marginRight',
        name: 'gender',
        id: 'gender',
        values: [
            {value: 'Gender'},
            {value: 'Male'},
            {value: 'Female'},
        ]
    },
    {
        className: 'half grey',
        name: 'age',
        id: 'aga',
        values: [
            {value: 'Age'},
            {value: '18+'},
            {value: '18-'},
        ]
    },
    {
        className: 'grey',
        name: 'country',
        id: 'country',
        values: [
            {value: 'Country'},
            {value: 'USA'},
            {value: 'Ukraine'},
        ]
    },
],
};

let inputMap = d.registerInputData.map(e =>
    <LabelInput
        className={`${e.className} grey`}
        htmlFor={e.htmlFor}
        text={e.text}
        type={e.type}
    />
);

let selectMap = d.selectData.map(e =>
    <Select
        className={e.className}
        name={e.name}
        id={e.id}
        values={e.values.map( i => <Option value={i.value}/>)}
    />
);

const RegisterModule = (props) => {
    return (
        <div className={style.registerContainer} >
            <div className={style.registerDescription} style={{backgroundImage: d.backgroundImage}}>
                <h3>{d.description}</h3>
            </div>
            <div className={style.registerBlock}>
                <h1 className={style.h1}>{d.heaving1}</h1>
                <div className={style.formWindow}>
                    <div className={style.formTitle}>
                        <h3>{d.heaving3}</h3>
                    </div>
                    <form className={style.registerForm} action="/">
                        {inputMap}
                        {selectMap}
                        <Button className="red full" text="Create Account"/>
                        <div className={style.agreement}>
                            <p>
                                I have read & accepted the <Link className={style.redText} to="/agreement">terms of use</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default RegisterModule;