import Link from "next/link";
import { introduction } from "../../lib/data";
import Head from "next/head";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter(); // wichtig, oben in der Komponente
  const { slug } = router.query;
  function handleRandomVolume() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolume = volumes[randomIndex];

    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Head>
        {" "}
        <title>Volumes</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {" "}
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title} </Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandomVolume}>
        {" "}
        Suprise me
      </button>
    </>
  );
}
