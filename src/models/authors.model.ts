import { Model, Sequelize, DataTypes} from 'sequelize';
import { database } from '../database';

export class Author extends Model{
    public id!: number;
    public name!: string;
    public familyName!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Author.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    familyName: {
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
    tableName: 'authors',
    sequelize: database //Es como decimos conectarnos a la base de datos que esta en archivo database.ts
})