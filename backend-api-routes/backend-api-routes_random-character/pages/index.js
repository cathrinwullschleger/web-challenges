import useSWR from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function HomePage() {
  const { data, isLoading } = useSWR("api/random-characters", fetcher);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.age}</p>
      <p>{data.profession}</p>
    </>
  );
}
