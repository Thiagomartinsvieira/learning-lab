import { createContext, PropsWithChildren, useState } from "react";

type AuthState = {
  isLogged: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthState>({} as AuthState);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoggedIn, setIsLOggedIn] = useState(false);

  const signIn = () => {
    setIsLOggedIn(true);
  };

   const signOut = () => {
    setIsLOggedIn(false);
  };
}
