import { Router } from 'express';
import { authorController } from '../controllers/authors.controllers';

class AuthorRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', authorController.index );
        this.router.post('/', authorController.create);
    

        this.router.get('/:id', authorController.getAuthorByPK);
        this.router.delete('/:id/books', authorController.update);
        // this.router.delete('/:id/books', authorController.delete);
    }
}

export const authorRoutes = new AuthorRoutes();