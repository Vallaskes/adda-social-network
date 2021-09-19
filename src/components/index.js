import React from "react";
import Header from "./header/header";
import Home from "./main/home/home";
import Footer from "./footer/footer";

const Index = (props) => {
    return (
        <div className={`siteContainer`}>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    )
};

export default Index;