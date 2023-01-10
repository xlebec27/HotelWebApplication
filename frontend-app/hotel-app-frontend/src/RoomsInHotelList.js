import React, { useState, useEffect } from 'react';
import { Container, Table } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import "./Table.css";

function RoomsInHotelList(){

    const [rooms, setRooms] = useState([]);

    const navigate = useNavigate();


    let { name } = useParams();

    function addRoom(){
        navigate(`/hotels/${name}/rooms/add`)
    }

    useEffect(() => {
        async function getRooms() {
            const res = await fetch(`http://localhost:8080/rooms/hotel/${name}?page=0`, {mode: 'cors'});
            const json = await res.json();
            setRooms(json);
            console.log(rooms);
            console.log({name});
        }
        getRooms();
    }, []);
    // useEffect(() => {
      
    //   fetch(`http://localhost:8080/room/hotel/${hotelId}?page=0`, {mode: 'cors'})
    //     .then(response => response.json())
    //     .then(json => setRooms(json))
    // }, []);

    async function deleteRoom(number) {
        const res = await fetch(`http://localhost:8080/rooms/${name}/${number}`, {method: 'DELETE', mode: 'cors'});
    }

    const roomsList = rooms.map(rooms => {
        return <tr key={rooms.roomNumber}>
            <td style={{whiteSpace: 'nowrap'}}>{rooms.roomNumber}</td>
            <td>{rooms.roomType}</td>
            <td>{rooms.numberOfBeds}</td>
            <td><button onClick={() => deleteRoom(rooms?.roomNumber)}>Delete</button></td>
        </tr>
    });
        
    return (
        <div className='table'>
            <button onClick={addRoom}>Add room</button>
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

// class RoomsInHotelList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { rooms: []};        
//     }

//     async componentDidMount() {
//         // //let { name } = useParams();
//         // console.log("this.props");
//         // const response = await fetch(`http://localhost:8080/room/hotel/${this.props.match.params.name}`, {mode: 'cors'})
//         await fetch(`http://localhost:8080/room/hotel/${this.props.match.params.name}`, {mode: 'cors'})
//         // const body = await response.json();
//         // this.setState({rooms: body});
//              .then(response => response.json())
//              .then((data) => {this.setState({rooms: data})});
//     }

//     // generateTable(){
//     //     const response = this.doApiCall();
//     //     const {rooms} = response.json();
//     //     console.log(rooms);
//     //     return rooms;
//     // }

//     // doApiCall(){
//     //     const {name} = this.props.match.params.name;
//     //     console.log(name);
        
//     //     // return fetch(`http://localhost:8080/room/hotel/${name}`)
//     // }

//     render() {
//         // const hotel_name = this.props.match.params.name;
//         // console.log({hotel_name});
//         // fetch(`http://localhost:8080/room/hotel/${hotel_name}`, {mode: 'cors'})
//         //     .then(response => response.json())
//         //     .then((data) => {this.setState({rooms: data})});
//         const {rooms} = this.state;
//         console.log(this.state.rooms);
//         const roomsList = rooms.map(rooms => {
//             return <tr key={rooms.roomNumber}>
//                 <td style={{whiteSpace: 'nowrap'}}>{rooms.roomNumber}</td>
//                 <td>{rooms.roomType}</td>
//                 <td>{rooms.numberOfBeds}</td>
//             </tr>
//         });

//         return (
//             <div>
//                 <Container fluid>
//                     <h3>Rooms in Hotel</h3>
//                     <Table className="mt-4">
//                         <thead>
//                         <tr>
//                             <th width="30%">Room Number</th>
//                             <th width="30%">Room Type</th>
//                             <th width="30%">Number of Beds</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {roomsList}
//                         </tbody>
//                     </Table>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default withRouter(RoomsInHotelList);