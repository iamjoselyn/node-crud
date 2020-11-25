import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import data from '../config/config.json';

export const checkJwt = (req: Request , res: Response, next: NextFunction) => {

    //Coger el token que esta en Header (cabecera) con request

    const token = <string> req.headers["authorization"];

    // Verifica el token
    try{
        let jwtPayload = jwt.verify(token, data.jsonSecret);
        console.log(jwtPayload);
        

    } catch( error) {
        //si no ha sido valido el token que llega, devolvermos el 401
        res.sendStatus(401);
    }

    //sigo el flujo a mi controllador
    next();
}