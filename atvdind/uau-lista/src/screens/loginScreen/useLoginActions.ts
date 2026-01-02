import { useContext } from "react";

import handleLogin from "../../services/auth";
import { LoginContext } from "../../contexts/loginContext";

type LoginCredentials = {
  username: string;
  password: string;
};

export function useLoginActions() {
  const loginContext = useContext(LoginContext);

  const submitLogin = async ({ username, password }: LoginCredentials) => {
    const loginPayload = { username, password };
    console.log(loginPayload);

    try {
      const data = await handleLogin(username, password);
      const receivedName =
        data.lastName ?? data.name ?? data.username ?? data.firstName ?? "";
      const receivedToken = data.token ?? data.accessToken;
      const receivedId = Number(data.id ?? data.user?.id ?? 0);
      if (receivedToken) {
        loginContext?.saveName(receivedName);
        loginContext?.saveToken(receivedToken);
        if (Number.isFinite(receivedId) && receivedId > 0) {
          loginContext?.saveUserId(receivedId);
        }
        console.log(receivedToken);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Erro desconhecido";
      alert(message);
    }
  };

  return { submitLogin };
}
