import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import data from '../config/config.json';
import { User } from '../models/user.model';

class AuthController {
    public async login (req: Request, res: Response) {

        try {
            // SELECT * from USER WHERE email
            const result : User[] | null = await User.findAll({
                where: {
                    email: req.body.email,
                    password: req.body.password,
                }
            });


            if ( result === null) {
               // res.sendStatus(401)
               throw new Error('Something bad happened');
            }
            
            const token = jwt.sign(
                {result}, //se puede meter tambien el password
                data.jsonSecret,
                {expiresIn: '1h'}
            );
            res.send(token);
       

        } catch(error){
            res.sendStatus(401)
        };

        // const token = jwt.sign(
        //     {email: req.body.email, password: req.body.password}, //se puede meter tambien el password
        //     data.jsonSecret,
        //     {expiresIn: '1h'}
        // );

        // res.send(token);

    }
}
export const authController = new AuthController ();