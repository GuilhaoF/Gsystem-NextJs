/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import {
  Container,
  LoginContainer,
  WrapLoginContainer,
  FormLoginContainer,
  ImageLoginContainer,
  FooterLogin,
} from "./styled";
import Link from "next/link";
import { canSSRGuest } from "@/helpers/canSSRGuest";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-toastify";
import Suporte from "../../assets/teste.webp";
import Image from "next/image";

export default function LoginPage() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginUser() {
    if (email === "" || password === "") {
      toast.error("Preencha todos os campos");
      return;
    }
    await signIn({
      email,
      password,
    });
  }

  return (
    <Container>
      <LoginContainer>
        <WrapLoginContainer>
          <ImageLoginContainer>
            <Image src={Suporte} width={316} height={289} alt="teste" />
          </ImageLoginContainer>

          <FormLoginContainer>
            <span>Login Employee</span>

            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginUser}>Entrar</button>

            <FooterLogin>
              <p>Nao e usuario?
              <Link href="/register">Registre - se</Link>
              </p>
              
            </FooterLogin>

          </FormLoginContainer>
        </WrapLoginContainer>
      </LoginContainer>
    </Container>
  );
}
export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
