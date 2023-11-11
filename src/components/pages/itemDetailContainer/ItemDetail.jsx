import { Link } from "react-router-dom"; // Importa el componente Link
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Badge, Button, TextField } from "@mui/material";

export const ItemDetail = ({
  productSelected,
  onAdd,
  initial,
  handleFormSubmit,
  handleEmailChange,
  email,
}) => {
  return (
    <div>
      <div>
        <Link to="/products" className="btnNavegation">
          <ArrowBackIcon sx={{ color: "blue" }}></ArrowBackIcon>
          <Badge
            component="h5"
            sx={{ color: "blue", fontWeight: 400, fontSize: 22 }}
          >
            Volver a la página anterior
          </Badge>
        </Link>
      </div>
      <div className="containerDetail">
        <h2>{productSelected.title}</h2>
        <img className="img-Detail" src={productSelected.img} alt="" />
        <div className="containerDescriptionBtns">
          <p>{productSelected.description}</p>
          <b>$ {productSelected.price}.</b>
        </div>

        {
          <div>
            {initial >= 1 && (
              <div
                style={{
                  background: "#f00",
                  padding: "7px",
                  borderRadius: "5px",
                  color: "#fff",
                }}
              >
                <h3>Tenes {initial} en el carrito!</h3>
              </div>
            )}
          </div>
        }
        {productSelected.stock == 0 ? (
          <Button variant="outlined" disabled>
            SIN STOCK
          </Button>
        ) : (
          <CounterContainer
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={initial}
          />
        )}
      </div>
      {productSelected.stock === 0 ? (
        <form
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          onSubmit={handleFormSubmit}
        >
          <h2>Si quieres ser notificado al recibir stock déjanos tu mail!</h2>
          <TextField
            required
            sx={{ margin: "20px 0", width: "1200px" }}
            name="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
          />
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
};
