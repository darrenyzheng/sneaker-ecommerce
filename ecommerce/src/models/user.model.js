import { DataTypes } from 'sequelize';

const UserModel = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        provider: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'users', 
        timestamps: false
    });

    return User;
};

export default UserModel;