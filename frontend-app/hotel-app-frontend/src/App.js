import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClientList from './ClientList';
import HotelsList from './HotelsList';
import RoomsInHotelList from './RoomsInHotelList';
import Navbar  from './Navbar';
import ClientAdd from './ClientAdd';
import HotelAdd from './HotelAdd';
import AddRoom from './AddRoom';
import BookingsList from './BookingsList';
import BookingAdd from './BookingAdd';
import LoginPage from './LoginPage';
import PrivateRouter from './PrivateRouter';
import AdminRouter from './AdminRouter';
import RegisterPage from './RegisterPage';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/clients' element={<PrivateRouter><ClientList/></PrivateRouter>}/>
            <Route path='/hotels' element={<HotelsList/>}/>
            <Route path='/hotel/:name/rooms' element={<RoomsInHotelList/>}/>
            <Route path='/clients/add' element={<AdminRouter><ClientAdd/></AdminRouter>}/>
            <Route path='/clients/:name/bookings' element={<PrivateRouter><BookingsList/></PrivateRouter>}/>
            <Route path='/clients/:name/bookings/add' element={<PrivateRouter><BookingAdd/></PrivateRouter>}/>
            <Route path='/hotels/add' element={<AdminRouter><HotelAdd/></AdminRouter>}/>
            <Route path='/hotels/:name/rooms/add' element={<AdminRouter><AddRoom/></AdminRouter>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/profile' element={<PrivateRouter><Profile/></PrivateRouter>}/>
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;