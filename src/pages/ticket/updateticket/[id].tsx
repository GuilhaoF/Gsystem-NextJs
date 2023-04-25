import HeaderComponent from "@/components/header";
import SidebarComponent from "@/components/sidebar";
import { canSSRAuth } from "@/helpers/canSSRAuth";
import { setupApiClient } from "@/services/api";


export default function EditTicket() {
  return (
   <>
   <SidebarComponent/>
   <HeaderComponent title="Atualizando Chamado"/>
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
        employeeId: id,
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

