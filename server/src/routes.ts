import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController  from './controllers/ItemsController';

const routes = express.Router();

//quando se cria um controller é um padrão utilizar os métodos
// index: Listagem / show: único item / create / update / delete

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;

// Service Pattern
// Repository Pattern (Data Mapper)