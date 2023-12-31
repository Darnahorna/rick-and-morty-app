import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Character, Episode } from "../../types/types";
import Preloader from "../../components/common/Preloader/Preloader";

import convertDate from "../../utils/convertDate";
import classes from "./EpisodePage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { CharacterCard } from "../../components/Card/CharacterCard";

export const EpisodePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const { id } = useParams();

  const {
    data: episode,
    error,
    isLoading,
  } = useFetch<Episode>({
    url: `https://rickandmortyapi.com/api/episode/${id}`,
    bypass: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (episode && episode.characters) {
      const fetchEpisodeNames = async () => {
        const characters = await Promise.all(
          episode.characters.map(async (characterUrl) => {
            const response = await fetch(characterUrl);
            const data = await response.json();
            return data;
          })
        );
        setCharacters(characters);
      };

      fetchEpisodeNames();
    }
  }, [episode]);

  // const toggleFavorites = (character: Character) => {
  //   isFavorite ? remove(character.id) : add(character);
  // };
  return (
    <div className={classes.episode_page}>
      <h1>Episode</h1>
      {error && <div>{error?.message}</div>}
      {isLoading && <Preloader />}

      <article className={classes.episode_item}>
        <button
          className={classes.episode_back_btn}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className={classes.episode_info}>
          <div className={classes.section}>
            <h2>{episode?.name}</h2>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Air date:</span>
            <span> {episode?.air_date}</span>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Created:</span>
            <span> {convertDate(episode?.created || "")}</span>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Episode: </span>
            {episode?.episode}
          </div>
        </div>
      </article>

      {episode?.characters && (
        <>
          <h3>Characters</h3>
          <div className={classes.characters}>
            {characters.map((c, i) => (
              <CharacterCard item={c} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
