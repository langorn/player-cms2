import 'bootstrap/dist/css/bootstrap.min.css';
import {ModalHeader, Modal, Button } from "react-bootstrap";
import React, { Component, useState , useEffect } from 'react';
import EditUser from './edit-user'
import axios from 'axios';

const ListUser = (props) => {

  const playerData = [];

  const [ players, setPlayers ] = useState(playerData);

  useEffect(()=>{
      axios.get('http://localhost:9999/players')
      .then(res => {
          setPlayers(res.data);
      })
      return ()=>{
      }
  },[])


  const playerList = (
      players.map( (player, index) =>
        <tr key={player.id}>
          <td>{player.name}</td>
          <td>{player.age}</td>
          <td><div><EditUser playerData = {player} /></div></td>
        </tr>
      )
  )


  return (
    <div style={{backgroundColor:'#f6f6f6',marginLeft:'45px'}} >
      <table className="table">

        <tbody>
          { playerList }
        </tbody>
      </table>
   </div>
  )

}

export default ListUser
