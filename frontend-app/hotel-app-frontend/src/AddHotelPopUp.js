import React, { useState } from "react";
import "./Modal.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Rating from '@mui/material/Rating';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

export default function AddHotelPopUp(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [rating, setRating] = useState("1");
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

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
           'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        },
        })
        handleClose();
    }

    return(
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Add Hotel
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Hotel Details</DialogTitle>
                <DialogContent>
                    <Stack spacing={2}>
                        Name
                        <label className="item">
                            <input type="text" onChange={e => setName(e.target.value)}/>
                        </label>
                        Address
                        <label className="item">
                            
                            <input type="text" onChange={e => setAddress(e.target.value)}/>
                        </label>
                        Rating
                        {/* <label className="item">
                            <select onChange={e => setRating(e.target.value)}>
                            <option selected value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                        </label > */}
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                        />
                    </Stack>   
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={addPosts}>Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}