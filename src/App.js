import React from 'react';
import "./App.css";

import HomePage from "./container/HomePage/HomePage.js"
import RoomPage from './container/RoomPage/RoomPage.js'
import SingleRoomPage from './container/SingleRoomPage/SingleRoomPage'
import ErrorPage from './container/ErrorPage/ErrorPage.js'
import Navbar from './components/Navbar/Navbar'


import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/rooms/" component={RoomPage} />
        <Route exact path="/single-room/:slug" component={SingleRoomPage} />
        <Route path="/error/" component={ErrorPage} />
        <Redirect to='/error/'/>
      </Switch>
    </div>
  );
}

export default App;