export default function App() {
  return (
    <>
      <Button color="pink" disabled={true} text="Open" />
      <Button
        color="#d6f804"
        disabled={false}
        text="close"
        onClick={() => alert("You clicked me!")}
      />
      <Button
        color="#69f4b6"
        disabled={false}
        text="submit"
        onClick={() => console.log("Button clicked!")}
      />
    </>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}
