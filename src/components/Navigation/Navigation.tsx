import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <div>
        <span className={classes.logo}>
          <NavLink to="/characters" className={classes.link_logo}>
            The Rick and Morty
          </NavLink>
        </span>
      </div>
      <div className={classes.menu_toggle} id="mobile-menu">
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
      <ul className={classes.nav_list}>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/locations">Locations</NavLink>
        </li>
        <li>
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
      </ul>
    </nav>
  );
};
