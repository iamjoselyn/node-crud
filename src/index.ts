import express from 'express';

import socketio from "socket.io";
import path from "path";

import { userRoutes } from './routes/users.routes';
import { bookRoutes } from './routes/books.routes';
import { authorRoutes } from './routes/author.routes'
import { authRoutes } from './routes/auth.routes';

// Instance the express framework
const app  = express();

//Setting the port of aplication server
app.set('port', 3000);

app.get("/", (req: any, res: any) => {
    res.sendFile(path.resolve("./src/clients/index.html"));
});

// Start the server, using the port defined, saved in const to use it later with socket io
const server = app.listen(app.get('port'), ()=> {
    console.log(`The srever is runing on port ${app.get('port')}`);
 
});


// Instanciar socket.io  y lo vincula al servidor 
let io = new socketio.Server(server);

//Implementamos socket io.on: cuando cliente establezca conexión con el servidor
//localhost:3000 pasará por el socketIo y en consola aparecerá un "a user connected"
io.on("connection", function(socket: any) {
    console.log("a user connected");

    // escucha el mensaje que llega del cliente (web)
    socket.on('message', (msgFromClient: any)=>{

        //despacha el mensaje que ha llegado y
        //lo envia al cliente para que se visualice en (web)
        io.emit('message', msgFromClient);
    });
    
});


//Middlewares
app.use(express.json());

// Load the file routes users 
app.use('/users', userRoutes.router);
app.use('/books', bookRoutes.router);
app.use('/authors', authorRoutes.router);

// Load Auth router
app.use("/auth", authRoutes.router)
