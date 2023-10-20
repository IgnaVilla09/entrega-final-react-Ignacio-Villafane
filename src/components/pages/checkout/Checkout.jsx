import { Badge } from "@mui/material";

const Checkout = ({ setUser, user }) => {
  return (
    <div>
      <Badge component={"h1"}>Checkout</Badge>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(user);
        }}
      >
        <input
          type="text"
          name="nombre"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <input
          type="text"
          name="apellido"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <input
          type="text"
          name="email"
          onChange={(event) => {
            setUser(event);
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
