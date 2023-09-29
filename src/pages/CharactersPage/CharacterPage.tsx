import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Character, Episode } from "../../types/types";
import Preloader from "../../components/common/Preloader/Preloader";

import classes from "./CharacterPage.module.css";
import { useEffect, useState } from "react";
import { InfoBody } from "../../components/InfoBody/InfoBody";

export const CharacterPage = () => {
  const { id } = useParams();

  const {
    data: character,
    error,
    isError,
    isLoading,
  } = useFetch<Character>(`https://rickandmortyapi.com/api/character/${id}`);

  const navigate = useNavigate();
  const [episodeNames, setEpisodeNames] = useState<Episode[]>([]);

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

  return (
    <div className={classes.character_page}>
      <h1>Character</h1>
      {isError && <div>{error?.message}</div>}
      {isLoading && <Preloader />}
      <button className="character-back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <article className={classes.character_item}>
        <div>
          <div className={classes.image}>
            <img
              src={character?.image}
              alt={character?.name}
              title={character?.name}
            />
          </div>
          <InfoBody character={character as Character} />
        </div>
        <div className={classes.actions}>
          <div className={classes.star}></div>
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
