import React from "react";
import LoginModule from "./loginModule/loginModule";
import RegisterModule from "./registerModule/registerModule";

const SignUp = () => {
    return (
        <main className={`signUpMain`}>
            <LoginModule/>
            <RegisterModule/>
        </main>
    )
};

export default SignUp;