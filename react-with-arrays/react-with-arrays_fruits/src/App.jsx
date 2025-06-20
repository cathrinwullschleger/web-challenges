import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "🍌 Banana", color: "yellow", className: "card--yellow" },
    { id: 2, name: "🍎 Apple", color: "red", className: "card--red " },
    { id: 3, name: "🍇 Grape", color: "purple", className: "card--purple " },
    { id: 4, name: "🍊 Orange", color: "orange", className: "card--orange " },
    { id: 5, name: "🍉 Watermelon", color: "green", className: "card--green " },
  ];

  return (
    <main>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Card fruit={fruit} />
          </li>
        ))}
      </ul>
    </main>
  );
}
