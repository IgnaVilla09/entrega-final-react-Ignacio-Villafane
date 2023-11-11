import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let rolDelUsuario = "User";

  return <>{rolDelUsuario === "Admin" ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
