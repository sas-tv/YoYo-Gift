import GiftCards from '../src/components/GiftCards';

/**
 * Helps render the list of gift cards in the UI
 * @param {*} param0 
 * @returns 
 */
export default function Home({ giftCards }) {
  return (
    <GiftCards allGiftCards={giftCards}/>
  )
}

/**
 * Next JS related code, helps to pre-render the list of gift cards data in memory, before the page is visited by the user 
 * @returns 
 */
export async function getServerSideProps() {
  let giftCards = [];

  try {
    const giftCardsResponse = await fetch('http://localhost:3000/api/giftcards');
    
    const { data } = await giftCardsResponse.json();
    giftCards = data ? data : null;
  } catch(error) {
    console.log(error);
  }
  console.log(process.env.SECRET);
  return {
    props: { giftCards }
  };
}
