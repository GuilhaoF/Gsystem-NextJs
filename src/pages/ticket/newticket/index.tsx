import HeaderComponent from "@/components/header";
import SidebarComponent from "@/components/sidebar";
import { TicketContainer, TicketForm, TicketFormButtons } from "./styled";
import { useState } from "react";
import { canSSRAuth } from "@/helpers/canSSRAuth";
import { toast } from "react-toastify";
import { setupApiClient } from "@/services/api";

import Router from "next/router";


export default function Ticket() {
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDescription, setTicketDescription] = useState('');


  async function handleOpenNewTicket() {
    if (ticketTitle === '' && ticketDescription === '') {
      toast.info('Preencha todos os dados do ticket')
      return;
    }
    try {
      const apiClient = setupApiClient()
      await apiClient.post('/ticket', {
        title: ticketTitle,
        description: ticketDescription,
      })
      Router.push("/dashboard");
      toast.success('Chamado Aberto com sucesso!')
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <>
      <SidebarComponent />
      <HeaderComponent title="Cadastrar Novo  Chamado" />
      <TicketContainer>
        <TicketForm>
          <h1>Abertura do Chamado</h1>
          <input
            type="text"
            placeholder="Digite Titulo do Ticket"
            value={ticketTitle}
            onChange={(e) => setTicketTitle(e.target.value)}
            required
          />
          <input
            className="ticket-description"
            type="text"
            placeholder="Digite a descricao do problema"
            value={ticketDescription}
            onChange={(e) => setTicketDescription(e.target.value)}
            required
          />
          <TicketFormButtons>
            <button className="open-ticket" onClick={handleOpenNewTicket}>Abrir Chamado</button>
            <button className="back">Cancelar</button>
          </TicketFormButtons>
        </TicketForm>
      </TicketContainer>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})