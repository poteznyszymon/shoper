import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const user = false;

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
