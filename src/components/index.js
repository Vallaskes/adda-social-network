import React from "react";
import Header from "./header/header";
import Home from "./main/home/home";
import Profile from "./main/profile/profile";
import {Route} from "react-router-dom";

const Index = () => {
    return (
        <div style={{marginBottom: '50px'}} className={`siteContainer`}>
            <Header/>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
        </div>
    )
};

export default Index;