import { ChangeEvent, useState } from "react";
import HeaderComponent from "@/components/header";
import SidebarComponent from "@/components/sidebar";
import { canSSRAuth } from "@/helpers/canSSRAuth";
import { setupApiClient } from "@/services/api";
import { TicketButtons, TicketFormContainer, TicketUpdateForm } from './styled';
import { toast } from "react-toastify";

interface TicketProps {
  id: string
  title: string
  description: string
  status: string
}

interface EditTicketProps {
  ticket: TicketProps
}


export default function EditTicket({ ticket }: EditTicketProps) {

  const [ticketTitle, setTicketTitle] = useState(ticket?.title)
  const [ticketDescription, setTicketDescription] = useState(ticket?.description)
  const [statusTicket, setStatusTicket] = useState(ticket.status)


  function handleSelectedStatus(e: React.ChangeEvent<HTMLSelectElement>){
    setStatusTicket(e.target.value)
  }

  async function handleUpdateTicket() {
    if(ticketTitle === '' || ticketDescription === ''){
      return
    }
    try{
      const apiClient  = setupApiClient()
      await apiClient.put('/ticket/update',{
        title: ticketTitle,
        description: ticketDescription,
        status: statusTicket,
        ticket_id : ticket?.id
      })
      toast.success('Chamado Atualizado com Sucesso!')
    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <SidebarComponent />
      <HeaderComponent title="Atualizando Chamado" />
      <TicketFormContainer>
        <TicketUpdateForm>
          <h1>Atualize as Informacoes ou Status</h1>
          <input
            type="text"
            value={ticketTitle}
            onChange={(e) => setTicketTitle(e.target.value)}
            required
          />
          <input
            className="ticket-description"
            type="text"
            value={ticketDescription}
            onChange={(e) => setTicketDescription(e.target.value)}
            required
          />
          <select className="select-status-ticket" value={statusTicket} onChange={handleSelectedStatus}>
            <option value="Pendente/Aguardando Peca">Pendente/Aguard Peca</option>
            <option value="Finalizado">Finalizado</option>
          </select>
          <TicketButtons>
            <button className="update-ticket" onClick={handleUpdateTicket}>Atualizar Chamado</button>
            <button className="back">Cancelar</button>
          </TicketButtons>

        </TicketUpdateForm>
      </TicketFormContainer>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  //pegando o parametro(id)
  const { id } = ctx.params
  try {
    const apiClient = setupApiClient(ctx)

    const response = await apiClient.get('/ticket/detail', {
      params: {
        ticket_id: id,
      }
    })

    return {
      props: {
        ticket: response.data,
      }
    }
  } catch (err) {
    console.error(err)
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }
})

