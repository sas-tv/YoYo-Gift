import { getSession } from 'next-auth/react';

import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * In Cart screen, on click of Place Order & Deliver, this api is called
 * Helps by ordering all the gift cards for an email
 * And empties the cart
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function orderApiHandler(req,res) {
  try {
    const session = await getSession({ req });
    if(!session) {
      res.status(403).json({
        error: 'User not logged in!'
      });
      return;
    }
    const { user: { email }} = session;

    const orders = req.body;    
    if(!orders || orders.length === 0) {
      res.status(200).json({
        error: 'Cannot place empty orders!'
      });
      return;
    }

    const client = await connectedDatabase();
    await client.db().collection('Users').findOneAndUpdate(
      { email: email },
      { 
        $push: { orders: { $each: orders } }, $set: { "cart": [] }
      }
    );

    await disconnectDatabase();

    res.status(200).json({
      data: 'Order placed successfully!'
    });
  } catch(error) {
      await disconnectDatabase();
      console.log(error);
      res.status(200).json({
        erorr: error
      });
  }
}

export default orderApiHandler;