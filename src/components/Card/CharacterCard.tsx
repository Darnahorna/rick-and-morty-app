import { Link } from "react-router-dom";
import { CharacterProps } from "../../types/types";
import classes from "./Card.module.css";

export const CharacterCard = ({ item }: CharacterProps) => {
  return (
    <Link to={`/characters/${item.id}`}>
      <article className={classes.grid_item}>
        <div className={classes.card_img}>
          <img src={item.image} title={item.name} alt={item.name} />
        </div>
        <div className={classes.item_description}>
          <div className={classes.section}>
            <h3>{item.name}</h3>

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
            {item.location.name}
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>First seen in:</span>
            {item.origin.name}
          </div>
        </div>
      </article>
    </Link>
  );
};
