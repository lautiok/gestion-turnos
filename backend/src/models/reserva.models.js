import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },

    time: {
        type: String,
        required: true
    }
    })

export default mongoose.model('Reserva', reservaSchema)