import { createContext, useContext, useState } from "react";
import { getReservasRequest, deleteReservasRequest, createReservasRequest, getReservasIdRequest, updateReservasRequest } from "../api/Reservas";

const ReservasContext = createContext();

export const useReservas = () => {
    const context = useContext(ReservasContext);
    if (!context) {
        throw new Error("useReservas must be used within a ReservasProvider");
    }
    return context;
}

export const ReservasProvider = ({ children }) => {
    const [reservas, setReservas] = useState([])

    const createReservas = async (reserva) => {
        try {
            const res = await createReservasRequest(reserva)
            setReservas([...reservas, res.data])
            return res
        } catch (error) {
            console.log(error)
        }
    }
    const getReservas = async () => {
        try {
            const reservas = await getReservasRequest()
            setReservas(reservas.data)
        } catch (error) {
            console.log(error)
        }
    }

     const delateReservas = async (id) => {
        try {
            const res = await deleteReservasRequest(id)
            if (res.status === 200) setReservas(reservas.filter(reserva => reserva._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getReservasId = async (id) => {
        try {
          const res = await getReservasIdRequest(id);
          // Verificar si la respuesta contiene datos
          if (res && res.data) {
            return res.data; // Retornar los datos de la reserva
          } else {
            console.error(`No se encontraron datos para la reserva con ID: ${id}`);
            return null; // Retornar null si no se encuentran datos
          }
        } catch (error) {
          console.error(`Error al obtener la reserva con ID: ${id}`, error);
          return null; // Retornar null en caso de error
        }
      };

     return (
        <ReservasContext.Provider value={{
            reservas,
            getReservas,
            delateReservas,
            createReservas,
            getReservasId,
        }}>
            {children}
        </ReservasContext.Provider>
    )
}