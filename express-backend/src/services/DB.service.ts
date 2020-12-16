import { Sequelize, Options } from 'sequelize';
import Sequelize2 from 'sequelize';
import { RoutesSqlTableModel } from '../interfaces/Routes.interface';

const SCHEMA_NAME = 'email_url_data';
const USER_NAME = 'root';
const PASSWORD = 'Neska1994';
const OPT: Options = { dialect: 'mysql' };

export default class DB{

    private sequelize: Sequelize;
    private static instance: DB;

    private constructor() {
        this.sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, OPT);
    }

    public static getInstance(): DB {
        if (!DB.instance) {
            DB.instance = new DB();
        }

        return DB.instance;
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }

    public defineNewTable(tableName: string, colInfo: RoutesSqlTableModel): Sequelize2.ModelCtor<Sequelize2.Model<any, any>>{
        return this.sequelize.define(tableName,colInfo);
    }

    public connect(): void {
        this.sequelize.sync()
            .then(() => {
                console.log('DB is connected');
            })
            .catch(err => {
                console.log('DB had an error in connection:\n', err);
                return;
            });
    }
    
}