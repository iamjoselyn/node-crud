import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { authorController } from '../controllers/authors.controllers';

class AuthRoutes {

    public router: Router = Router();

    constructor() {
        // this.router.get('/', authorController.index );
        this.router.post('/', authController.index);
    

        // this.router.get('/:id', authorController.getAuthorByPK);
        // this.router.delete('/:id/books', authorController.update);
        // this.router.delete('/:id/books', authorController.delete);
    }
}

export const authRoutes = new AuthRoutes();