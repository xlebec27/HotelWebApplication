import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientList from './ClientList';
import HotelsList from './HotelsList';
import RoomsInHotelList from './RoomsInHotelList';
import Navbar  from './Navbar';
import ClientAdd from './ClientAdd';
import HotelAdd from './HotelAdd';
import RoomAdd from './RoomAdd';
import BookingsList from './BookingsList';
import BookingAdd from './BookingAdd';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/clients' element={<ClientList/>}/>
            <Route path='/hotels' element={<HotelsList/>}/>
            <Route path='/hotel/:name/rooms' element={<RoomsInHotelList/>}/>
            <Route path='/clients/add' element={<ClientAdd/>}/>
            <Route path='/clients/:name/bookings' element={<BookingsList/>}/>
            <Route path='/clients/:name/bookings/add' element={<BookingAdd/>}/>
            <Route path='/hotels/add' element={<HotelAdd/>}/>
            <Route path='hotels/:name/rooms/add' element={<RoomAdd/>}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;