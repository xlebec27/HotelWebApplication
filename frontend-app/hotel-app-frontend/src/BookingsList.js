import React, { useState, useEffect } from 'react';
import { ButtonGroup, Container, Table } from 'reactstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Table.css";
import Button from '@mui/material/Button';

export default function BookingsList(){

    const [bookings, setBookings] = useState([]);

    const navigate = useNavigate();

    let { name } = useParams();

    useEffect(() => {
        async function getBookings() {
            const res = await fetch(`http://localhost:8080/bookings/byclient/${name}`);
            const json = await res.json();
            setBookings(json);
            console.log(bookings);
        }
        getBookings();
    }, []);

    function addBooking(){
        navigate("/clients/" + name + "/bookings/add")
    }

    async function deleteBooking(id) {
        const res = await fetch(`http://localhost:8080/bookings/${id}`, {method: 'DELETE', mode: 'cors', 
                headers: {
                    'Authorization': 'Bearer' + localStorage.getItem('jwt')
                }});
    }

    const bookingsList = bookings.map(bookings => {
        return <tr key={bookings?.id}>
            <td style={{whiteSpace: 'nowrap'}}>{bookings?.id}</td>
            <td>{bookings?.arrivalDate}</td>
            <td>{bookings?.departureDate}</td>
            <td>{bookings?.bookingPrice}</td>
            <td>{bookings?.clientName}</td>
            <td>{bookings?.roomNumber}</td>
            <td>{bookings?.hotelName}</td>
            <td><Button variant="contained" size="small" color="error" onClick={() => deleteBooking(bookings?.id)}>Delete</Button></td>
        </tr>
    });

    return (
        <div className='table'>
            <button onClick={addBooking}>Add booking</button>
            <Container fluid>
                <h3>Bookings for {name}</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="5%">Id</th>
                        <th width="30%">Arrival Date</th>
                        <th width="30%">Departure Date</th>
                        <th width="30%">Booking Price</th>
                        <th width="30%">Client Name</th>
                        <th width="30%">Room Number</th>
                        <th width="30%">Hotel Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookingsList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}