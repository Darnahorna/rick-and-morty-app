import { useEffect, useState } from "react";
import { Filters } from "../Filters/CharacterFilters.tsx";
import { EpisodeCard } from "../Card/EpisodeCard.tsx";
import { CharacterCard } from "../Card/CharacterCard.tsx";
import { LocationCard } from "../Card/LocationCard.tsx";
import Pagination from "../common/Pagination/Pagination.tsx";
import Preloader from "../common/Preloader/Preloader.tsx";

import {
  Character,
  ContentType,
  Episode,
  Location,
} from "../../types/types.ts";

export const CardContainer = ({ contentType }: ContentType) => {
  const [data, setData] = useState<Character[] | Location[] | Episode[]>([]);
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
        // if (isResolved) {
        setData(data.results);
        //myPromise.then();
        setLoading(false);
        setPaginationInfo(data.info);
        // } else {
        //   myPromise.then(() => {
        //     setData(data.results);
        //     setLoading(false);
        //     setPaginationInfo(data.info);
        //   });
        // }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    requestData();
    setCurrentPage(1);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h2>
        {contentType === "character"
          ? "Characters"
          : contentType === "location"
          ? "Locations"
          : "Episodes"}
      </h2>
      <Filters />
      <section className="parent-grid">
        {data &&
          data.map((item) => {
            if (contentType === "character") {
              return <CharacterCard item={item as Character} key={item.id} />;
            } else if (contentType === "location") {
              return <LocationCard item={item as Location} key={item.id} />;
            } else if (contentType === "episode") {
              return <EpisodeCard item={item as Episode} key={item.id} />;
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
