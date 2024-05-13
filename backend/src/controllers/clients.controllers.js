import Client from "../models/clients.models.js";

export const getClients = async (req, res) => {
    try {
        const clients = await Client.find() 
        res.json(clients)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id)
        if (!client) return res.status(404).json({ message: 'Client not found' })
        return res.json(client)  
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createClient =  async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const newClient = new Client({ name, email, phone })
        await newClient.save()
        res.json(newClient)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateClient = async (req, res) => {
    try {
        const {name, email, phone} = req.body
        const updateClient = await Client.findByIdAndUpdate(
            { _id: req.params.id },
            { name, email, phone },
            { new: true }
        )
        res.json(updateClient)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteClient = async (req, res) => {
    try {
        const deleteClient = await Client.findByIdAndDelete(req.params.id)
        if (!deleteClient) return res.status(404).json({ message: 'Client not found' })
        return res.status(200).json({ message: 'Client deleted' })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

