import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>open</Button>
      <Button>close</Button>
      <Button>submit</Button>
      <Button>return</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
