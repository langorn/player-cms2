import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalHeader, Modal, Button } from "react-bootstrap";
import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';

const EditUser = (props) => {
  console.log(props);
  const playerState = {
    'name':props.playerData.name,
    'age': props.playerData.age,
    'id': props.playerData.id
  }
  const [player, setPlayer] = useState(playerState);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPlayer((data) => ({ ...data, [name]: value }))
  }

  const submitEditPlayer = () => {
      const sendData = {
          name: player.name,
          age: player.age,
          id: player.id
      }
      console.log(sendData);
      axios.put('http://localhost:9999/players/'+player.id, sendData)
      .then(res => {
        console.log(res.data);
        setPlayer(res.data);
        handleClose()
      })
  }

  return (
    <>
      <div onClick={handleShow}>
        Edit User
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Please Enter Your Information</div>
          <table className="table">
            <tr>
              <td>
                <label> Username </label>
              </td>
              <td>
                <input type="text" name="name" value={player.name} onChange={handleInputChange}/>
              </td>
            </tr>
            <tr>
              <td>
                <label> Age </label>
              </td>
              <td>
                <input type="text" name="age" value={player.age} onChange={handleInputChange}/>
              </td>
            </tr>
          </table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitEditPlayer}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;
