import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  // const handleRoll = () => {
  //   setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  // };

  // const currentRollValue = rolls[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={value} />
    </button>
  );
}

//State "hochheben" (Lifting State Up) in eine Elternkomponente, die den Zustand verwaltet,
// und Kinder erhalten nur die Daten, die sie wirklich brauchen.

// kein eigener State oder Logic, nur Präsentationskomponente
