
import { AbstractDataTypeConstructor } from 'sequelize';
interface SqlColData { type: AbstractDataTypeConstructor, allowNull: boolean, primaryKey?: boolean };

export interface RoutesSqlTableModel {
    email: SqlColData,
    url: SqlColData,
    token: SqlColData,
    isConfirmed: SqlColData,
};

export interface AuthData { user: string, pass: string };


