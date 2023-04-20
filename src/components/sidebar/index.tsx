import Link from "next/link";
import { SidebarContainer } from "./styled";
import { ReactNode } from "react";

interface LinkItemProps {
  name: string
  route: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Inicio', route: '/dashboard' },
  { name: 'Cadastrar Chamados', route: '/ticket/newticket' },
  { name: 'Meus Chamados', route: '/ticket' },
  { name: 'Sobre Aplicacao', route: '/about' }
]

export default function SidebarComponent() {
  return (
    <SidebarContainer>
      {
        LinkItems.map(link => (
          <Link href={link.route} key={link.name}>{link.name}</Link>
        ))
      }
    </SidebarContainer>
  )
}