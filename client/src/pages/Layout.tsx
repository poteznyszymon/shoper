import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
