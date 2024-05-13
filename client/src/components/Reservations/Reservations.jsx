import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ReservationsStyle.css'
import { useReservas } from '../../context/ReservasContext';
import { useClients } from '../../context/ClientsContext';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';


export const Reservations = () => {

    const { reservas, getReservas, delateReservas } = useReservas();
    const { clients, getClients } = useClients();

    useEffect(() => {
        getReservas();
    })

    // Search for clients by id in the database

    useEffect(() => {
        getClients();
    }, []);
    

    const getClientNameById = (clientId) => {
        if (!Array.isArray(clients) || clients.length === 0) {
            return 'Cliente no encontrado';
        }
        const client = clients.find(client => client._id === clientId);
        return client ? client.name : 'Cliente no encontrado';
    };
    
    const formatDate = (dateString) => {
        // Analiza la fecha en formato ISO 8601
        const date = parseISO(dateString);
        
        // Formatea la fecha en el formato deseado
        const formattedDate = format(date, "d 'de' MMMM 'a las'", { locale: es });
    
        return formattedDate;
    };
    
    const formatTime = (dateString) => {
        // Analiza la fecha en formato ISO 8601
        const date = parseISO(dateString);
        
        // Formatea la hora en formato HH:mm
        const formattedTime = format(date, "HH:mm", { locale: es });
    
        return formattedTime;
    };
    



  return (
    <div className='reservas'>
        <Link to="/FormularioDeReserva">Añadir Reserva</Link>
        <div className='contenedor-reservas'>
            <h1>Reservas</h1>
            <div className='contenedor-tabla'>
                <table>
                    {
                        reservas.map((reserva) => (
                            <div className='reserva'>
                            <tr key={reserva._id}>
                                <td>{getClientNameById(reserva.client)}</td>
                                <td>{formatDate(reserva.date)} a las {formatTime(reserva.time)}</td>
                            </tr>
                            <div className='botones-reserva'>
                                <button onClick={() => delateReservas(reserva._id)}>cancelar reserva</button>
                            </div>
                            
                            </div>
                        ))
                    }
                    
                </table>
            </div>
        </div>
    </div>
  )
}
