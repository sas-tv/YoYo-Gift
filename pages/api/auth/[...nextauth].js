import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from "bcryptjs";

import { connectedDatabase, disconnectDatabase } from "../../../src/db";

const nextAuthOptions = {
  session: {
    jwt: true
  },
  providers:[
    CredentialsProvider({
      /**
       * Handles login operation for the application using credentials of an user
       * @param {object} credentials 
       * @returns 
       */
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          const client = await connectedDatabase();
        
          const user = await client.db().collection('Users').findOne({ email: email });
          if(!user) {
            await disconnectDatabase();
            throw new Error(`User doesn't exists!`);
          }
          
          const isUserVerified = await compare(password, user.password);
          if(!isUserVerified) {
            await disconnectDatabase();
            throw new Error(`Invalid email or password!`);
          }
          
          await disconnectDatabase();

          return { email: user.email };
        } catch(error) {
          console.log(error);
          throw error;
        }
      }
    })
  ],
  secret: process.env.SECRET
};

export default NextAuth(nextAuthOptions);