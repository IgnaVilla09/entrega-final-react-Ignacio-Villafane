import { Box, Button, Link } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";
const CheckoutConfirmation = ({ orderId }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "25px",
        fontSize: "2em",
      }}
    >
      <h2>Gracias por su compra, su N° de comprobante es #{orderId}</h2>
      <img
        style={{ width: "320px", height: "320px", margin: "20px 0" }}
        src="https://cdn-icons-png.flaticon.com/512/7518/7518719.png"
        alt=""
      />
      <Link component={RouterLink} to="/">
        <Button variant="outlined" color="success" sx={{ width: "300px" }}>
          Volver al Inicio
        </Button>
      </Link>
    </Box>
  );
};

export default CheckoutConfirmation;
