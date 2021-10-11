import React from "react";
import SignUp from "./components/signUp/signUp";
import Index from "./components/index";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/sing-up">
          <SignUp/>
      </Route>
      <Index/>
    </div>
  );
}

export default App;


