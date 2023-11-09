import { Badge, Box, Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
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
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h2>cantidad: {product.quantity}</h2>
        </div>
      ))}
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </Box>
  );
};

export default Cart;
