import { getSession } from 'next-auth/react';

import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * This handler has three different apis
 * GET - Fetches and returns all the cart details for a particular user
 * POST - Helps by inserting a gift card in the user's cart
 * DELETE - Helps by removing a gift card from the user's cart
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function cartApiHandler(req, res) {
  try {
    const session = await getSession({ req });
    if(!session) {
      res.status(403).json({
        error: 'User not logged in!'
      });
      return;
    }
    const { user: { email }} = session;

    if(req.method == 'GET') {
      const client = await connectedDatabase();
      const existingUser = await client.db().collection('Users').findOne({
        email: email
      });

      if(!existingUser) {
        res.status(422).json({
          error: `No user found for email ${email}`
        });
        await disconnectDatabase();
        return;
      }

      await disconnectDatabase();

      res.status(200).json({
        data: existingUser.cart
      });
    } else if(req.method == 'POST') {
      const data = req.body;
      const { name, image } = data;
      
      if(!name || !image) {
        res.status(200).json({
          error: 'Cannot add invalid item to cart!'
        });
        return;
      }

      const client = await connectedDatabase();
      await client.db().collection('Users').findOneAndUpdate(
        { email: email  },
        { $push: { cart: data } }
      );

      await disconnectDatabase();

      res.status(200).json({
        data: 'Item added to cart successfully!'
      });
    } else if(req.method == 'DELETE') {
      const data = req.body;
      const { name, image } = data;
      if(!name || !image) {
        res.status(200).json({
          error: 'Cannot remove invalid item from cart!'
        });
        return;
      }
      
      const client = await connectedDatabase();
      await client.db().collection('Users').findOneAndUpdate(
        { email: email },
        { $pull: { cart: data } }
      );

      await disconnectDatabase();

      res.status(200).json({
        data: 'Item removed from cart successfully!'
      })
    }

  } catch(error) {
      await disconnectDatabase();
      console.log(error);
      res.status(200).json({
        erorr: error
      });
  }
}

export default cartApiHandler;