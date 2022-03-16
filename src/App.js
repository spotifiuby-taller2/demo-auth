import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpEndWrapper from "./login/SignUpEndWrapper";
const { Banner } = require('./banner');
const constants = require("./others/constants");

class App extends Component {
  render() {
    return (
     <BrowserRouter>
         <Routes>
           <Route path="/" element={ <Banner/> }> </Route>
             <Route exact path={ constants.SIGN_UP_END_URL + "/:userId" } element={ <SignUpEndWrapper/> }> </Route>
         </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
