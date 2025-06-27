import Head from "next/head";
import Link from "next/link";
import { volumes } from "/lib/data";

export default function Volume_2() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Head>
        <title>The Fellowship of the Ring</title>
      </Head>
      <header>
        <Link href={"/"}>Home</Link> <Link href={"/volumes"}>Volumes</Link>
      </header>
      <h1>The Fellowship of the Ring</h1>
      <p>{volumes.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}
