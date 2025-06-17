import "./styles.css";
function Article() {
  return (
    <article className="article">
      <h2 className="article__title">What is react? </h2>
      <label htmlFor="reactInfo"> Find information here: </label>

      <input id="reactInfo" />
      <a className="article__link" href="https://react.dev/">
        React
      </a>
    </article>
  );
}
export default function App() {
  return <Article />;
}
