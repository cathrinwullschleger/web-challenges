import Head from "next/head";
import Link from "next/link";
import { volumes } from "/lib/data";

export default function Volume_2() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Head>
        <title>The two Towers</title>
      </Head>
      <header>
        <Link href={"/"}>Home</Link> <Link href={"/volumes"}>Volumes</Link>
      </header>
      <h1> The two Towers</h1>
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
