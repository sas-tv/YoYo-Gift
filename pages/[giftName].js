import GiftCard from "../src/components/GiftCard";

/**
 * Helps render the gift card details page
 * @param {*} param0 
 * @returns 
 */
const GiftCardPage = ({ giftCard, errorMessage }) => {
  return <GiftCard giftCard={giftCard} error={errorMessage} />
};

export default GiftCardPage;

/**
 * Next JS related code, helps to pre-render the gift card data in memory, before the page is visited by the user
 * @param {*} context 
 * @returns 
 */
export async function getServerSideProps(context) {
  const { query: { giftName } } = context;
  let giftCard;

  try {
    const giftCardResponse = await fetch(`${process.env.APP_URL}api/giftcards/${giftName}`);
    const { data, error } = await giftCardResponse.json();

    if(!data || error) {
      return {
        props: {
          giftCard: null,
          errorMessage: error
        }
      }
    } else {
      giftCard = data;
    }
  } catch(error) {
    console.log(error);
  }

  return {
    props: {
      giftCard: giftCard
    }
  }
}