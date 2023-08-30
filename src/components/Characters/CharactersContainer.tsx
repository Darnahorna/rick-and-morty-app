import { CharacterCard } from "../Card/CharacterCard.tsx";
import { Filters } from "../Filters/Filters.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader.tsx";
import { Character } from "../types/types.ts";

export const CharactersContainer = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <header>Characters</header>
      <Filters />
      <section className="parent-grid">
        {data &&
          data.map((item: Character) => {
            return <CharacterCard item={item} key={item.id} />;
          })}
      </section>
      <Pagination />
    </>
  );
};
