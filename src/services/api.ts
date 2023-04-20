import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "@/contexts/AuthContext";

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  //configuracao do axios e passagem dos cookies
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,

    headers: {
      Authorization: `Bearer ${cookies["@gsystem.token"]}`,
    },
  });
  //interceptando as respostas do axios e atualizando os cookies
  // middleware
  api.interceptors.response.use((response) => {
    return response;
  }),
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (typeof window !== undefined) {
          signOut();
        } else {
          return Promise.reject(
            new AuthTokenError("Erro no Token na autenticacao")
          );
        }
      }
      return Promise.reject(error);
    };
  return api;
}
