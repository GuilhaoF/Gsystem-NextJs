import GlobalStyle from '@/styles/global'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer  draggable={false}/>
        </AuthProvider>
      </ThemeProvider>
    </>
  )

}
