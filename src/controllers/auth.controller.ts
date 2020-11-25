import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import data from '../config/config.json';

class AuthController {
    public async index (req: Request, res: Response) {

        const token = jwt.sign(
            {email: req.body.email}, //se puede meter tambien el password
            data.jsonSecret,
            {expiresIn: '1h'}
        );

        res.send(token);
        // try{
        //     const users = await Author.findAll({
        //         raw:true
        //     });
        //     res.send(users);
        // }
        
        // catch (error) {
        //     res.sendStatus(500);
        // }
    }
}
export const authController = new AuthController ();