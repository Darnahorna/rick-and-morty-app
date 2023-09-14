import { useEffect, useState } from "react";

import { PaginationInfoProps } from "../../../types/types";

import classes from "./Pagination.module.css";

const Pagination = ({
  paginationInfo,
  onPageChanged,
  currentPage,
}: PaginationInfoProps) => {
  let pages = [];
  for (let i = 1; i <= paginationInfo.pages; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(paginationInfo.pages / 7);

  const [portionNumber, setPortionNumber] = useState(1);

  const leftPortionPageNumber = (portionNumber - 1) * 7 + 1;
  const rightPortionNumber = portionNumber * 7;

  useEffect(() => setPortionNumber(Math.ceil(currentPage / 7)), [currentPage]);

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
        .map((p, index) => {
          return (
            <button
              onClick={() => onPageChanged(p)}
              className={
                currentPage === p
                  ? classes.active
                  : classes.normal_pagination_button
              }
              key={index}
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
export default Pagination;
