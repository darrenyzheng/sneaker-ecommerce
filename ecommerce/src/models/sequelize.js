import { Sequelize } from 'sequelize';
import UserModel from './user.model.js';
import SneakerModel from './sneaker.model.js';
import TransactionModel from './transaction.model.js';
import dotenv from 'dotenv';
import pg from 'pg';
dotenv.config();

const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
const sequelize = new Sequelize('postgres', 'postgres', POSTGRES_PASSWORD, {
    host: 'sneaker-ecommerce.c1iekokmyd0e.us-east-2.rds.amazonaws.com',
    dialect: 'postgres',
    dialectModule: pg,
    port: 5432, 
    ssl: true,  
    dialectOptions: {
        ssl: {
            require: true,  
            rejectUnauthorized: false  
        }
    }
});
const User = UserModel(sequelize);
const Sneaker = SneakerModel(sequelize);
const Transaction = TransactionModel(sequelize);

const initDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully created database connection.');
        await sequelize.sync({force:false});
    } catch (error) {
        console.error('Unable to connect to database', error);
    }
};

export { sequelize, User,Sneaker, Transaction, initDatabase };