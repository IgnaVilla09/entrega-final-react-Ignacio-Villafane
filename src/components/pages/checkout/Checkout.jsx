import React from "react";
import { Badge } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Checkout = ({ setUser, user, handleSubmit }) => {
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
          sx={{ margin: "20px 0" }}
          id="name"
          label="Nombre"
          variant="outlined"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <TextField
          sx={{ margin: "20px 0" }}
          id="lastname"
          label="Apellido"
          variant="outlined"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <TextField
          sx={{ margin: "20px 0" }}
          id="email"
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
