import classes from "./Card.module.css";
import { LocationProps } from "../../types/types.ts";

export const LocationCard = ({ item }: LocationProps) => {
  return (
    <article className={`${classes.grid_item} ${classes.smaller_grid}`}>
      <div className={classes.item_description}>
        <div className={classes.section}>
          <a href={item.url}>
            <h3>{item.name}</h3>
          </a>
          <span className={classes.status}></span>
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>Type of the location:</span>
          <a>{item.type}</a>
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>Dimension:</span>
          <a href="">{item.dimension}</a>
        </div>
      </div>
    </article>
  );
};
