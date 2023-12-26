import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global-styles.scss'
import ThemeProvider from './context/theme-context.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
