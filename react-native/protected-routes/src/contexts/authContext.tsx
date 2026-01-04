import { router } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const signIn = () => {
    setIsLoggedIn(true);
    router.replace("/");
  };

  const signOut = () => {
    setIsLoggedIn(false);
    router.replace("/signIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
