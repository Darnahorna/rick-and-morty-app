import { useEffect, useState } from "react";
import classes from "./Pagination.module.css";
import { PaginationInfoProps } from "../types/types";

export const Pagination = ({
  paginationInfo,
  onPageChanged,
  currentPage,
}: PaginationInfoProps) => {
  console.log(paginationInfo);
  let pages = [];
  for (let i = 1; i <= paginationInfo.pages; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(42 / 10);

  const [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * 10 + 1;
  let rightPortionNumber = portionNumber * 10;

  useEffect(() => setPortionNumber(Math.ceil(currentPage / 10)), [currentPage]);

  return (
    <section className={classes.pagination}>
      {portionNumber > 1 && (
        <button
          className={classes.pagination_btn}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          {"⬅️"}
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <button
              onClick={() => onPageChanged(p)}
              className={
                currentPage === p ? classes.selected : classes.pagination_btn
              }
            >
              {p}
            </button>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={classes.pagination_btn}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          {"➡️"}
        </button>
      )}
    </section>
  );
};
