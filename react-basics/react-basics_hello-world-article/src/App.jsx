import "./styles.css";
function HelloWorldArticle() {
  return (
    <article>
      <h1> Hello World</h1>
      <p>
        This is your first step into the React universe. You&#39;ve just
        rendered your very first component!
      </p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
