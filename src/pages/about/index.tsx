import HeaderComponent from "@/components/header";
import SidebarComponent from "@/components/sidebar";
import { AboutContainer } from "./styled";
import { canSSRAuth } from "@/helpers/canSSRAuth";




export default function About() {
  return (
    <>
      <SidebarComponent />
      <HeaderComponent title="About" />
      <AboutContainer>
        <h2>Luis Felipe G Silva</h2>
      </AboutContainer>
    </>
  )
}
export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})