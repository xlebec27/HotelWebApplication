import React, { useEffect, useState } from "react";
import "./AddMenuStyling.css";

export default function HotelAdd(){

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [rating, setRating] = useState();


    const addPosts = () => {
        fetch(`http://localhost:8080/hotels`, {
        method: 'POST',
        body: JSON.stringify({
           name: name,
           address: address,
           rating: rating,
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
    }
        
    return (
        <div className="centered">
            Name
            <label className="item">
                <input type="text" onChange={e => setName(e.target.value)}/>
            </label>
            <br/>
            Address
            <label className="item">
                
                <input type="text" onChange={e => setAddress(e.target.value)}/>
            </label>
            <br/>
            Rating
            <label className="item">
                
                <select onChange={e => setRating(e.target.value)}>
                <option selected value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </label >
            <br/>
            <input type="submit" value="Submit" onClick={addPosts} className="item"/>
        </div>
    )      
}