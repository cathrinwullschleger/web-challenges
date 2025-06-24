import { D6Button } from "./components/D6Button";
import { useState } from "react";
import History from "./components/History";
import "./styles.css";
import { getD6Roll } from "./utils";

export default function App() {
  const [rolls, setRolls] = useState([]);
  // function, die einen neuen Würfelwurf erzeugt, State aktualisiert
  // newRoll wird erstellt und an den Anfang der Arrays(roll) gesetzt
  function handleRoll() {
    const newRoll = {
      value: getD6Roll(), //Zufallszahl
      time: Date.now(), // Zeitstempel
    };
    setRolls([newRoll, ...rolls]);
  }
  // Nimmt den Wert des neuesten Wurfs, falls vorhanden — sonst ist der Wert einfach leer (undefined).
  // ?. verhindert Fehler, wenn rolls leer ist
  const currentRollValue = rolls[0]?.value;
  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
