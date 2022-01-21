const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@yoyo-gift.dotkd.mongodb.net/YOYO_GIFT?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

/**
 * Returns a connected client to MongoDB
 * @returns client to connect and do database operations
 */
export async function connectedDatabase() {
  try {
    const connectedClient = await client.connect();
    return connectedClient;
  } catch(error) {
    console.log(error);
  }
}

/**
 * Disconnects the MongoDb database connection
 */
export async function disconnectDatabase() {
  await client.close();
}