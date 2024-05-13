import axios from "./axios";


export const getReservasRequest = () => axios.get('/reservas')
export const getReservasIdRequest = (id) => axios.get(`/reservas/${id}`)
export const deleteReservasRequest = (id) => axios.delete(`/reservas/${id}`)
export const createReservasRequest = (reserva) => axios.post('/reservas', reserva)
export const updateReservasRequest = (id, reserva) => axios.put(`/reservas/${id}`, reserva)
