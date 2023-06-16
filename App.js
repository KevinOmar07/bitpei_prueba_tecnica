import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import usuario from './Routes/Usuario.routes.js';
import swaggerDocs from './Database/swagger.config.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// app.use('/usuario', );

app.get('/', (req, res) => {
    res.send('Server');
});

app.use('/usuario', usuario);

// app.get('*', (req, res) => {
//     res.send('Ruta no encontrada');
// });

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT_SERVER}`);
    swaggerDocs(app, process.env.PORT_SERVER)
});