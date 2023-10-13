import { useCallback, useSyncExternalStore, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

function dispatchStorageEvent(
  key: string,
  newValue: string | null | undefined
) {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
}

const getLocalStorageItem = (key: string) => {
  return window.localStorage.getItem(key);
};

const setLocalStorageItem = (key: string, value: unknown) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

const removeLocalStorageItem = (key: string) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

const useLocalStorageSubscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

type SetValue<T> = Dispatch<SetStateAction<T>>; // same as type from useState setter

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const getSnapshot = () => getLocalStorageItem(key);

  const store = useSyncExternalStore(
    useLocalStorageSubscribe, // any changes in storage
    getSnapshot // what to do
  );

  const setState: SetValue<T> = useCallback(
    (v) => {
      try {
        // Typecast because of Typescript issue https://github.com/microsoft/TypeScript/issues/37663
        const nextState =
          typeof v === "function"
            ? (v as (prevState: T) => T)(JSON.parse(store!))
            : v;

        if (nextState === undefined || nextState === null) {
          removeLocalStorageItem(key);
        } else {
          setLocalStorageItem(key, nextState);
        }
      } catch (e) {
        console.warn(e);
      }
    },
    [key, store]
  );

  useEffect(() => {
    if (
      getLocalStorageItem(key) === null &&
      typeof initialValue !== "undefined"
    ) {
      setLocalStorageItem(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? (JSON.parse(store) as T) : initialValue, setState];
};
