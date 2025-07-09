import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());
export default function HomePage() {
  const { data, isLoading } = useSWR("api/products", fetcher);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>
            Price: {product.price} {product.currency}
          </p>
          <p>Category: {product.category}</p>
        </li>
      ))}
    </ul>
  );
}
