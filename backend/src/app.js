import Express from "express";
import { connectionDB } from "./config/dataBase.js";
import clientsRoutes from './routes/clients.routes.js'
import reservRoutes from './routes/reserva.routes.js'
import cors from 'cors'

const app = Express();
const PORT =  process.env.PORT ||  3000;

//Middlewares

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors())

//Routes
app.use ('/api', clientsRoutes); 
app.use ('/api', reservRoutes);

// mongoose connection
connectionDB().then(() => console.log('Database connected'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

