import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(
    id ? `/api/products/${id}` : null,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <p>Name: {data.name}</p>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category}</p>
    </>
  );
}
