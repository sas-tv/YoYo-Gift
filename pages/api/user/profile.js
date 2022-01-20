import { getSession } from 'next-auth/react';

import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * Helps to retrieve and return user's profile related information
 * Like, full name, email, order history
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function profileApiHandler(req, res) {
  try {
    const session = await getSession({ req });
    if(!session) {
      res.status(403).json({
        error: 'User not logged in!'
      });
      return;
    }
    const { user: { email }} = session;

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

    var user = {
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      email: existingUser.email,
      orders: existingUser.orders
    };
    res.status(200).json({
      user: user
    });
  } catch(error){
    await disconnectDatabase();
    console.log(error);
    res.status(200).json({
      erorr: error
    });
  }
}

export default profileApiHandler;