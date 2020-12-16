import Sequelize from 'sequelize';
import DB from '../services/DB.service';
import jwt from 'jsonwebtoken';
import { RoutesSqlTableModel } from '../interfaces/Routes.interface';
import { Model } from 'sequelize';

export default class RouteModel {
    public email: string;
    public url: string;
    public token: string;
    public isConfirmed: boolean;
    private static sqlRef: Sequelize.ModelCtor<Sequelize.Model<any, any>> =
        DB.getInstance().defineNewTable('email_url_requests', RouteModel.returnRouteSqlTableData());


    constructor(email: string, url: string, token?: string) {
        this.email = email;
        this.url = url;
        if (!token) {
            this.token = jwt.sign({ email: this.email, url: this.url }, 'secret');
        }
        else {
            this.token = token;
        }
        this.isConfirmed = false;
    }

    public saveToDB(): Promise<Model<any, any>> {
        return RouteModel.sqlRef.build(this).save()
            .then(result => result)
            .catch(err => { throw err });
    }

    public isIdUnique(): Promise<boolean> {
        return RouteModel.sqlRef.count({ where: { email: this.email, url: this.url } })
            .then(count => {
                console.log("============>>",count);
                if (count !== 0) {
                    return false;
                }
                return true;
            })
            .catch(err => {
                return err;
            })
    }

    public static findAll(): Promise<Model<any, any>[]>{
        return RouteModel.sqlRef.findAll({
            raw: true,
            where: {
                isConfirmed: true
            },
            attributes: ['email', 'url']
        })
    }

    public static updateToConfirmed(toUpdate: Model<any, any>): Promise<Model<any, any>> {
        return toUpdate.update({
            isConfirmed: true
        })
    }

    public static findOne(token: string, isConfirmed: boolean): Promise<Model<any, any> | null> {
        return RouteModel.sqlRef.findOne({
            where: {
                token: token,
                isConfirmed
            }
        })
    }

    public static returnRouteSqlTableData(): RoutesSqlTableModel {
        return {
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false
            },
            token: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true
            },
            isConfirmed: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            }
        };
    }


}

