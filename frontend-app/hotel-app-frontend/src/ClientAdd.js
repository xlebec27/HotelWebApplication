import React, { useState } from "react";
import "./AddMenuStyling.css";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function ClientAdd(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [gender, setGender] = useState();

    const addPosts = () => {
        fetch(`http://localhost:8080/clients/register`, {
        method: 'POST',
        body: JSON.stringify({
           name: name,
           email: email,
           phoneNumber: phone,
           gender: gender,
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
    }
        
    return (
        <div className="centered">
            <TextField id="outlined-basic" label="Name" variant="outlined" onChange={e => setName(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={e => setEmail(e.target.value)}/>
            <TextField id="outlined-basic" label="Phone" variant="outlined" onChange={e => setPhone(e.target.value)}/>
            <br/>
            {/* Gender
            <label className="item">
                
                <select onChange={e => setGender(e.target.value)}>
                <option selected value="true">Male</option>
                <option value="false">Female</option>
                </select>
            </label> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={e => setGender(e.target.value)}
            >
                <MenuItem value={"true"}>Male</MenuItem>
                <MenuItem value={"false"}>Female</MenuItem>
            </Select>
            <br/>
            <input type="submit" value="Submit" onClick={addPosts} className="item"/>
        </div>
    )      
}