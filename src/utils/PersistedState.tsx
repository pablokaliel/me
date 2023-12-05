// persisted.tsx
import { useState, useEffect } from "react";

function usePersistedState<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const storageValue = localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initialState;
    } catch (error) {
      console.error("Error retrieving state from localStorage:", error);
      return initialState;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Error setting state in localStorage:", error);
    }
  }, [key, state]);

  return [state, setState] as const;
}

export default usePersistedState;
