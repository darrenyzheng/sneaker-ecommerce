import { DataTypes } from 'sequelize';

const SneakerModel = (sequelize) => {
    const Sneaker = sequelize.define('Sneaker', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        style: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        colorway: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        retail_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        release_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        resell_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        tableName: 'sneakers',  
        timestamps: false
    });

    return Sneaker;
};  


export default SneakerModel;