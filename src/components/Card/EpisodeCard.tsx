import { EpisodeProps } from "../types/types";
import classes from "./Card.module.css";

export const EpisodeCard = ({ item }: EpisodeProps) => {
  return (
    <article className={classes.grid_item}>
      <div className={classes.item_description}>
        <div className={classes.section}>
          <a href={item.url}>
            <h3>{item.name}</h3>
          </a>
          <span className={classes.status}></span>
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>Episode code:</span>
          <a>{item.episode}</a>
        </div>
        <div className={classes.section}>
          <span className={classes.text_gray}>Created:</span>
          <a href="">{item.created}</a>
        </div>
      </div>
    </article>
  );
};
