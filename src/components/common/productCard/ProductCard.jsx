import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        border: 3,
        padding: 2,
        borderColor: "primary.main",
        borderRadius: 10,
        maxHeight: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image={item.img}
        title={`image ${item.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button size="small" variant="contained">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
