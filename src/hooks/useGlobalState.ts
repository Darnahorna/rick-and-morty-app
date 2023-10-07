import { useContext } from "react";

import { GlobalStateContext } from "./globalState";

export default function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  return context;
}
