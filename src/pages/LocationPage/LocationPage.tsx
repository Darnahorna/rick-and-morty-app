import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Character, Location } from "../../types/types";
import Preloader from "../../components/common/Preloader/Preloader";

import convertDate from "../../utils/convertDate";
import classes from "./LocationPage.module.css";
import { useFetch } from "../../hooks/useFetch";
import { CharacterCard } from "../../components/Card/CharacterCard";

export const LocationPage = () => {
  const [residents, setResidents] = useState<Character[]>([]);

  const { id } = useParams();

  const {
    data: location,
    error,
    isLoading,
  } = useFetch<Location>({
    url: `https://rickandmortyapi.com/api/location/${id}`,
    bypass: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (location && location.residents) {
      const fetchEpisodeNames = async () => {
        const residents = await Promise.all(
          location.residents.map(async (characterUrl) => {
            const response = await fetch(characterUrl);
            const data = await response.json();
            return data;
          })
        );
        setResidents(residents);
      };

      fetchEpisodeNames();
    }
  }, [location]);

  return (
    <div className={classes.location_page}>
      <h1>Location</h1>
      {error && <div>{error?.message}</div>}
      {isLoading && <Preloader />}

      <article className={classes.location_item}>
        <button
          className={classes.episode_back_btn}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <div className={classes.episode_info}>
          <div className={classes.section}>
            <h2>{location?.name}</h2>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Type:</span>
            <span> {location?.type}</span>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Created:</span>
            <span> {convertDate(location?.created || "")}</span>
          </div>
          <div className={classes.section}>
            <span className={classes.text_gray}>Dimension: </span>
            {location?.dimension}
          </div>
        </div>
      </article>

      {location?.residents && (
        <>
          <h3>Residents</h3>
          <div className={classes.characters}>
            {residents.map((c, i) => (
              <CharacterCard item={c} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
