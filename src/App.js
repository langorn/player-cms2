import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddUser from './components/add-user'
import ListUser from './components/list-user'
import LeftPanel from './components/left-panel'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, useState , useEffect } from 'react';

function App() {
  return (
    <Router>
    <div style={{backgroundColor:'#f7f7f7'}}>
      <Header/>
      <LeftPanel/>
      <ListUser/>
      <Route exact path="/" />
    </div>
    </Router>
  );
}

function Header() {
  return (
    <div style={{marginLeft:'45px'}}>
        <nav className="nav">
          <a className="nav-link active" href="/"> HOME </a>
          <a className="nav-link" href>
            <AddUser/>
          </a>
        </nav>
    </div>
  )
}

export default App;
