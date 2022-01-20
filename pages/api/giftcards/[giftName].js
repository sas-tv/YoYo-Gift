import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * Returns back the entire details of a gift card to be shown in the UI
 * Details like, name, image, list of reviews
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
async function giftCardApiHandler(req, res) {
  try {
    const { query: { giftName }} = req;
    
    const giftNameSlugToName = giftName
      .toString()
      .trim()
      .toLowerCase()
      .split('-')
      .join(' ');

    if(!giftNameSlugToName) {
      res.status(200).json({
        error: 'Gift Name cannot be empty!'
      });
      return;
    }
    
    const client = await connectedDatabase();
    const giftCard = await client.db().collection('Gifts').findOne({
      name: new RegExp(giftNameSlugToName, "i")
    });

    if(!giftCard || giftCard === null) {
      await disconnectDatabase();
      res.status(200).json({
        error: `No gift card found for the name ${giftNameSlugToName.toUpperCase()}`
      });
      return;
    }
    
    await disconnectDatabase();
    res.status(200).json({
      data: giftCard
    });
  } catch(error) {
      await disconnectDatabase();
      console.log(error);
      res.status(200).json({
        error: error
      });
  }
}

export default giftCardApiHandler;