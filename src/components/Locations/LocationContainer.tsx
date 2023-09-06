import { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { LocationCard } from "../Card/LocationCard.tsx";
import Preloader from "../Preloader/Preloader.tsx";
import { Location } from "../types/types.ts";

export const LocationContainer = () => {
  const [data, setData] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
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
      <h2>Locations</h2>
      <Filters />
      <section className="parent-grid">
        {data &&
          data.slice(0, 9).map((item: Location) => {
            return <LocationCard item={item} key={item.id} />;
          })}
      </section>
      <Pagination />
    </>
  );
};
