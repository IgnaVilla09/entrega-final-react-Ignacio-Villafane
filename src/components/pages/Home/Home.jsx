import { Box, Button } from "@mui/material";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Box>
        <div className="filter"></div>
        <div className="btn-text">
          <h2>REACT STORE GAMING </h2>
          <span>TIENDA DE COMPONENTES</span>
          <Link to="/products">
            <Button sx={{ width: 350 }} variant="contained">
              VER PRODUCTOS
            </Button>
          </Link>
        </div>
        <img
          src="https://i0.wp.com/www.parapcgamers.com/wp-content/uploads/2017/01/partes-de-hardware-en-negocio-de-computacion.jpg?ssl=1"
          alt="banner"
          className="img-banner"
        />
      </Box>
    </>
  );
};

export default Home;
