import Link from "next/link";
import {
  Container,
  FooterRegisterForm,
  FormGroupContainer,
  ImageRegisterContainer,
  RegisterFormContainer,
  WrapRegisterForm,
} from "./styled";
import { useContext, useState } from "react";
import { canSSRGuest } from "@/helpers/canSSRGuest";
import { toast } from "react-toastify";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import Suporte from '../../assets/teste.webp'



export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  const { signUp } = useContext(AuthContext);

  const conditionsInput: boolean[] = [
    firstName === "",
    lastName === "",
    email === "",
    password === "",
    age === null || undefined,
  ];
  async function handleRegisterUser() {
    if (!conditionsInput) {
      toast.error("Porfavor Preencher Todos os Campos");
    }
    await signUp({ firstName, lastName, email, password, age });
  }

  return (
    <Container>
      <RegisterFormContainer>
        <WrapRegisterForm>

          <ImageRegisterContainer>
            <Image src={Suporte} alt="teste" />
          </ImageRegisterContainer>

          <FormGroupContainer>
            <span>Registre-se</span>

            <input
              type="text"
              placeholder="Digite seu Primeiro Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Digite seu Segundo Nome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Digite seu melhor email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="number"
              placeholder="Digite sua Idade"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />

            <input
              type="password"
              placeholder="Escolha uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleRegisterUser}>Registrar</button>

            <FooterRegisterForm>
              <p>
                Ja e usuario? <Link href="/login">Entre Aqui</Link>
              </p>
            </FooterRegisterForm>

          </FormGroupContainer>

        </WrapRegisterForm>
      </RegisterFormContainer>
    </Container>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
