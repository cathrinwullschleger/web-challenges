import Head from "next/head";
import Link from "next/link";
import { volumes } from "/lib/data";

export default function Volumes() {
  return (
    <>
      <Head>
        <title>Volumes</title>
      </Head>
      <header>
        <Link href={"/"}>Home</Link>
      </header>
      <main>
        <h1>The Lord of the Ring</h1>
        <h2>All Volumes</h2>
        <ul>
          {volumes.map((volume, index) => (
            <li key={index}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
