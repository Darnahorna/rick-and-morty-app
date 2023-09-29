import { Character } from "../../types/types.ts";
import convertDate from "../../utils/convertDate";
import classes from "./InfoBody.module.css";

type CharacterProps = {
  character: Character;
};

export const InfoBody = ({ character }: CharacterProps) => {
  return (
    <div className={classes.body}>
      <div className={classes.section}>
        <h2>{character.name}</h2>
      </div>
      <div className={classes.section}>
        <span className={classes.status}>
          <span
            className={`${classes.status_icon} ${
              character.status === "Alive"
                ? classes.alive
                : character.status === "Dead"
                ? classes.dead
                : classes.unknown
            }`}
          ></span>
          {character.status} - {character.species}
        </span>
      </div>
      <div className={classes.section}>
        <span className={classes.text_gray}>Gender:</span>
        <span> {character.gender}</span>
      </div>
      {character.type && (
        <div className={classes.section}>
          <span className={classes.text_gray}>Type:</span>
          <span> {character.type}</span>
        </div>
      )}
      <div className={classes.section}>
        <span className={classes.text_gray}>Created:</span>
        <span> {convertDate(character.created)}</span>
      </div>
      <div className={classes.section}>
        <span className={classes.text_gray}>Last known location: </span>
        <a href={character.location.url}>{character.location.name}</a>
      </div>
      <div className={classes.section}>
        <span className={classes.text_gray}>First seen in: </span>
        <a href={character.origin.url}>{character.origin.name}</a>
      </div>
    </div>
  );
};
