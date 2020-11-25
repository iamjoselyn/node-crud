import express from 'express';

import { userRoutes } from './routes/users.routes';
import { bookRoutes } from './routes/books.routes';
import { authorRoutes } from './routes/author.routes'
import { authRoutes } from './routes/auth.routes';

// Instance the express framework
const app  = express();

//Setting the port of aplication server
app.set('port', 3000);

// Start the server, using the port defined
app.listen(app.get('port'), ()=> {
    console.log(`The srever is runing on port ${app.get('port')}`);
 
});

//Middlewares
app.use(express.json());

// Load the file routes users 
app.use('/users', userRoutes.router);
app.use('/books', bookRoutes.router);
app.use('/authors', authorRoutes.router);

// Load Auth router
app.use("/auth", authRoutes.router)
