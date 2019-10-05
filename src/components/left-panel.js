import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalHeader, Modal, Button } from "react-bootstrap";
import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { toggleSideBar } from '../actions'


const mapStateToProps = (state, ownProps) => ({
  display: ownProps.display
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSideBar: () => dispatch(toggleSideBar(true))
  }
}


class LeftPanel extends React.Component {
  render() {
  return (
    <div className="leftPanel" style={{width:'45px',position:'absolute', top:'0px', backgroundColor:'#5d5d5d', minHeight:'100%'}}>
      <button className="btn btn-primary" onClick={ () => this.props.toggleSideBar() }>
        <i className="fa fa-arrows-h"></i>
      </button>
    </div>
  )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
