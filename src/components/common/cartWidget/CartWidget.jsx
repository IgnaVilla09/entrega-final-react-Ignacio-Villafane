import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  let totalItems = totalQuantity();
  return (
    <Link to="/cart">
      <Badge badgeContent={totalItems} showZero color="primary">
        <AddShoppingCartIcon color="contained" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
