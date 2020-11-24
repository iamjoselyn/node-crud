import { Model, Sequelize, DataTypes} from 'sequelize';
import { database } from '../database';

export class Book extends Model{
    public id!: number;
    public title!: string;
    public isbn!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Book.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }


},{
    tableName: 'books',
    sequelize: database //Es como decimos conectarnos a la base de datos que esta en archivo database.ts
})