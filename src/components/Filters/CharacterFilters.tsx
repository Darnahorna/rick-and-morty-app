import { DetailedHTMLProps, FormEventHandler, FormHTMLAttributes } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Character } from "../../types/types";
import classes from "./CharterFields.module.css";

export const Filters = () => {
  const { data: character } = useFetch<Character>(
    `https://rickandmortyapi.com/api/character/`
  );

  //function to handle submit
  const handleSubmit = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const search = formData.get("search");
    const status = formData.get("status");
    const gender = formData.get("gender");

    // You can pass formData as a fetch body directly:
    fetch("/https://rickandmortyapi.com/api/character/", {
      method: form.method,
      body: formData,
    });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  return (
    <section>
      <form
        className={classes.controllers}
        onSubmit={handleSubmit}
        method="GET"
      >
        <div className="filter">
          <select name="status" id="status">
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div className="sorting">
          <select name="gender" id="gender">
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
