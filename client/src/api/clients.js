import axios from "./axios";


export const getClientsRequest = () => axios.get('/clients')
export const createClientRequest = (client) => axios.post('/clients', client)
export const deleteClientRequest = (id) => axios.delete(`/clients/${id}`)