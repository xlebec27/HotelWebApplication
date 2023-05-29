import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AddMenuStyling.css";

export default function AddRoom(){

    const [roomNumber, setRoomNumber] = useState();
    let { name } = useParams();
    const [roomType, setRoomType] = useState("STANDARD");
    const [numberOfBeds, setNumberOfBeds] = useState(1);
    const navigate = useNavigate();

    const addRoom = async () => {
          await fetch('http://localhost:8080/rooms', {
          method: 'POST',
          body: JSON.stringify({
                    roomNumber: roomNumber,
                    hotelName: name,
                    roomType: roomType,
                    numberOfBeds: numberOfBeds
          }),
          headers: {
             'Content-type': 'application/json',
             'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          },
          })
          navigate(-1);
      }

    // const postRoom = async () => {
    //     await fetch(`http://localhost:8080/rooms`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //        roomNumber: roomNumber,
    //        hotelName: name,
    //        roomType: roomType,
    //        numberOfBeds: numberOfBeds
    //     }),
    //     headers: {
    //        'Content-type': 'application/json',
    //        'Authorization': 'Bearer' + localStorage.getItem('jwt')
    //     },
    //     })
    // }
        
    return (
        <div className="centered">
            Room Number
            <label className="item">
                <input type="text" onChange={e => setRoomNumber(e.target.value)}/>
            </label>
            <br/>
            Room Type
            <label className="item">
                <select onChange={e => setRoomType(e.target.value)} defaultValue={roomType}>
                <option value="STANDARD">STANDARD</option>
                <option value="STUDIO">STUDIO</option>
                <option value="BUSINESS">BUSINESS</option>
                <option value="LUX">LUX</option>
                <option value="PRESIDENTIAL">PRESIDENTIAL</option>
                </select>
            </label >
            Number of Beds
            <label className="item">
                <select onChange={e => setNumberOfBeds(e.target.value)} defaultValue={roomNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </label >
            <br/>
            <button onClick={addRoom}>Add room</button>
        </div>
    )      
}