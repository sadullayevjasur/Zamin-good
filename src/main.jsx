import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import {  CartProvider } from './context/Cardcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>

    <AuthContextProvider>

    <App />

    </AuthContextProvider>
    </CartProvider>

    </BrowserRouter>

    
    

    
  </React.StrictMode>,
)
