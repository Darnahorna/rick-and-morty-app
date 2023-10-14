import convertDate from "../../utils/convertDate";
import { EpisodeProps } from "../../types/types";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

export const EpisodeCard = ({ item }: EpisodeProps) => {
  const formattedDate = convertDate(item.created);
  return (
    <Link to={`/episodes/${item.id}`}>
      <article className={`${classes.grid_item} ${classes.smaller_grid}`}>
        <div className={classes.item_description}>
          <div className={classes.section}>
            <h3>{item.name}</h3>

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
    </Link>
  );
};
