import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCardText, MDBCardBody, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';

export default function Profile() {
    const navigate = useNavigate();

    function printRole(role){
        if (role === "ROLE_ADMIN") {
            return "Admin"
        }
        return "Client"
    }

    return(
            <MDBContainer className="position-absolute top-50 start-50 translate-middle h-40 w-25 border">
                <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Client Account</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                            <MDBTypography tag="h6">Name</MDBTypography>
                            <MDBCardText className="text-muted">{localStorage.getItem("name")}</MDBCardText>
                            <MDBTypography tag="h6">Email</MDBTypography>
                            <MDBCardText className="text-muted">{localStorage.getItem("username")}</MDBCardText>
                            <MDBTypography tag="h6">Phone</MDBTypography>
                            <MDBCardText className="text-muted">{localStorage.getItem("phone")}</MDBCardText>
                            <MDBTypography tag="h6">Role</MDBTypography>
                            <MDBCardText className="text-muted">
                                {printRole(localStorage.getItem("role"))}
                            </MDBCardText>
                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='sm' onClick={() =>{
                                navigate("/clients/" + localStorage.getItem("name") + "/bookings")
                                }}>Bookings</MDBBtn>
                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='sm' onClick={() =>{
                                localStorage.clear(); 
                                navigate("/login")
                                }}>Log Out</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBContainer>
    );
}