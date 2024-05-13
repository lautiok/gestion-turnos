import React, { useEffect } from 'react'
import { useClients } from '../../context/ClientsContext'
import { Link } from 'react-router-dom'
export const Clients = () => {
    const { clients, getClients, deleteClient } = useClients()

    useEffect(() => {
        getClients()
    }, [])

    const handleDeleteClient = (clientId) => {
        deleteClient(clientId) 
        .then (() => getClients())
        .catch(err => console.log(err))
    }


  return (
    <div className='reservas'>
        <div className='nav-reservas'>
            <Link to="/clients/newclient">Añadir cliente</Link>
            <input type="text" placeholder="Buscar cliente..." />
        </div>
        
        <div className='contenedor-reservas'>
        <h1>Clientes</h1>
        <div className='contenedor-tabla'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client) => (
                    <tr key={client._id}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.phone}</td>
                        <td><button onClick={() => handleDeleteClient(client._id)} className='delete'>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
</div>
  )
}
