import { useReducer } from "react";
import { Character } from "../types/types";
import { favoritesService } from "../services/favorites";

export type Action =
  | { type: "ADD"; item: Character }
  | { type: "DELETE"; id: number };

const reducer = (state: Character[], action: Action) => {
  //returns state related to action
  switch (action.type) {
    case "ADD": {
      favoritesService.addItem(action.item);
      return favoritesService.getAllItems();
    }
    case "DELETE": {
      favoritesService.deleteItem(action.id);
      return favoritesService.getAllItems();
    }
    default:
      return state;
  }
};

export default function useLocalStorage() {
  const [state, dispatch] = useReducer(reducer, favoritesService.getAllItems());

  const add = (item: Character) => {
    dispatch({ type: "ADD", item });
  };

  const remove = (id: number) => {
    dispatch({ type: "DELETE", id });
  };

  const getItemById = (id: number) => {
    return state.find((item) => item.id === id);
  };

  const getAllItems = () => {
    return state;
  };

  return { add, remove, getItemById, getAllItems };
}
