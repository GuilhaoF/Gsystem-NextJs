import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Sora', sans-serif;
    background: #dcdddf;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
  }
`
export default GlobalStyle