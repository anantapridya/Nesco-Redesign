import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import { BrowserRouter, Route, Routes, Link, Switch } from 'react-router-dom';
import Homepage from './component/homepage/homepage';
import Paper from './component/paper/paper';
import Poster from './component/poster/poster';
import EI from "./component/ei/ei"
import Webnas from './component/webnas/webnas';
import Gallery from './component/gallery/gallery';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import logonavbar from "./component/navbar/logonavbar.svg"

import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Homepage} path="/" exact />
          <Route component={Paper} path="/paper"/>
          <Route component={Poster} path="/poster"/>
          <Route component={EI} path="/electricityinnovation"/>
          <Route component={Webnas} path="/webinar"/>
          <Route component={Gallery} path="/gallery"/>
          <Route component={Login} path="/login"/>
          <Route component={Signup} path="/signup"/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
