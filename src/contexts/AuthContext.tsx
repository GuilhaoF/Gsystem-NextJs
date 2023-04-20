import { createContext, ReactNode, useEffect, useState } from "react";
import Router from "next/router";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import { destroyCookie, parseCookies, setCookie } from "nookies";

interface AuthContextData {
  employee: EmployeeProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  logoutEmployee: () => Promise<void>;
}

interface EmployeeProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
type AuthProviderProps = {
  children: ReactNode;
};

interface SignInProps {
  email: string;
  password: string;
}
interface SignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(null, "@gsystem.token", { path: '/' });
    Router.push('/login');
  } catch (err) {
    toast.error(err);
  }
}
export function AuthProvider({ children }: AuthProviderProps) {
  const [employee, setEmployee] = useState<EmployeeProps>();
  const isAuthenticated = !!employee;

  useEffect(() => {
    //pegando cookie(nome do cookie dado) e colocando na variavel token
    const { "@gsystem.token": token } = parseCookies();

    if (token) {
      api
        .get('/employee/detail')
        .then((response) => {
          const { id, firstName, lastName, email, age } = response.data;
          setEmployee({
            id,
            firstName,
            lastName,
            email,
            age,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/employees/session", {
        email,
        password,
      });
      const { id, firstName, lastName, token, age } = response.data;

      setCookie(undefined, '@gsystem.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      });
      setEmployee({
        id,
        firstName,
        lastName,
        email,
        age,
      });
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      if (token === undefined) {
        toast.error('Erro')
        return;
      }
      toast.success(`Bem vindo ${firstName}`)

      Router.push("/dashboard");
    } catch (err) {
      toast.error(err);
      console.error(err);
    }
  }
  async function signUp({
    firstName,
    lastName,
    email,
    password,
    age,
  }: SignUpProps) {
    try {
      const response = await api.post('/employees', {
        firstName,
        lastName,
        email,
        password,
        age,
      });
      toast.success("Cadastro Feito com sucesso");
      Router.push("/login");
    } catch (err) {
      console.error(err);
    }
  }

  async function logoutEmployee() {
    try {
      destroyCookie(null, "@gsystem.token", { path: "/" });
      toast.success("Deslogado");
      Router.push("/login");
      setEmployee(null);
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ employee, isAuthenticated, signIn, signUp, logoutEmployee }}
    >
      {children}
    </AuthContext.Provider>
  );
}
