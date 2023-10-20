import { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    const AlertStock = () => {
      Swal.fire("Cantidad maxima!");
    };

    if (contador < stock) {
      setContador(contador + 1);
    } else {
      AlertStock();
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
