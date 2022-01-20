import { connectedDatabase, disconnectDatabase } from '../../../src/db';

/**
 * Returns back the list of gift cards to be shown in UI
 * Based on various conditions like search text, category wise etc.
 * @param {*} req 
 * @param {*} res 
 */
async function giftCardsApiHandler(req, res) {
  try {
    const { search, category } = req.query;
    
    let queryCondition = {};
    if(search)  {
      queryCondition = { $or:
        [
          { name: new RegExp(search, "i") },
          { reviews: {
              reviewer: new RegExp(search, "i"),
              review: new RegExp(search, "i")
            }
          }
        ]
      };
    } else if(category) {
      queryCondition = { category: category };
    }
    
    const client = await connectedDatabase();

    const giftCards = await client.db().collection('Gifts').find(queryCondition).project({
      image: 1,
      name: 1
    }).toArray();

    await disconnectDatabase();
    res.status(200).json({
      data: giftCards
    });
  } catch(error) {
    await disconnectDatabase();
    console.log(error);
    res.status(200).json({
      error: error
    });
  }
}

export default giftCardsApiHandler;