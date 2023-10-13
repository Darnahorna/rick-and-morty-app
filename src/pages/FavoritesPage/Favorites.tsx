import classes from "./Favorites.module.css";


import { useState, useEffect } from "react";
import { Character } from "../../types/types";
import { favoritesService } from "../../services/favorites";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const favorites = favoritesService.getAllItems();
    setFavorites(favorites);
  }, []);

  return (
    <div className={classes.favorites}>
      <h1>Favorites</h1>
      {favorites.length === 0 && <div>No favorites yet.</div>}
      {favorites.map((character) => (
        <div key={character?.id}>
          <h2>{character?.name}</h2>
          {/* <button onClick={() => handleAddToFavorites(character.id)}>
            Remove from Favorites
          </button> */}
        </div>
      ))}
    </div>
  );
};
export default FavoritesPage;



