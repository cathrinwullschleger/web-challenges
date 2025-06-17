export default function App() {
  return <Greeting name="Max" />;
}

function Greeting({ name }) {
  const coaches = ["Ella", "Daniel", "Kaja"];
  const isCoach = coaches.includes(name);

  return <h1>{isCoach ? `Hello Coach` : `Hello ${name}`}</h1>;
}
