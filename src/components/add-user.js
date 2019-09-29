import 'bootstrap/dist/css/bootstrap.min.css';
import {ModalHeader, Modal, Button } from "react-bootstrap";
import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';

const AddUser = (props) => {

  const playerState = {
    'name':'',
    'age': '0'
  }
  const [player, setPlayer] = useState(playerState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPlayer((data) => ({ ...data, [name]: value }))
  }

  const submitCreatePlayer = () => {
      const sendData = {
          name: player.name,
          age: player.age
      }
      axios.post('http://localhost:9999/players', sendData)
      .then(res => {
        console.log(res.data);
        setPlayer(res.data);
        handleClose()
      })
  }

  return (
    <>
      <a onClick={handleShow} href="/#">
        ADD USER
      </a>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Please Enter Your Information</div>
          <table className="table">
            <tr>
              <td>
                <label> Username </label>
              </td>
              <td>
                <input type="text" name="name" value={props.name} onChange={handleInputChange}/>
              </td>
            </tr>
            <tr>
              <td>
                <label> Age </label>
              </td>
              <td>
                <input type="text" name="age" value={props.age} onChange={handleInputChange}/>
              </td>
            </tr>
          </table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitCreatePlayer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;
