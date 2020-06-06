import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.1.68:3333/uploads/${item.image}` 
                /* o ip é o da máquina onde o mobile está sendo servido
                para o front-end web utilizamos http://localhost:3333 */
            }
        });
    
        response.json(serializedItems);
    }
}

export default ItemsController;