import { Router } from 'express';
import { bookController } from '../controllers/books.controllers';

class BookRoutes {

    public router: Router = Router();

    constructor() {
        this.router.get('/', bookController.index );
        this.router.post('/', bookController.create);
        this.router.get('/info', );

        this.router.get('/:id', bookController.getBookByPK);
        this.router.put('/:id', bookController.update);
        this.router.delete('/:id', bookController.delete);
    }
}

export const bookRoutes = new BookRoutes();