import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput, 
  MDBCardImage
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage(){

      return (
        <MDBContainer className="position-absolute top-50 start-50 translate-middle h-40 w-50">
        {LoginForm()}
        </MDBContainer>
        )
}

function LoginForm() {
  
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const navigate = useNavigate()

    const loginRequest = async () => {
      const req =
        await fetch(`http://localhost:8080/auth/login`, {
        method: 'POST',
        body: JSON.stringify({
           username: username,
           password: password
        }),
        headers: {
           'Content-type': 'application/json'
        },
        })
        const response = await req.json()
        if (response.jwt !== null){
          localStorage.setItem("username", response.username);
          localStorage.setItem("jwt", response["jwt"]);
          localStorage.setItem("role", response["role"]);
          localStorage.setItem("name", response["name"]);
          localStorage.setItem("phone", response["phone"]);
          navigate("/profile");
        }
    }

  return (
    <>
    <MDBContainer fluid>
      <MDBRow className="border-top border-start border-bottom rounded-2">

        <MDBCol sm='6' >

          <div className='d-flex flex-row ps-5 pt-5'>
          <img src={require('./resources/logo.png')} style={{width: "13%", height: "10%", padding: "5px"}}/>
            <span className="h1 fw-bold mb-0">Hotel</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={e => setUsername(e.target.value)}/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" onChange={e => setPassword(e.target.value)}/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={() =>{loginRequest()}}>Login</MDBBtn>
            <p className='ms-5'>Don't have an account? <a href="#!" className="link-info"><Link to="/register">Register here</Link></a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className="d-none d-md-block px-0'">
                <MDBCardImage src={require('./resources/loginpagepic.jpg')} alt="Sample photo" className="rounded-end w-100" fluid/>
          </MDBCol>

        {/* <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src={require('./resources/loginpagepic.jpg')}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol> */}

      </MDBRow>

    </MDBContainer>
    </>
  );
}
