import './App.css';
import { useState } from 'react';

function App() {

  const [aireGlobo, setAireGlobo] = useState(5);
  const [boom, setBoom] = useState(false);

  function agragarAire() {
    if (aireGlobo < 15) {
      setAireGlobo(aireGlobo + 1);
    } else {
      setBoom(true);
    }
  }

  function restarAire() {
    if (aireGlobo > 5) {
      setAireGlobo(aireGlobo - 1);
    }
    if (boom) {
      setBoom(false);
      setAireGlobo(5);
    }
  }

  return (
    <div className="app">
      <div className="container text-center">
        <div className="row align-items-center all-height">
          <div className="col">
            <div className="d-grid gap-2">
              <button className="btn btn-success" onClick={agragarAire} disabled={boom} type="button">+ Aire</button>
              <button className="btn btn-danger" onClick={restarAire} disabled={aireGlobo === 5} type="button">- Aire</button>

            </div>

          </div>
          <div className="col">
            {boom && <h1 style={{ fontSize: `15rem` }}>💥</h1>}
            {/* lo de arriba es como un if y llaves para que lo tome como Js*/}
            {!boom && <h1 style={{ fontSize: `${aireGlobo}rem` }}>🎈</h1>}
            {/* {boom  ?  <h1 style={{ fontSize: `15rem` }}>💥</h1> : <h1 style={{ fontSize: `${aireGlobo}rem` }}>🎈</h1>} eso es un if terneario y hace lo mismo de arriba pero menos codigo*/}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
