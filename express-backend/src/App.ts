import core from 'express';
import Express from 'express';
import { Router } from 'express';
import { RequestHandler } from 'express';
import DB from './services/DB.service';

type Port = number | string;
export default class App { 

    private app: core.Express;

    constructor(middlewares: RequestHandler[], routes: Router[], port:Port) {
        this.app = Express();
        this.includeMiddleware(middlewares);
        this.includeRoutes(routes);
        this.sqlConnector();
        this.listen(port);
        console.log('server is listening');
    }

    private includeMiddleware = (middlewares: RequestHandler[]): void => {
        middlewares.forEach(middleware => this.app.use(middleware));
    };

    private includeRoutes = (middlewares: Router[]): void => {
        middlewares.forEach(middleware => this.app.use(middleware));
    };

    private sqlConnector = (): void => {
        try {
            DB.getInstance();
            DB.getInstance().connect();
        }
        catch (err) {
            console.log('RECEIVED DB ERROR: ', err);
        }
    }

    private listen(port: Port):void {
            this.app.listen(port);
    }
}