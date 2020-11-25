import { Router } from 'express';
import { userController } from '../controllers/users.controllers';
import { checkJwt } from '../middlewares/checkJwt';

class UsersRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', [checkJwt], userController.index);
        this.router.post('/', userController.create);
        

        this.router.get('/show', userController.show);
        this.router.get('/info', );

        this.router.get('/:id', userController.id);
        this.router.put('/:id', userController.update);
        this.router.delete('/:id', userController.delete);
    }
}

export const userRoutes = new UsersRoutes();

// COMO TESTAR LAS RUTAS http://localhost:3000/users/info
// COMO TESTAR LAS RUTAS http://localhost:3000/users