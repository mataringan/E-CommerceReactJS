import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoutes = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate("/");
        }
    });

    return (
        <Outlet />
    );
};

export default PrivateRoutes;