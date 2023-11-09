import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} showZero color="primary">
        <AddShoppingCartIcon color="contained" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
