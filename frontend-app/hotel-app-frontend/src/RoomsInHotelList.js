import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { useParams } from 'react-router-dom';
import "./Table.css";
import AddRoomPopUp from './AddRoomPopUp';
import Button from '@mui/material/Button';

function RoomsInHotelList(){

    const [rooms, setRooms] = useState([]);
    let { name } = useParams();

    useEffect(() => {
        getRooms();
    }, []);

    async function getRooms() {
        const res = await fetch(`http://localhost:8080/rooms/hotel/${name}`, {mode: 'cors'});
        const json = await res.json();
        setRooms(json);
    }

    async function deleteRoom(number) {
        await fetch(`http://localhost:8080/rooms/${name}/${number}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
        });
        getRooms();
    }

    const roomsList = rooms.map(rooms => {
        return <tr key={rooms.roomNumber}>
            <td style={{whiteSpace: 'nowrap'}}>{rooms.roomNumber}</td>
            <td>{rooms.roomType}</td>
            <td>{rooms.numberOfBeds}</td>
            <td><Button variant="contained" size="small" color="error" onClick={() => deleteRoom(rooms?.roomNumber)}>Delete</Button></td>
        </tr>
    });
        
    return (
        <div className='table'>
            <AddRoomPopUp/>
            <Container fluid>
                <h3>Rooms in Hotel</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="30%">Room Number</th>
                        <th width="30%">Room Type</th>
                        <th width="30%">Number of Beds</th>
                    </tr>
                    </thead>
                    <tbody>
                    {roomsList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}   

export default RoomsInHotelList;