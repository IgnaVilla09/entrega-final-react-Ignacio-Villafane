import { Box, Button, IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct, totalPrice, totalQuantity } =
    useContext(CartContext);

  let total = totalPrice();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "50px",
        padding: "25px",
        border: "2px solid #0005",
        width: "50vw",
      }}
    >
      {cart.map((product) => (
        <Box sx={{ display: "flex", gap: "25px" }} key={product.id}>
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50px",
              boxShadow: "3px 3px 12px #000a",
            }}
            src={product.img}
            alt=""
          />
          <Box>
            <Box sx={{ display: "flex" }}>
              <h2>{product.title}</h2>
              <IconButton onClick={() => deleteProduct(product.id)}>
                <DeleteForeverIcon color="error"></DeleteForeverIcon>
              </IconButton>
            </Box>
            <h3>${product.price}</h3>
            <h3>Unidades: {product.quantity}</h3>
          </Box>
        </Box>
      ))}
      <h2>El total de pagar es ${total}</h2>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
      <Link>
        <Button onClick={clearCart} variant="outlined" color="error">
          Vaciar carrito
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
