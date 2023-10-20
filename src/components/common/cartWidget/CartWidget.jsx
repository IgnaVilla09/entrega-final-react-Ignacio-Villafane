import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <AddShoppingCartIcon color="contained" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
