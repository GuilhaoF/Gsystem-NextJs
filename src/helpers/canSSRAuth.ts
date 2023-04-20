import { AuthTokenError } from '@/services/errors/AuthTokenError'
import { GetServerSideProps, GetServerSidePropsResult, GetServerSidePropsContext } from 'next'
import { destroyCookie, parseCookies } from 'nookies'


export function canSSRAuth<G>(fn: GetServerSideProps<G>) {
  //tipando o contexto
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<G>> => {

    const cookies = parseCookies(ctx)

    const token = cookies['@gsystem.token']

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
    try {
      return await fn(ctx)
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, '@gsystem.token', { path: '/' })
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }

  }
}