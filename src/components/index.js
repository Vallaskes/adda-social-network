import React from "react";
import Header from "./header/header";
import Home from "./main/home/home";
import Footer from "./footer/footer";
import Profile from "./main/profile/profile";

const Index = () => {
    return (
        <div className={`siteContainer`}>
            <Header/>
            {/*<Home/>*/}
            <Profile/>
            <Footer/>
        </div>
    )
};

export default Index;