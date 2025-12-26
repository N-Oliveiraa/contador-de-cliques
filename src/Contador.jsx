import { useState } from "react";
import "./Contador.css";


const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  function resetar() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Contador de Cliques</h1>
      <h2 className="contador" onClick={incrementar} aria-live="polite">
        {count}
      </h2>

      <button className="botao" onClick={incrementar} aria-label="Incrementar contador">
        Clique aqui
      </button>

      <button className="botao-reset" onClick={resetar} aria-label="Resetar contador">
          Reset
      </button>
    </div>
  );
}

export default Contador;

