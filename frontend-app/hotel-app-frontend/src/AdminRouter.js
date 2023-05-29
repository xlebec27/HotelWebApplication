import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("role") !== "ROLE_ADMIN") {
            navigate(-1);
        }
    }  , []);
    if (localStorage.getItem("role") !== "ROLE_ADMIN") {
      }
        return children; 
}

export default AdminRoute;