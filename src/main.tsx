import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *{
    box-sizing: border-box;
  }

  button{
    border: none;
    background: none;
  }
`



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
          <GlobalStyle />
            <App />
    </React.StrictMode>
);
