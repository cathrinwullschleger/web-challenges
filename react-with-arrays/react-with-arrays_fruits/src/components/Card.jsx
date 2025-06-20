import "./Card.css";

export default function Card({ fruit }) {
  return (
    <p className={`card ${fruit.className}`}>
      {fruit.name} color: {fruit.color}
    </p>
  );
}
