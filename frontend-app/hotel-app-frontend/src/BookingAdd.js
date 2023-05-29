import React, { useEffect, useRef, useState } from "react";
import { useParams, useCallback } from "react-router-dom";
import "./AddMenuStyling.css";
import DatePicker from "react-datepicker";
import { Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingAdd(){

    const [hotels , setHotels] = useState(null);
    const [rooms , setRooms] = useState();
    const [roomNumber, setRoomNumber] = useState();
    let { name } = useParams();
    const [hotel, setHotel] = useState();
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(new Date());
    const [bookingPrice, setBookingPrice] = useState();

    const [hotelChanged, setHotelChanged] = useState(false);

    useEffect(() => {
        async function getHotels() {
            const res = await fetch(`http://localhost:8080/hotels`);
            const json = await res.json();
            setHotels(json);
            setHotel(json[1])
        }
        getHotels();
    }, []);

    // useEffect(() => {
    //         async function getRooms() {
    //         const res = await fetch(`http://localhost:8080/rooms/hotel/${hotel}?page=0`);
    //         const json = await res.json();
    //         setRooms(json);
    //     }
    //         getRooms();
                   
    // }, [setHotel]);

    useEffect(() => {
        if(hotelChanged){
            async function getRooms() {
            const res = await fetch(`http://localhost:8080/rooms/hotel/${hotels}?page=0`);
            const json = await res.json();
            setRooms(json);
        }
        getRooms();
    }   else {
            setHotelChanged(!hotelChanged);
        }
        
    }, [setHotel]);

    const addPosts = () => {
        console.log(hotel);
        fetch(`http://localhost:8080/bookings/book`, {
        method: 'POST',
        body: JSON.stringify({
           arrivalDate: arrivalDate,
           departureDate: departureDate,
           bookingPrice: bookingPrice,
           clientName: name,
           roomNumber: roomNumber,
           hotelName: hotel 
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
    }

    // const useFetch = (setHotel) => {
    //     useEffect(() => {
    //             const res = fetch(`http://localhost:8080/rooms/hotel/${hotel}?page=0`);
    //                 const json = res.json();
    //                 setRooms(json);
    //         }, [setHotel]);
    // }

    const hotelsList =  hotels?.map(hotels => {
        return <option value={hotels?.name} key={hotels?.name}>{hotels?.name}</option>
    });

    const roomsList = () => rooms?.map(rooms => {
        console.log(rooms);
        return <option value={rooms?.roomNumber} key={rooms?.roomNumber}>{rooms?.roomNumber}</option>
    });

    const onChange = (dates) => {
        const [start, end] = dates;
        setArrivalDate(start);
        setDepartureDate(end);
      };
        
    return (
        <div className="centered">
            Hotel
            <label className="item">
                <select onChange={e => setHotel(e.target.value)}>
                {hotelsList}
                </select>
            </label >
            <br/>
           Room Number 
            <label className="item">  
                <input type="text" onChange={e => setRoomNumber(e.target.value)}/>
            </label>
            Arrival and Departure Date
            <DatePicker selected={arrivalDate} onChange={onChange}
                startDate={arrivalDate} endDate={departureDate} selectsRange inline
            />
            <br/>
            Booking Price
            <input type="text" onChange={e => setBookingPrice(e.target.value)}/>
            <br/>
            <Button variant="primary" value="Submit" onClick={() => {addPosts()}} className="item">Book</Button>
        </div>
    )  
}