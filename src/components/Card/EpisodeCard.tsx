import convertDate from "../../utils/convertDate";
import { EpisodeProps } from "../../types/types";
import classes from "./Card.module.css";

export const EpisodeCard = ({ item }: EpisodeProps) => {
  console.log(item);
  const formattedDate = convertDate(item.created);
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
          <span className={classes.text_gray}>Episode code:</span>
          {item.episode}
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>Created:</span>
          {formattedDate}
        </div>
      </div>
    </article>
  );
};
