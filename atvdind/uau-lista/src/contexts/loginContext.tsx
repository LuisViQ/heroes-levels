import { createContext, useState, type ReactNode } from "react";

interface UserContextProps {
  name: string;
  token: string;
  userId: number;
  saveName: (name: string) => void;
  saveToken: (token: string) => void;
  saveUserId: (id: number) => void;
}

type LoginContextProviderProps = {
  children: ReactNode;
};

export const LoginContext = createContext<UserContextProps | null>(null);

export default function LoginContextProvider({
  children,
}: LoginContextProviderProps) {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const saveName = (user: string) => {
    setName(user);
  };
  const saveToken = (token: string) => {
    setToken(token);
  };
  const saveUserId = (id: number) => {
    setUserId(id);
  };

  const contextValue: UserContextProps = {
    name,
    token,
    userId,
    saveName,
    saveToken,
    saveUserId,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
}
