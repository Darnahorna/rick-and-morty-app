import { useRef, useState } from "react";
import { FilterInfoProps } from "../../types/types";

import classes from "./CharterFields.module.css";

export const Filters = ({ onFilterChanged, filterData }: FilterInfoProps) => {
  const [status, setStatus] = useState<string>(filterData?.status);
  const [gender, setGender] = useState<string>(filterData?.gender);
  const [search, setSearch] = useState<string>(filterData?.search);

  const statusSelectRef = useRef<HTMLSelectElement | null>(null);
  const genderSelectRef = useRef<HTMLSelectElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const onChangeStatus = () => {
    setStatus(statusSelectRef.current!.value);
  };
  const onChangeGender = () => {
    setGender(genderSelectRef.current!.value);
  };
  const onChangeSearch = () => {
    setSearch(searchInputRef.current!.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // let fd = new FormData(e.currentTarget);
    // let formData = JSON.stringify(Object.fromEntries(fd));
    // let filterData = JSON.parse(formData) as FilterProps;
    onFilterChanged({
      gender,
      search,
      status,
    });
  };

  return (
    <section>
      <form
        className={classes.controllers}
        onSubmit={handleSubmit}
        method="GET"
      >
        <div className="filter">
          <select
            name="status"
            id="status"
            placeholder="Select status"
            value={status}
            ref={statusSelectRef}
            onChange={onChangeStatus}
            // defaultValue={""}
          >
            <option disabled value={""}>
              {" -- select a status -- "}
            </option>
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div className="sorting">
          <select
            name="gender"
            id="gender"
            onChange={onChangeGender}
            ref={genderSelectRef}
            value={gender}
            // defaultValue={""}
          >
            <option disabled value={""}>
              {" -- select a gender -- "}
            </option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="genderless">genderless</option>
          </select>
        </div>
        <div className={classes.search}>
          <input
            type="search"
            placeholder="Search..."
            name="search"
            id="search"
            ref={searchInputRef}
            onChange={onChangeSearch}
            value={search}
          />
          <span className="material-symbols-outlined"> search </span>
        </div>
        <div className={classes.submit_btn}>
          <button type="submit" className={classes.btn}>
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
