import { useEffect, useState } from "react";

export default function PokemonList() {
  const [url, setURL] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);
  if (!pokemon) {
    return <h1>Loading</h1>;
  }

  return (
    <main>
      {pokemon.previous && (
        <button
          type="button"
          onClick={() => {
            setURL(pokemon.previous);
          }}
        >
          Previous Page
        </button>
      )}
      {pokemon.next && (
        <button
          type="button"
          onClick={() => {
            setURL(pokemon.next);
          }}
        >
          Next Page
        </button>
      )}
      <ul>
        {pokemon.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
