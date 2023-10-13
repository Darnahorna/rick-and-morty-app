import classes from "./Favorites.module.css";

import { useFavoritesStore } from "../../services/favorites";
import { CharacterCard } from "../../components/Card/CharacterCard";

export const FavoritesPage = () => {
  const { getAllItems } = useFavoritesStore();

  const favorites = getAllItems();

  return (
    <>
      <h1>Favorites</h1>
      <div className={classes.favorites}>
        {favorites.length === 0 && (
          <div className={classes.text_gray}>🛸 No favorites yet 🛸</div>
        )}
        {favorites.map((character) => (
          <CharacterCard item={character} />
        ))}
      </div>
    </>
  );
};
export default FavoritesPage;
