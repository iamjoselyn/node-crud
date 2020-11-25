import { Request, Response} from 'express';
import { User } from '../models/user.model';

class UserController {
    public async index (req: Request, res: Response) {
        try{
            const users = await User.findAll({
                raw:true
            });
            res.send(users);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    } 

    public async id (req: Request, res: Response) {
        try{
            const usersId = await User.findByPk(req.params.id);
            res.send(usersId);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    } 

    public async show (req: Request, res: Response) {

        // User.findAll({
        //     raw: true
        // })
        // .then((users) => {
        //     console.log(users);
        //     res.send(users);
        // })
        // .catch((error) => {
        //     console.log(error);  
        // })

        const results = await User.findAll({
            attributes: ["name"]
        })
        res.send(results);
    }

    public async create (req: Request, res: Response) {
        try {
            const request = req.body;
            const newUser = await User.create(request)

            res.json(newUser);

        }catch(error){
            res.json(error);
        }

    }

    public async update (req: Request, res: Response) {
        try {
            const newUser = await User.update(
                {
                    name: req.body.name,
                    familyName: req.body.familyName,
                    email: req.body.email,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            );

            res.json(newUser);
            
        }catch(error){
            res.json(error);
        }
        
    }

    public async delete (req: Request, res: Response) {
        try {
            const deleteUser = await User.destroy(
                {
                    where: {
                        id: req.params.id,
                    }
                }
                
            );

            res.sendStatus(201);
            
        }catch(error){
            res.send(error);
        }
        
    }

}
export const userController = new UserController();
