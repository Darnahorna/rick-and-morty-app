import { useEffect, useMemo, useState } from "react";
import { Filters } from "../Filters/CharacterFilters.tsx";
import { CharacterCard } from "../Card/CharacterCard.tsx";
import Pagination from "../common/Pagination/Pagination.tsx";
import Preloader from "../common/Preloader/Preloader.tsx";
import {
  Character,
  CharacterResponse,
  FilterProps,
} from "../../types/types.ts";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.tsx";
import { useFetch } from "../../hooks/useFetch.ts";

export const CharacterContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState<FilterProps>({
    status: "",
    gender: "",
    search: "",
  });

  const queryParams = new URLSearchParams({
    status: filterData?.status || "",
    gender: filterData?.gender || "",
    name: filterData?.search || "",
    page: currentPage.toString(),
  });
  const url = `https://rickandmortyapi.com/api/character?${queryParams.toString()}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const onPageChanged = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const onFilterChanged = (filterData: FilterProps) => {
    setFilterData(filterData);
    setCurrentPage(1);
  };

  const { data, isLoading, isError } = useFetch<CharacterResponse>({
    url: `${url}`,
    bypass: false,
  });

  const filteredCharacters = useMemo(
    () =>
      data?.results.filter((character) => {
        return (
          character.name.toLowerCase().includes(filterData?.search || "") &&
          character.status.toLowerCase().includes(filterData?.status || "") &&
          character.gender.toLowerCase().includes(filterData?.gender || "")
        );
      }),
    [data?.results, filterData?.search]
  );

  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      {" "}
      <h2>Characters</h2>
      <Filters onFilterChanged={onFilterChanged} filterData={filterData} />
      <section className="parent-grid">
        {filteredCharacters?.map((item: Character) => {
          return <CharacterCard item={item as Character} key={item.id} />;
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
