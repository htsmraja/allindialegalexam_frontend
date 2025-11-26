import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from "react-router-dom";
import AuthProvider from './context/authcontext.jsx';
import CommonProvider from './context/commonContext.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AuthProvider>
      <CommonProvider>
        <App />
      </CommonProvider>
    </AuthProvider>
  </HashRouter>,
)
