import bcrypt from 'bcryptjs';

import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * Checks for multiple validations and creates a user in User table
 * @param {object} req 
 * @param {object} res 
 * @returns 
 */
async function singUpApiHandler (req, res) {
  try {
    const data = req.body;
    const { firstName, lastName, email, password } = data;

    if(!firstName || !lastName || !email || !email.includes('@') ||!password || password.trim().length < 7) {
      res.status(422).json({
        error: 'Invalid Input!'
      });
      return;
    }
    const client = await connectedDatabase();
    const existingUser = await client.db('YOYO_GIFT').collection('Users').findOne({
      email: email
    });

    if(existingUser) {
      res.status(422).json({
        error: 'User already exists!'
      });
      await disconnectDatabase;
      return;
    }

    const passwordHash = bcrypt.hashSync(password, 12);
    const userDetails = {...data, password: passwordHash};

    await client.db('YOYO_GIFT').collection('Users').insertOne(userDetails);
    await disconnectDatabase;

    res.status(200).send({
      message: 'User created successfully!'
    });
  } catch(error) {
    console.log(error);
    res.status(200).json({
      error: error
    });
  }
}

export default singUpApiHandler;