import React from "react";
import { Badge } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Checkout = ({ setUser, handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": { m: 1, width: "25ch" },
        margin: "50px 100px",
        padding: "40px",
        width: "25vw",
        border: "2px solid #acacac",
      }}
      noValidate
      autoComplete="off"
    >
      <Badge component={"h1"}>Checkout</Badge>
      <Box>
        <TextField
          required
          sx={{ margin: "20px 0" }}
          name="name"
          label="Nombre"
          variant="outlined"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <TextField
          required
          sx={{ margin: "20px 0" }}
          name="cellphone"
          label="Numero de teléfono"
          variant="outlined"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <TextField
          required
          sx={{ margin: "20px 0" }}
          name="email"
          label="Email"
          variant="outlined"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <Button variant="outlined" color="primary" type="submit">
          ENVIAR LINK DE PAGO
        </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
