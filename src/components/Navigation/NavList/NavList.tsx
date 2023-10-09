import { NavLink } from "react-router-dom";
import classes from "./NavList.module.css";

type NavLinkProps = { closeMenu: () => void };

export const NavList = ({ closeMenu }: NavLinkProps) => {
  return (
    <ul className={classes.menu_list}>
      <li>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/characters" onClick={closeMenu}>
          Characters
        </NavLink>
      </li>
      <li>
        <NavLink to="/locations" onClick={closeMenu}>
          Locations
        </NavLink>
      </li>
      <li>
        <NavLink to="/episodes" onClick={closeMenu}>
          Episodes
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/favorites" onClick={closeMenu}>
          Favorites
        </NavLink>
      </li> */}
    </ul>
  );
};
