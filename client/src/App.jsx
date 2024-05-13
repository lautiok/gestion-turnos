import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { FormularioCrearUsuario } from './components/FormularioCrearUsuario/FormularioCrearUsuario'
import { FormularioDeReserva } from './components/FormularioDeReserva/FormularioDeReserva'
import { ClientsProvider } from './context/ClientsContext'
import { ReservasProvider } from './context/ReservasContext'
import { Reservations } from './components/Reservations/Reservations'
import { Clients } from './components/Clients/Clients'

function App() {

  return (
    <>
      <ClientsProvider>
      <ReservasProvider>
      <BrowserRouter>
         <Header />
         <Routes>
          <Route path='/' element = {<Clients />}/>
          <Route path='/clients/newclient' element = {<FormularioCrearUsuario />}/>
          <Route path='/reservas' element = {<Reservations />}/>
          <Route path='/formulariodereserva' element = {<FormularioDeReserva />}/>
         </Routes>
      </BrowserRouter>
      </ReservasProvider>
      </ClientsProvider>
      
      
    </>
  )
}

export default App
