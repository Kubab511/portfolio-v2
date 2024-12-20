import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme hasBackground={false} accentColor="blue" radius="large" grayColor="gray" appearance="dark">
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
)
