// components/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { status } = useSelector(state => state.authReducer);
  return status ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;