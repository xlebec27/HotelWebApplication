import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBSelect
}
from 'mdb-react-ui-kit';

function RegisterPage() {
    return (
        <MDBContainer className="position-absolute top-50 start-50 translate-middle h-40 w-50">
        {RegisterForm()}
        </MDBContainer>
        )
}

function RegisterForm() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [gender, setGender] = useState();

    const registerRequest = async () => {
      const req =
        await fetch(`http://localhost:8080/auth/registration`, {
        method: 'POST',
        body: JSON.stringify({
           name: name,
           email: email,
           phoneNumber: phoneNumber,
           gender: gender,
           password: password
        }),
        headers: {
           'Content-type': 'application/json'
        },
        })
        const response = await req.json()
        localStorage.setItem("username", response.username)
        localStorage.setItem("jwt", response["jwt"])
        localStorage.setItem("role", response["role"])
        localStorage.setItem("name", response["name"])
        localStorage.setItem("phone", response["phone"])
    }

  return (
    <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src={require('./resources/regpic.jpg')} alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Client registration form</h3>

                  <MDBRow>
                      <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' onChange={e => setName(e.target.value)}/>
                  </MDBRow>

                  <MDBRow>
                      <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='text' onChange={e => setEmail(e.target.value)}/>
                  </MDBRow>

                  <MDBRow>
                      <MDBInput wrapperClass='mb-4' label='Phone' size='lg' id='form3' type='text' onChange={e => setPhoneNumber(e.target.value)}/>
                  </MDBRow>

                  <MDBRow>
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" onChange={e => setPassword(e.target.value)}/>
                  </MDBRow>

                  <div className='d-md-flex ustify-content-start align-items-center mb-4 justify-content-start' onChange={e => setGender(e.target.value)}>
                    <h6 className="fw-bold mb-0 me-4 justify-content-around">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='false' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='true' label='Male' inline />
                  </div>

                  <div className="d-flex justify-content-center pt-3">
                    <MDBBtn className='ms-2' size='lg' onClick={() =>{registerRequest()}}>Submit form</MDBBtn>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default RegisterPage;