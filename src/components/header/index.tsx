import { useContext } from "react";
import { HeaderContainer, HeaderContainerTitle } from "./styled";
import { AuthContext } from "@/contexts/AuthContext";

interface HeaderProps {
  title: string
}

export default function HeaderComponent({ title }: HeaderProps) {

  const { logoutEmployee } = useContext(AuthContext)

  async function handleLogout() {
    await logoutEmployee()
  }

  return (
    <HeaderContainer>
      <HeaderContainerTitle>
        <h2>{title}</h2>
        <button onClick={handleLogout} type="button">Deslogar</button>
      </HeaderContainerTitle>

    </HeaderContainer>
  )
}