import { Router } from 'express';
import RouteController from '../controllers/Route.controllers';
import MailController from '../controllers/Mail.controller';

const router = Router();
router.get('/view-all-routes', RouteController.getAll);
router.post('/create-route', RouteController.createNew);
router.get('/confirm-mail/:token', MailController.confirm);


export default router;