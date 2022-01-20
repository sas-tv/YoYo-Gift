import { getSession } from 'next-auth/react';

import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * This handler helps an user to submit review for a particular gift card
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function reviewsApiHandler(req, res) {
  try {
    const session = await getSession({ req });
    if(!session) {
      res.status(403).json({
        error: 'User not logged in!'
      });
      return;
    }
    const { user: { email }} = session;

    const { name, rating, review } = req.body;
    if(!name || !rating) {
      res.status(200).json({
        error: 'Invalid Input!'
      });
      return;
    }

    const client = await connectedDatabase();
    const user = await client.db().collection('Users').findOne({
      email: email
    },
    {
      fields: { 
       firstName: 1,
       lastName: 1 
      }
    });

    const reviewRecord = {
      reviewer: `${user.firstName} ${user.lastName}`,
      reviewDate: new Date(),
      review,
      rating: parseInt(rating, 10)
    };

    await client.db().collection('Gifts').findOneAndUpdate(
      { name: name }, 
      { $push: { reviews: reviewRecord }}
    );

    await disconnectDatabase();

    res.status(200).json({
      data: 'Review posted successfully!'
    });
  } catch(error) {
    console.log(error);
    res.status(200).json({
      error: error
    });
  }
}

export default reviewsApiHandler;