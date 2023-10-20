import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Box sx={{ height: "20vh" }}>
        <Navbar />
      </Box>
      <Box sx={{ minHeight: "70vh" }}>
        <Outlet />
      </Box>
      <Box sx={{ height: "10vh" }}>
        <Footer />
      </Box>
    </div>
  );
};

export default Layout;
