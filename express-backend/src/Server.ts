import bodyParser from 'body-parser';
import IndexRoute from './routes/Index.route';
import cors from 'cors';
import App from './App';

const PORT = 4000;//change this if needed

const middlerwares = [cors(), bodyParser.urlencoded({ extended: false }), bodyParser.json()];

const controllers = [IndexRoute];

const app = new App(middlerwares, controllers, PORT);

