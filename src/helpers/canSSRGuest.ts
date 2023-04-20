import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

export function canSSRGuest<G>(fn: GetServerSideProps<G>) {
  return async (ctx: GetServerSidePropsContext):
    Promise<GetServerSidePropsResult<G>> => {

    const cookies = parseCookies(ctx)

    //verificando token
    if (cookies['@gsystem.token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      }
    }
    return await fn(ctx)
  }
}