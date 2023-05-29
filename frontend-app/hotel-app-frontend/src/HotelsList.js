import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { json, Link, useNavigate } from 'react-router-dom';
import "./Table.css";
import AddHotelPopUp from './AddHotelPopUp';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function HotelList(){

  const [hotels, setHotels] = useState(null);

  const navigate = useNavigate();

  function addHotel(){
    navigate("/hotels/add")
    }

    async function deleteHotel(name) {
        await fetch(`http://localhost:8080/hotels/${name}`, {method: 'DELETE', mode: 'cors',
            headers: {
                'Authorization': 'Bearer' + localStorage.getItem('jwt')
            }
            });
            getHotels();
    }

    async function getHotels() {
        const res = await fetch(`http://localhost:8080/hotels`);
        const json = await res.json();
        setHotels(json);
    }

    useEffect(() => {
        getHotels();
    }, []);

        const hotelsList = hotels?.map(hotel => {
            const url = '/hotel/' + hotel?.name + '/rooms';    
            return <tr key={hotel?.name}>
                <td style={{whiteSpace: 'nowrap'}}>{hotel?.name}</td>
                <td>{hotel?.address}</td>
                <td>{hotel?.rating}</td>
                <td>
                    <Stack direction="row" spacing={2}>
                    <Button variant="outlined" size="small"><Link to={url} state={{name: hotel?.name}}>View rooms</Link></Button>
                    <Button variant="contained" size="small" color="error" onClick={() => deleteHotel(hotel?.name)}>Delete</Button>
                    </Stack>
                </td>
            </tr>
        });

        return (
            <div className='table'>
                <AddHotelPopUp/>
                    <Container fluid>
                        <h3>Hotels</h3>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="30%">Name</th>
                                <th width="30%">Address</th>
                                <th width="30%">Rating</th>
                                <th width="40%">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {hotelsList}
                            </tbody>
                        </Table>
                    </Container>
            </div>
        );
}

export default HotelList;