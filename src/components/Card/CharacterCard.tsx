import { CharacterProps } from "../types/types";
import classes from "./Card.module.css";

export const CharacterCard = ({ item }: CharacterProps) => {
  return (
    <article className={classes.grid_item}>
      <div className={classes.card_img}>
        <img src={item.image} />
      </div>
      <div className={classes.item_description}>
        <div className={classes.section}>
          <a href={item.url}>
            <h3>{item.name}</h3>
          </a>
          <span className={classes.status}>
            <span
              className={`${classes.status_icon} ${
                item.status === "Alive"
                  ? classes.alive
                  : item.status === "Dead"
                  ? classes.dead
                  : classes.unknown
              }`}
            ></span>
            {item.status} - {item.species}
          </span>
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>Last known location:</span>
          <a href={item.location.url}>{item.location.name}</a>
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>First seen in:</span>
          <a href={item.origin.url}>{item.origin.name}</a>
        </div>
      </div>
    </article>
  );
};
