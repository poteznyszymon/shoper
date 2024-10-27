import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const user = false;

  if (user) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default PublicRoutes;
