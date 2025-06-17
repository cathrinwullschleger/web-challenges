export default function App() {
  return (
    <>
      <Button color="pink" disabled text="Open" />
      <Button color="#d6f804" disabled={false} text="close" />
      <Button color="#69f4b6" disabled={false} text="submit" />
    </>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button disabled={disabled} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
