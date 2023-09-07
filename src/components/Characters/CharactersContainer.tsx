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

  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState();

  const onPageChanged = (pageNumber: number) => {
    requestUsers(pageNumber);
    console.log("Page " + pageNumber + " clicked");
    setCurrentPage(pageNumber);
  };

  const requestUsers = (pageNumber: number) => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.results);
        setLoading(false);
        setPaginationInfo(data.info);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

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
        setPaginationInfo(data.info);
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
      <h2>Characters</h2>
      <Filters />
      <section className="parent-grid">
        {data &&
          data.map((item: Character) => {
            return <CharacterCard item={item} key={item.id} />;
          })}
      </section>
      {paginationInfo && (
        <Pagination
          paginationInfo={paginationInfo}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
