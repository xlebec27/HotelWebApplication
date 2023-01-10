import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddMenuStyling.css";

export default function RoomAdd(){

    const [roomNumber, setRoomNumber] = useState();
    let { name } = useParams();
    const [roomType, setRoomType] = useState();
    const [numberOfBeds, setNumberOfBeds] = useState();

    const addPosts = () => {
        fetch(`http://localhost:8080/rooms`, {
        method: 'POST',
        body: JSON.stringify({
           roomNumber: roomNumber,
           hotelName: name,
           roomType: roomType,
           numberOfBeds: numberOfBeds
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
    }
        
    return (
        <div className="centered">
            Room Number
            <label className="item">
                <input type="text" onChange={e => setRoomNumber(e.target.value)}/>
            </label>
            <br/>
            Room Type
            <label className="item">
                <select onChange={e => setRoomType(e.target.value)}>
                <option selected value="STANDARD">STANDARD</option>
                <option value="STUDIO">STUDIO</option>
                <option value="BUSINESS">BUSINESS</option>
                <option value="LUX">LUX</option>
                <option value="PRESIDENTIAL">PRESIDENTIAL</option>
                </select>
            </label >
            Number of Beds
            <label className="item">
                <select onChange={e => setNumberOfBeds(e.target.value)}>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </label >
            <br/>
            <input type="submit" value="Submit" onClick={addPosts} className="item"/>
        </div>
    )      
}