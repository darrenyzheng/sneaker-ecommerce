import { sequelize } from '../models/sequelize.js';

async function getSneaker(sneakerId) {
    try {
        const sneaker = await sequelize.query(
            'SELECT * FROM sneakers WHERE id = :sneakerId',
            {
                replacements: { sneakerId },
                type: sequelize.QueryTypes.SELECT
            }
        );

        if (!sneaker.length) {
            return null;
        }
        
        return sneaker[0]; 
    } catch (error) {
        throw error; 
    }
}

async function updateStock (sneakerId, quantity) {
    return sequelize.query(
        `UPDATE sneakers SET stock = stock - :quantity WHERE id = :sneakerId AND stock >= :quantity`,
        {
            replacements: { sneakerId, quantity },
            type: sequelize.QueryTypes.UPDATE
        }
    );
};

export {getSneaker, updateStock};