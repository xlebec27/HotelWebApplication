import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

function Home() {
    return (
        <div>
            <Container fluid>
                <Button color="link"><Link to="/clients">Clients</Link></Button>
                <Button color="link"><Link to="/hotels">Hotels</Link></Button>
            </Container>
        </div>
    );
}

export default Home;

// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <Container fluid>
//                     <Button color="link"><Link to="/clients">Clients</Link></Button>
//                     <Button color="link"><Link to="/hotels">Hotels</Link></Button>
//                 </Container>
//             </div>
//         );
//     }
// }

