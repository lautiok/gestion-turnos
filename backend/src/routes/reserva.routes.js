import { Router } from "express";
import { getReservas, getReserva, createReserva, updateReserva, deleteReserva } from "../controllers/reserva.controllers.js";
const router = Router();

router.get('/reservas', getReservas)
router.get ('/reservas/:id', getReserva)
router.post('/reservas', createReserva)
router.put('/reservas/:id', updateReserva)
router.delete('/reservas/:id', deleteReserva)

export default router