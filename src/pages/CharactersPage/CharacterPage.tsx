import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Character, Episode } from "../../types/types";
import Preloader from "../../components/common/Preloader/Preloader";

import convertDate from "../../utils/convertDate";

import classes from "./CharacterPage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { favoritesService } from "../../services/favorites";
import useLocalStorage from "../../hooks/useLocalStore";

export const CharacterPage = () => {
  const [episodeNames, setEpisodeNames] = useState<Episode[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const { add, remove, getItemById, getAllItems } = useLocalStorage();

  const { id } = useParams();

  const {
    data: character,
    error,
    isLoading,
  } = useFetch<Character>({
    url: `https://rickandmortyapi.com/api/character/${id}`,
    bypass: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (character && character.episode) {
      const fetchEpisodeNames = async () => {
        const names = await Promise.all(
          character.episode.map(async (episodeUrl) => {
            const response = await fetch(episodeUrl);
            const data = await response.json();
            return data;
          })
        );
        setEpisodeNames(names);
      };

      fetchEpisodeNames();
    }
  }, [character]);

  const toggleFavorites = (character: Character) => {
    setIsFavorite((prevState) => !prevState);

    isFavorite ? remove(character.id) : add(character);
  };
  return (
    <div className={classes.character_page}>
      <h1>Character</h1>
      {error && <div>{error?.message}</div>}
      {isLoading && <Preloader />}

      <article className={classes.character_item}>
        <button
          className={classes.character_back_btn}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className={classes.character_info}>
          <div className={classes.image}>
            <img
              src={character?.image}
              alt={character?.name}
              title={character?.name}
            />
          </div>
          <div className={classes.body}>
            <div className={classes.section}>
              <h2>{character?.name}</h2>
            </div>
            <div className={classes.section}>
              <span className={classes.status}>
                <span
                  className={`${classes.status_icon} ${
                    character?.status === "Alive"
                      ? classes.alive
                      : character?.status === "Dead"
                      ? classes.dead
                      : classes.unknown
                  }`}
                ></span>
                {character?.status} - {character?.species}
              </span>
            </div>
            <div className={classes.section}>
              <span className={classes.text_gray}>Gender:</span>
              <span> {character?.gender}</span>
            </div>
            {character?.type && (
              <div className={classes.section}>
                <span className={classes.text_gray}>Type:</span>
                <span> {character?.type}</span>
              </div>
            )}
            <div className={classes.section}>
              <span className={classes.text_gray}>Created:</span>
              <span> {convertDate(character?.created || "")}</span>
            </div>
            <div className={classes.section}>
              <span className={classes.text_gray}>Last known location: </span>
              <a href={character?.location.url}>{character?.location.name}</a>
            </div>
            <div className={classes.section}>
              <span className={classes.text_gray}>First seen in: </span>
              <a href={character?.origin.url}>{character?.origin.name}</a>
            </div>
          </div>
        </div>
        <div className={classes.actions}>
          <button
            className={classes.add_favorite_btn}
            onClick={() => toggleFavorites(character as Character)}
          >
            <div
              className={`${classes.star} ${
                isFavorite ? `${classes.favorite}` : ""
              }`}
            ></div>
          </button>
        </div>
      </article>

      {character?.episode && (
        <div className={classes.episodes}>
          <h3>Episodes</h3>
          <ul>
            {episodeNames.map((e, i) => (
              <li key={i}>
                <a href={e.url} className={classes.episode_url}>
                  {e.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
