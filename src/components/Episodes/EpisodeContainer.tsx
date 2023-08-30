import { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { Episode } from "../types/types.ts";
import Preloader from "../Preloader/Preloader.tsx";
import { EpisodeCard } from "../Card/EpisodeCard.tsx";

export const EpisodeContainer = () => {
  const [data, setData] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
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
      <header>Episodes</header>
      <Filters />
      <section className="parent-grid">
        {data &&
          data.map((item: Episode) => {
            return <EpisodeCard item={item} key={item.id} />;
          })}
      </section>
      <Pagination />
    </>
  );
};
