import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { json, Link, useNavigate } from 'react-router-dom';
import "./Table.css";

function HotelList(){

  const [hotels, setHotels] = useState(null);

  const navigate = useNavigate();

  function addHotel(){
    navigate("/hotels/add")
    }

  useEffect(() => {
    async function getHotels() {
        const res = await fetch(`http://localhost:8080/hotels`);
        const json = await res.json();
        setHotels(json);
        console.log(hotels);
    }
    getHotels();
    // fetch(`http://localhost:8080/clients`, {mode: 'cors'})
    // .then(response => response.json())
    // .then(json => setClients(json.data))
    // .then(console.log(clients))
    }, []);

        const hotelsList = () => hotels?.map(hotel => {
            const url = '/hotel/' + hotel?.name + '/rooms';    
            return <tr key={hotel?.name}>
                <td style={{whiteSpace: 'nowrap'}}>{hotel?.name}</td>
                <td>{hotel?.address}</td>
                <td>{hotel?.rating}</td>
                <td>
                    <Link to={url} state={{name: hotel.name}}>View rooms</Link>
                </td>
            </tr>
        });

        return (
            <div className='table'>
                <button onClick={addHotel}>Add Hotel</button>
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
                            {hotelsList()}
                            </tbody>
                        </Table>
                    </Container>
            </div>
        );
}

export default HotelList;


// class HotelsList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {hotels: [], seen: false};
//     }

//     componentDidMount() {
//         fetch('http://localhost:8080/hotels', {mode: 'cors'})
//             .then(response => response.json())
//             .then((data) => {this.setState({hotels: data})});
//     }

//     togglePop(value) {
//         this.setState({
//             seen: !this.state.seen,
//             hotel_name: value
//         });
//     }

//     showHotelRooms(name){
        
//     }

//     // render() {
//     //     const {hotels} = this.state;

//     //     const hotelsList = hotels.map(hotel => {
//     //         return <tr key={hotel.name}>
//     //             <td style={{whiteSpace: 'nowrap'}}>{hotel.name}</td>
//     //             <td>{hotel.address}</td>
//     //             <td>{hotel.rating}</td>
//     //             <td>
//     //                 <div  size="sm" color="danger" value={"example"} onClick={e => this.togglePop(e, "value")} >
//     //                 <button value="{hotel.name}">View rooms</button></div>
//     //             </td>
//     //         </tr>
//     //     });

//     render() {
//         const {hotels} = this.state;

//         const hotelsList = hotels.map(hotel => {
//             const url = '/room/hotel/' + hotel.name;    
//             return <tr key={hotel.name}>
//                 <td style={{whiteSpace: 'nowrap'}}>{hotel.name}</td>
//                 <td>{hotel.address}</td>
//                 <td>{hotel.rating}</td>
//                 <td>
//                     <Link to={url} state={{name: hotel.name}}>View rooms</Link>
//                 </td>
//             </tr>
//         });

//         return (
//             <div>
//                 <div>
//                     <Container fluid>
//                         <h3>Hotels</h3>
//                         <Table className="mt-4">
//                             <thead>
//                             <tr>
//                                 <th width="30%">Name</th>
//                                 <th width="30%">Address</th>
//                                 <th width="30%">Rating</th>
//                                 <th width="40%">Actions</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             {hotelsList}
//                             </tbody>
//                         </Table>
//                     </Container>
//                 </div>
//                 {this.state.seen ? <PopUp toggle={this.togglePop} hotel_name={this.state.hotel_name}/> : null}
//             </div>
//         );
//     }
// }

// export default useLocation(HotelsList);