import Reserva from "../models/reserva.models.js";
import Client from "../models/clients.models.js";
export const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find()
        res.json(reservas)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }    
}


export const getReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params.id)
        if (!reserva) return res.status(404).json({ message: 'Reserva not found' })
        res.json(reserva)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const createReserva = async (req, res) => {
    try {
        const { client, date, time } = req.body
        // verificar que el cliente exista
        const clientExists = await Client.findById(client)
        if (!clientExists) return res.status(404).json({ message: 'Client not found' })
        const dateExists = await Reserva.findOne({ date })
        if (dateExists) return res.status(400).json({ message: 'Reserva already exists' })
        const newReserva = new Reserva({ 
            date,
            client : client,
            time
        })
        await newReserva.save()
        res.json(newReserva)
    } catch (error) {
        
    }
}


export const updateReserva = async (req, res) => {

    try {
        const { time, date } = req.body
        const updateReserva = await Reserva.findByIdAndUpdate(
            { _id: req.params.id },
            { time, date },
            { new: true }   
        )
        res.json(updateReserva)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}


export const deleteReserva = async (req, res) => {
    try {
        const deleteReserva = await Reserva.findByIdAndDelete(req.params.id)
        if (!deleteReserva) return res.status(404).json({ message: 'Reserva not found' })
        return res.status(200).json({ message: 'Reserva deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })        
    }
}