import { createContext, useContext, useState } from "react";
import { getClientsRequest, createClientRequest, deleteClientRequest } from "../api/clients";

const ClientsContext = createContext();

export const useClients = () => {
    const context = useContext(ClientsContext);
    if (!context) {
        throw new Error("useClients must be used within a ClientsProvider");
    }
    return context;
}

export const ClientsProvider = ({ children }) => {
    const [clients, setClients] = useState([])

    const getClients = async () => {
        try {
            console.log('Llamando a getClientsRequest...');
            const response = await getClientsRequest();
            console.log('Datos de clientes recibidos:', response.data);
            setClients(response.data);
        } catch (error) {
            console.log('Error al obtener datos de clientes:', error);
        }
    };

    const createClient = async (client) => {
        try {
            const response = await createClientRequest(client);
            console.log('Cliente creado:', response.data);
        } catch (error) {
            console.log('Error al crear cliente:', error);
        }
    }

    const deleteClient = async (id) => {
        try {
            const response = await deleteClientRequest(id);
            if (response.status === 204) setClients(clients.filter(client => client._id !== id))
        } catch (error) {
            console.log('Error al borrar cliente:', error);         
        }
    }
    
    return (
        <ClientsContext.Provider value={{
            clients,
            getClients,
            createClient,
            deleteClient
        }}>
            {children}
        </ClientsContext.Provider>
        
    )
}