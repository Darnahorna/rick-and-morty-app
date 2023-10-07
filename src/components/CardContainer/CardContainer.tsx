import { useEffect, useState } from "react";
import { EpisodeCard } from "../Card/EpisodeCard.tsx";
import { LocationCard } from "../Card/LocationCard.tsx";
import Pagination from "../common/Pagination/Pagination.tsx";
import Preloader from "../common/Preloader/Preloader.tsx";

import {
  ContentType,
  Episode,
  EpisodeResponse,
  Location,
  LocationResponse,
} from "../../types/types.ts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.tsx";
import { useFetch } from "../../hooks/useFetch.ts";

export const CardContainer = ({ contentType }: ContentType) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const onPageChanged = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const queryParams = new URLSearchParams({
    page: currentPage.toString(),
  });

  const url = `https://rickandmortyapi.com/api/${contentType}?${queryParams.toString()}`;

  const { data, error, isLoading } = useFetch<
    EpisodeResponse | LocationResponse
  >({ url: `${url}`, bypass: false });

  if (isLoading) {
    return <Preloader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <h2>{contentType === "location" ? "Locations" : "Episodes"}</h2>

      <section className="parent-grid">
        {data &&
          data.results.map((item) => {
            if (contentType === "location") {
              return <LocationCard item={item as Location} key={item.id} />;
            } else if (contentType === "episode") {
              return <EpisodeCard item={item as Episode} key={item.id} />;
            }
            return null;
          })}
      </section>
      {data?.info && (
        <Pagination
          paginationInfo={data.info}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
      )}
    </>
  );
};
