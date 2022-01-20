import { useContext } from "react";
import { CircularProgress, Divider } from "@mui/material";
import { Grid } from '@chakra-ui/layout';

import { AppContext } from '../../utils/AppContext';
import GiftCard from "./GiftCard";

import { giftCardsContainer, messageContainer } from './index.module.css'

/**
 * This page shows all gift cards in the home
 * @param {*} allGiftCards is sent from the Home page and has all gift cards 
 * @returns 
 */
const GiftCards = ({ allGiftCards }) => {
  const {
    appData: {
      isGiftCardsLoading,
      selectedGiftCategory,
      filteredGiftCards
    }
  } = useContext(AppContext);

  //In-line styling
  const spinnerStyle = {
    alignItems:'center',
    justifyContent: 'center',
    display: 'flex'
  }

  const giftCardsToShow = filteredGiftCards ? filteredGiftCards : allGiftCards;
  return (
    <div className={giftCardsContainer}>
      <h1>
        {selectedGiftCategory !== 'All Categories' ? selectedGiftCategory : `Featured`} Gift Cards
      </h1>
      <Divider />

      {isGiftCardsLoading || giftCardsToShow.length === 0 ? (
        <div className={messageContainer}> 
        {isGiftCardsLoading ? (
          <div style={spinnerStyle} >
            <CircularProgress color="success" /> 
          </div>
        ) : (
          <h1>No Gift Cards Found. Try again!</h1>
        )}
        </div>
      ) : (
        <Grid templateColumns="repeat(4, 1fr)" gap={10} style={{marginTop: '16px'}}>
          {giftCardsToShow.map(giftCard => <GiftCard giftCard={giftCard} key={giftCard.name} />)}
        </Grid>
      )}
    </div>
  );
}

export default GiftCards;