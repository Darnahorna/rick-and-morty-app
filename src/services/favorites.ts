import { Character } from "../types/types";

const LS_FAVORITES_KEY = 'favorites';

type CharacterFavorites = Character[];


export const favoritesService = {
    getAllItems: () => {
    const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
    return favorites;
    },
  getItemById: (index: number) => {
    const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
    return favorites[index];
  },
  addItem : (item: Character) => {
    const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
    favorites.push(item);
    localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(favorites));
  },
  deleteItem : (index: number) => {
    const favorites = JSON.parse(localStorage.getItem(LS_FAVORITES_KEY) || '[]') as CharacterFavorites;
   favorites.splice(index, 1);
    localStorage.setItem(LS_FAVORITES_KEY, JSON.stringify(favorites));
  }
}