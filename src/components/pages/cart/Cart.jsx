import { Badge, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        margin: "50px",
        padding: "10px",
        border: "2px solid black",
      }}
    >
      <Badge component={"h2"} style={{ fontSize: 60 }}>
        Carrito próximamente activo!
      </Badge>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </Box>
  );
};

export default Cart;
