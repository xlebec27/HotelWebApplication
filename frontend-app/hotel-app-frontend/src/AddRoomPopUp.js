import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Modal.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

export default function AddRoomPopUp(){

    const [roomNumber, setRoomNumber] = useState();
    let { name } = useParams();
    const [roomType, setRoomType] = useState("STANDARD");
    const [numberOfBeds, setNumberOfBeds] = useState("1");

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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
        handleClose();
    }
  


    return(
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Add Room
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Room Details</DialogTitle>
                <DialogContent>
                <Stack spacing={2}>
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
                </Stack>   
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addRoom}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}