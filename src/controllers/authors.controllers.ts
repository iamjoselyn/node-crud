import { Request, Response} from 'express';
import { Author } from '../models/authors.model';
import { Book } from '../models/books.model';

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
            const deleteLink = await Book.update(
                
                {
                    authorId: null, //Liberamos el libro que llega
                },
                
                {
                    where: {
                        id: req.body.id,
                        authorId: req.params.id
                    }
                    //UPDATE Book SET AuthorId=null WHERE id=bodyParam AND authorId = UrlParam
                    //404
                }
                
            );

            res.sendStatus(201);
            
        }catch(error){
            res.send(error);
        }
        
    }
}
export const authorController = new AuthorController();