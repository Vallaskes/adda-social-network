import React from "react";
import {Link} from "react-router-dom";
import Button from "../../form/button/button.jsx";
import LabelInput from "../../form/labelInput/labelInput.jsx";
import Select from "../../form/select/select.jsx";
import s from './register.module.scss';

let d = {
    backgroundImage: 'url(https://template.hasthemes.com/adda/adda/assets/images/timeline/adda-timeline.jpg)',
    description: 'Let’s see what’s happening to you and your world. Welcome in Adda.',
    heaving1: 'Create An Account',
    heaving3: 'Wellcome to Adda',
    profile: {
        email: '',
        phoneNumber: '',
        firstName: '',
        secondName: '',
        password: '',
        gender: '',
        age: '',
        country: '',
    },
    selectData: {
        gender: {
            options: [ 'Gender', 'Male', 'Female']
        },
        age: {
            options: [ 'Age', '18+', '18-']
        },
        country: {
            options: [ 'Country', 'USA', 'Ukraine']
        },
    },
};

const RegisterModule = (props) => {
    return (
        <div className={s.registerContainer} >
            <div className={s.registerDescription} style={{backgroundImage: d.backgroundImage}}>
                <h3>{d.description}</h3>
            </div>
            <div className={s.registerBlock}>
                <h1 className={s.h1}>{d.heaving1}</h1>
                <div className={s.formWindow}>
                    <div className={s.formTitle}>
                        <h3>{d.heaving3}</h3>
                    </div>
                    <form className={s.registerForm} action="/">
                        <LabelInput
                            color="grey"
                            value={d.profile.email}
                            type="email"
                            htmlFor="labelEmail2"
                            text="Email"
                        />
                        <LabelInput
                            color="grey"
                            value={d.profile.phoneNumber}
                            type="tel"
                            htmlFor="labelPhone"
                            text="Number phone"
                        />
                        <LabelInput
                            half
                            color="grey"
                            value={d.profile.firstName}
                            className={s.marginRight}
                            type="text"
                            htmlFor="labelFirstName"
                            text="First Name"
                        />
                        <LabelInput
                            half
                            color="grey"
                            value={d.profile.secondName}
                            type="text"
                            htmlFor="labelLastName"
                            text="Last Name"
                        />
                        <LabelInput
                            color="grey"
                            value={d.profile.password}
                            type="password"
                            htmlFor="labelPassword2"
                            text="Password"
                        />
                        <Select
                            className={s.marginRight}
                            name="gender"
                            id="gender"
                            values={d.selectData.country.options}
                            value={d.profile.country}
                            half
                            color="grey"
                        />
                        <Select
                            name="age"
                            id="age"
                            values={d.selectData.country.options}
                            value={d.profile.country}
                            half
                            color="grey"
                        />
                        <Select
                            name="country"
                            id="country"
                            values={d.selectData.country.options}
                            value={d.profile.country}
                            color="grey"
                        />
                        <Button color="red" full text="Create Account"/>
                        <div className={s.agreement}>
                            <p>
                                I have read & accepted the <Link className={s.redText} to="/agreement">terms of use</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default RegisterModule;