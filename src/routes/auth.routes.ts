import { Router } from 'express';
import { authController } from '../controllers/auth.controller';


class AuthRoutes {

    public router: Router = Router();

    constructor() {
        // this.router.get('/', authorController.index );
        this.router.post('/login', authController.login);
    
    }
}

export const authRoutes = new AuthRoutes();