import classes from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <div>
        <span className={classes.logo}>
          <a href="" className={classes.link_logo}>
            The Rick and Morty
          </a>
        </span>
      </div>
      <div className={classes.menu_toggle} id="mobile-menu">
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
        <span className={classes.bar}></span>
      </div>
      <ul className={classes.nav_list}>
        <li>
          <a href="">Characters</a>
        </li>
        <li>
          <a href="">Locations</a>
        </li>
        <li>
          <a href="">Episodes</a>
        </li>
      </ul>
    </nav>
  );
};
