import classes from "./Card.module.css";
import { LocationProps } from "../../types/types.ts";
import { Link } from "react-router-dom";

export const LocationCard = ({ item }: LocationProps) => {
  return (
    <Link to={`/location/${item.id}`}>
      <article className={`${classes.grid_item} ${classes.smaller_grid}`}>
        <div className={classes.item_description}>
          <div className={classes.section}>
            <h3>{item.name}</h3>
            <span className={classes.status}></span>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Type of the location:</span>
            {item.type}
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Dimension:</span>
            {item.dimension}
          </div>
        </div>
      </article>
    </Link>
  );
};
