export default function App() {
  return <Sum valueA={3} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} ={valueA + valueB}
    </h1>
  );
}
