import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authcontext";

const ProtectedRoute = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLogin, loading } = useAuthContext();

    useEffect(() => {
        if (!loading && !isLogin) {
            localStorage.setItem("redirect_after_login", location.pathname + location.search);
            navigate("/login", { replace: true });
        }
    }, [isLogin, loading, navigate, location]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
