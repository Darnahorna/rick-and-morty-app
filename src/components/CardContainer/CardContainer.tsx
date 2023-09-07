import { useEffect, useState } from "react";
import { Filters } from "../Filters/Filters.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";
import { Character, ContentType, Episode, Location } from "../types/types.ts";
import Preloader from "../Preloader/Preloader.tsx";
import { EpisodeCard } from "../Card/EpisodeCard.tsx";
import { CharacterCard } from "../Card/CharacterCard.tsx";
import { LocationCard } from "../Card/LocationCard.tsx";

export const CardContainer = ({ contentType }: ContentType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState();

  const onPageChanged = (pageNumber: number) => {
    requestData(pageNumber);
    setCurrentPage(pageNumber);
  };

  const requestData = (pageNumber: number = 1) => {
    fetch(`https://rickandmortyapi.com/api/${contentType}/?page=${pageNumber}`)
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
    requestData();
    setCurrentPage(1);
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Type guards to check the type
  function isCharacter(
    item: Character | Episode | Location
  ): item is Character {
    return (item as Character).name !== undefined;
  }

  function isEpisode(item: Character | Episode | Location): item is Episode {
    return (item as Episode).name !== undefined;
  }
  function isLocation(item: Character | Episode | Location): item is Location {
    return (item as Location).name !== undefined;
  }
  console.log(data);

  return (
    <>
      <h2>
        {contentType === "character"
          ? "Character"
          : contentType === "location"
          ? "Locations"
          : "Episodes"}
      </h2>
      <Filters />
      <section className="parent-grid">
        {data &&
          data.map((item: Episode | Character | Location) => {
            if (contentType === "character" && isCharacter(item)) {
              return <CharacterCard item={item} key={item.id} />;
            } else if (contentType === "location" && isLocation(item)) {
              return <LocationCard item={item} key={item.id} />;
            } else if (contentType === "episode" && isEpisode(item)) {
              return <EpisodeCard item={item} key={item.id} />;
            }
            return null;
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
