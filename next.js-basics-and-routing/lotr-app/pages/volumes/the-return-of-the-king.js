import Head from "next/head";
import Link from "next/link";
import { volumes } from "/lib/data";

export default function Volume_2() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <Head>
        <title>The Return of the King</title>
      </Head>
      <header>
        <Link href={"/"}>Home</Link> <Link href={"/volumes"}>Volumes</Link>
      </header>
      <h1> The Return of the King</h1>
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
