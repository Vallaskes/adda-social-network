import React from "react";
import Header from "./header/header";
import Home from "./main/home/home";
import Profile from "./main/profile/profile";
import {Route} from "react-router-dom";
import Timeline from "./main/profile/timeline/timeline";
import Photos from "./main/profile/photos/photos";
import Friends from "./main/profile/friends/friends";
import About from "./main/profile/about/about";

const Index = () => {
    return (
        <div style={{marginBottom: '50px'}} className={`siteContainer`}>
            <Header/>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/profile">
                <Profile/>
                <Timeline/>
            </Route>
            <Route path="/photos">
                <Profile/>
                <Photos title={false}/>
            </Route>
            <Route path="/friends">
                <Profile/>
                <Friends mini={true}/>
            </Route>
            <Route path="/about">
                <Profile/>
                <About/>
            </Route>
        </div>
    )
};

export default Index;