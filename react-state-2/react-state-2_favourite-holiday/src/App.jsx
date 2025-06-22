import "./styles.css";
import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");
  const holidayInputRef = useRef(null); // React-Hook, Box die später gefüllt werden kann um fokus zu setzen
  function handleSubmit(event) {
    event.preventDefault();

    const holidayValue = event.target.holiday.value;
    const dateValue = event.target.date.value;

    setHoliday(holidayValue);
    setDate(dateValue);

    event.target.reset();
    holidayInputRef.current.focus(); // Fokus auf Holiday-Feld setzen
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          ref={holidayInputRef} // hier wird der Fokus gesetzt
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
