import { Transaction } from '../models/sequelize.js';

async function createTransaction(sneakers, cart, id) {

    let contents = ""
    let total_amount = 0;

    sneakers.forEach((sneaker, index) => {
        contents += 'Name: ' + sneaker.dataValues.name + '\n';
        contents += 'Price: ' + sneaker.dataValues.resell_price + '\n';
        contents += 'Quantity: ' + cart[sneaker.dataValues.id] + '\n';
        total_amount += sneaker.dataValues.resell_price * cart[sneaker.dataValues.id];
        
        if (index < sneakers.length - 1) {
            contents += '\n';
        }
    });

    total_amount = Math.round(total_amount * 1.1 * 100) / 100;

    const result = await Transaction.create({
        user_id: id,
        total_price: total_amount,
        contents: contents,
        date: new Date().toLocaleDateString('en-US'),
    });


}

async function getTransactions(req) {
    const user_id = req.user.id;

    const transactions = await Transaction.findAll({
        where: {
            user_id: user_id  
        }
    });
    return transactions;
}
export { createTransaction, getTransactions };












