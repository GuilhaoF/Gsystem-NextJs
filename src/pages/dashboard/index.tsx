import SidebarComponent from "@/components/sidebar";
import HeaderComponent from "@/components/header";
import { canSSRAuth } from "@/helpers/canSSRAuth";



export default function Dashboard() {
  return (
    <>
      <SidebarComponent />
      <HeaderComponent title="Dashboard" />
    </>
  )
}
export const getServerSideProps = canSSRAuth(async (ctx) => {
  console.log()
  return {
    props: {}
  }
})