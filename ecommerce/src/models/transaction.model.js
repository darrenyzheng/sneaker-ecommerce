    import { DataTypes } from 'sequelize';
    import UserModel from './user.model.js'; 

    const TransactionModel = (sequelize) => {
        const Transaction = sequelize.define('Transaction', {
            transaction_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true, 
            },

            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: UserModel(sequelize), 
                    key: 'id', 
                },
            },

            total_price: {
                type: DataTypes.DECIMAL(10, 2), 
                allowNull: false,
            },

            contents: {
                type: DataTypes.TEXT,
                allowNull: false,
            },

            date: {
                type: DataTypes.STRING, 
                allowNull: false,
            },


        }, {
            tableName: 'transactions',  
            timestamps: false
        });

        Transaction.associate = (models) => {
            Transaction.belongsTo(models.User, {
                foreignKey: 'user_id',
                targetKey: 'id',
            });
        };

        return Transaction;
    };

    export default TransactionModel;