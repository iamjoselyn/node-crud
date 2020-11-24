import { Request, Response} from 'express';
import { Book } from '../models/books.model';


class BookController {
    public async index (req: Request, res: Response) {
        try{
            const users = await Book.findAll({
                raw:true
            });
            res.send(users);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    }

    public async getBookByPK (req: Request, res: Response) {
        try{
            const usersId = await Book.findByPk(req.params.id);
            res.send(usersId);
        }
        
        catch (error) {
            res.sendStatus(500);
        }
    } 

  

    public async create (req: Request, res: Response) {
        try {
            const request = req.body;
            const newBook = await Book.create(request)

            res.json(newBook);

        }catch(error){
            res.json(error);
        }
        
    }

    public async update (req: Request, res: Response) {
        try {
            const newBook = await Book.update(
                {
                    title: req.body.title,
                    isbn: req.body.isbn,
                },
                {
                    where: {
                        id: req.params.id,
                    }
                }
            );

            res.json(newBook);
            
        }catch(error){
            res.json(error);
        }
        
    }

    public async delete (req: Request, res: Response) {
        try {
            const deleteUser = await Book.destroy(
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
export const bookController = new BookController();