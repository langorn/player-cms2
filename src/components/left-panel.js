import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalHeader, Modal, Button } from "react-bootstrap";
import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { toggleSideBar } from '../actions'


const LeftPanel = ({dispatch}) => {

  return (
    <div className="leftPanel" style={{width:'45px',position:'absolute', top:'0px', backgroundColor:'#5d5d5d', minHeight:'100%'}}>
      <button className="btn btn-primary" onClick={ () => { dispatch(toggleSideBar(false))} }>
        <i className="fa fa-arrows-h"></i>
      </button>
    </div>
  )
}

export default connect()(LeftPanel);
