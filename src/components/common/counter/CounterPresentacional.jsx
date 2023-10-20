import "./CounterPresentacional.css";

const CounterPresentacional = ({ sumar, contador, restar, onAdd }) => {
  return (
    <div className="containerCounter">
      <div className="containerBtn">
        <button className="btn-Counter" onClick={sumar}>
          +
        </button>
        <h4> {contador} </h4>
        <button className="btn-Counter" onClick={restar}>
          -
        </button>
      </div>
      <button className="btn-AddCart" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default CounterPresentacional;
