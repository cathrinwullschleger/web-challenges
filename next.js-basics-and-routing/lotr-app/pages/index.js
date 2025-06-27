import { introduction, volumes } from "../lib/data";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <header>
          <Link href={"/volumes"}>Volumes</Link>
        </header>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>AllVolumes</h2>
        <ul>
          <li>
            <Link href={"/volumes/the-fellowship-of-the-ring"}>
              The Fellowship of the Ring
            </Link>
          </li>
          <li>
            <Link href={"/volumes/the-two-towers"}> The two Towers</Link>
          </li>
          <li>
            <Link href={"/volumes/the-return-of-the-king"}>
              The Return of the King
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
