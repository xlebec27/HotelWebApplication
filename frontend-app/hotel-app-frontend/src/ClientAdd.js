import React, { useEffect, useState } from "react";
import "./AddMenuStyling.css";

export default function ClientAdd(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [gender, setGender] = useState();
    const [kid, setKid] = useState();

    const addPosts = () => {
        fetch(`http://localhost:8080/clients/register`, {
        method: 'POST',
        body: JSON.stringify({
           name: name,
           email: email,
           phoneNumber: phone,
           gender: gender,
           kid: kid
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
            Email
            <label className="item">
                
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <br/>
            Phone
            <label className="item">
                
                <input type="text" onChange={e => setPhone(e.target.value)}/>
            </label>
            <br/>
            Gender
            <label className="item">
                
                <select onChange={e => setGender(e.target.value)}>
                <option selected value="true">Male</option>
                <option value="false">Female</option>
                </select>
            </label>
            <br/>
            Kid
            <label className="item">
                
                <select onChange={e => setKid(e.target.value)}>
                <option selected value="false">False</option>
                <option value="true">True</option>
                </select>
            </label >
            <br/>
            <input type="submit" value="Submit" onClick={addPosts} className="item"/>
        </div>
    )      
}