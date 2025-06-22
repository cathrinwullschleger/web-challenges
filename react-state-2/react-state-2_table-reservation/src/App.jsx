import Counter from "./components/Counter";
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function onDelete() {
    if (people > 0) {
      setPeople(people - 1);
    }
  }

  function onAdd() {
    setPeople(people + 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={onAdd} onDelete={onDelete} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
