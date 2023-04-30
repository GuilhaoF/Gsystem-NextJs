import SidebarComponent from "@/components/sidebar";
import HeaderComponent from "@/components/header";
import { canSSRAuth } from "@/helpers/canSSRAuth";
import { ContainerInfo, InfoDashboard } from "./styled";

export default function Dashboard() {
  return (
    <>
      <SidebarComponent />
      <HeaderComponent title="Dashboard" />
      <ContainerInfo>
        <InfoDashboard>
          <h1>Bem Vindo ao Gsystem </h1>
          <span>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </span>
          <h2>Funcionalidades Ativas :</h2>
          <ul>
            <li>Cadastro e Login</li>
            <li>Cadastrar Chamados</li>
            <li>Listar Chamadados</li>
            <li>Atualizar Chamados e Status do Chamado</li>
            <li>Deletar Chamados</li>
          </ul>
        </InfoDashboard>
      </ContainerInfo>
    </>
  );
}
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
