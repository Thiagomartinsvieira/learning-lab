import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  signIn: () => void;
  signOut: () => void;
};

const AUTH_STORAGE_KEY = "@protected-routes:auth-state";

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isReady, setIsReady] = useState(false);

  async function storageState(newState: { isLoggedIn: boolean }) {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newState));
    } catch (error) {
      console.error("ERROR_SET_STORAGE_AUTH: ", error);
    }
  }

  const signIn = () => {
    setIsLoggedIn(true);
    storageState({ isLoggedIn: true });
    router.replace("/");
  };

  const signOut = () => {
    setIsLoggedIn(false);
    storageState({ isLoggedIn: false });
    router.replace("/signIn");
  };

  useEffect(() => {
    async function loadStorageState() {
      try {
        // Simulating API delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const storageState = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        const state = storageState ? JSON.parse(storageState) : null;
        console.log("STORAGE => ", state);
        setIsLoggedIn(state?.isLoggedIn ?? false);
      } catch (error) {
        console.error("ERROR_GET_STORAGE_AUTH: ", error);
        setIsReady(false);
      } finally {
        setIsReady(true);
      }
    }

    loadStorageState();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, isReady }}>
      {children}
    </AuthContext.Provider>
  );
}
