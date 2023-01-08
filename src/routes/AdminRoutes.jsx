import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminRoutes = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.roles !== "admin") {
            navigate("/");
        }
    });
    
    return (
        <Outlet />
    );
};

export default AdminRoutes;