import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./Table.css";



export default function ClientList() {

    const [clients, setClients] = useState([]);

    const navigate = useNavigate();

    

    useEffect(() => {
        async function getClients() {
            const res = await fetch(`http://localhost:8080/clients`);
            const json = await res.json();
            setClients(json);
            console.log(clients);
        }
        getClients();
        // fetch(`http://localhost:8080/clients`, {mode: 'cors'})
        // .then(response => response.json())
        // .then(json => setClients(json.data))
        // .then(console.log(clients))
    }, []);

    function addClient(){
        navigate("/clients/add")
    }

    function openBookings(name){
        navigate("/clients/" + name + "/bookings")
    }

    async function deleteClient(name) {
        const res = await fetch(`http://localhost:8080/clients/${name}`, {method: 'DELETE', mode: 'cors'});
    }



    const clientList = () => clients?.map(client => {
                return <tr key={client?.name}>
                    <td style={{whiteSpace: 'nowrap'}}>{client?.name}</td>
                    <td>{client?.email}</td>
                    <td>{client?.phoneNumber}</td>
                    <td>
                        <button onClick={() => deleteClient(client?.name)}>Delete</button>
                        <button onClick={() => openBookings(client?.name)}>Bookings</button>
                    </td>
                </tr>
            });
    
        return (
            <div className='table'>
                <button onClick={addClient}>Create</button>
                <Container fluid>
                    <h3>Clients</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">Email</th>
                            <th width="30%">Phone</th>
                        </tr>
                        </thead>
                        <tbody>
                        {clientList()}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
}

// class ClientList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {clients: []};
//         this.remove = this.remove.bind(this);
//     }

//     componentDidMount() {
//         fetch('http://localhost:8080/clients', {mode: 'cors'})
//             .then(response => response.json())
//             .then((data) => {this.setState({clients: data})});
//     }

//     async remove(id) {
//         await fetch(`/clients/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'  
//             }
//         }).then(() => {
//             let updatedClients = [...this.state.clients].filter(i => i.id !== id);
//             this.setState({clients: updatedClients});
//         });
//     }

//     render() {
//         const {clients} = this.state;

//         const clientList = clients.map(client => {
//             return <tr key={client.name}>
//                 <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
//                 <td>{client.email}</td>
//                 <td>{client.phoneNumber}</td>
//                 <td>
//                     <ButtonGroup>
//                         <Button size="sm" color="danger" onClick={() => this.remove(client.id)}>Delete</Button>
//                     </ButtonGroup>
//                 </td>
//             </tr>
//         });

//         return (
//             <div>
//                 <Container fluid>
//                     <div className="float-right">
//                         <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
//                     </div>
//                     <h3>Clients</h3>
//                     <Table className="mt-4">
//                         <thead>
//                         <tr>
//                             <th width="30%">Name</th>
//                             <th width="30%">Email</th>
//                             <th width="30%">Phone</th>
//                             <th width="40%">Actions</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {clientList}
//                         </tbody>
//                     </Table>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default withRouter(ClientList);