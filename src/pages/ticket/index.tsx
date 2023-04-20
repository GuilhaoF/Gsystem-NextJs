import HeaderComponent from "@/components/header";
import SidebarComponent from "@/components/sidebar";
import { ContainerMainList, ContainerList, ContainerWrap } from "./styled";
import Link from "next/link";
import { canSSRAuth } from "@/helpers/canSSRAuth";
import { setupApiClient } from "@/services/api";
import { useState } from "react";

interface TicketPropsItem {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface TicketProps {
  tickets: TicketPropsItem[];
}

export default function Ticket({ tickets }: TicketProps) {
  const [ticketList, setTicketList] = useState<TicketPropsItem[]>(
    tickets || []
  );

  return (
    <>
      <SidebarComponent />
      <HeaderComponent title="Lista de Chamados" />

      <ContainerMainList>
        <ContainerWrap>
          {ticketList.map((ticket) => (
            <Link key={ticket.id} href={`/ticket/updateticket/${ticket.id}`}>
              <ContainerList>
                <h2>{ticket.title}</h2>
                <span>{ticket.description}</span>
                <p>{ticket.status === null ? "Pendente" : "Fechado"}</p>
              </ContainerList>
            </Link>
          ))}
        </ContainerWrap>
      </ContainerMainList>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const apiClient = setupApiClient(ctx);
    const response = await apiClient.get("/tickets");

    if (response.data === null) {
      return {
        redirect: {
          destination: "/ticket/newticket",
          permanent: false,
        },
      };
    }

    return {
      props: {
        tickets: response.data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
});
