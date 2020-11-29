import { Model, Sequelize, DataTypes} from 'sequelize';
import { database } from '../database';

export class Role extends Model{
    public id!: number;
    public type!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Role.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('ADMIN', 'WEB CLIENT'),
        defaultValue: 'WEB CLIENT',
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
    tableName: 'roles',
    sequelize: database //Es como decimos conectarnos a la base de datos que esta en archivo database.ts
})