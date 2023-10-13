import { useLocalStorage } from "../hooks/useLocalStore";
import { Character } from "../types/types";

const LS_FAVORITES_KEY = "favorites";

export function useFavoritesStore() {
  const [favorites, setFavorites] = useLocalStorage<Character[]>(
    LS_FAVORITES_KEY,
    []
  );

  const getItemById = (id: number) => {
    return favorites.find((item) => item.id === id);
  };
  const add = (item: Character) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
  };
  const remove = (id: number) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };
  const getAllItems = () => {
    return favorites;
  };
  return {
    getItemById,
    add,
    getAllItems,
    remove,
  };
}

// export const favoritesService = {
//   getAllItems: () => {
//     const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
//     return favorites;
//   },
//   getItemById: (id: number) => {
//     const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
//     return favorites.find((item) => item.id === id);
//   },
//   addItem: (item: Character) => {
//     const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
//     console.log(favorites ,item);
//     favorites.push(item);
//     localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(favorites));
//   },
//   deleteItem : (id: number) => {
//     const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
//     const newFavorites = favorites.filter((item) => item.id !== id);
//     localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(newFavorites));
//   }
// }
