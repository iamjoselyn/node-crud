import { Request, Response} from 'express';
import { Author } from '../models/authors.model';

class AuthorController {
    public async index (req: Request, res: Response) {
        try{
            const users = await Author.findAll({
                raw:true
            });
            res.send(users);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    }

    public async getAuthorByPK (req: Request, res: Response) {
        try{
            const authorId = await Author.findByPk(req.params.id);
            res.send(authorId);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    } 

  

    public async create (req: Request, res: Response) {
        try {
            const request = req.body;
            const newAuthor = await Author.create(request)

            res.json(newAuthor);

        }catch(error){
            res.json(error);
        }
        
    }

    public async update (req: Request, res: Response) {
        try {
            const newAuthor = await Author.update(
                {
                    name: req.body.name,
                    familyName: req.body.familyName,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            );

            res.json(newAuthor);
            
        }catch(error){
            res.json(error);
        }
        
    }

    public async delete (req: Request, res: Response) {
        try {
            const deleteAuthor = await Author.destroy(
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
export const authorController = new AuthorController();