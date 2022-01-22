import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, TextField } from "@mui/material";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext, useRef } from 'react';
import debounce from 'lodash/debounce';

import { AppContext } from '../../../utils/AppContext';

import { searchFilterContainer } from './index.module.css';

/**
 * Displays search filter to search gift cards
 * @returns 
 */
const SearchFilter = () => {
  const { appData: { searchedText }, 
  updateAppValues
 } = useContext(AppContext);

  const debouncedApiHelper = useRef(debounce(searchText => handleApiCall(searchText), 300)).current;

  /**
   * Calls api to fetch data accordingly and update the UI
   * @param {*} searchText 
   * @returns 
   */
  const handleApiCall = async (searchText) => {
    const isSearchTextEmpty = searchText === '';
    
    if(isSearchTextEmpty) {
      updateAppValues({
        selectedGiftCategory: 'All Categories',
        filteredGiftCards: null
      });
      return;
    }

    updateAppValues({
      selectedGiftCategory: 'All Categories',
      isGiftCardsLoading: true ,
      filteredGiftCards: []
    });
    
    const filteredGiftCards = await fetch(`/api/giftcards?search=${searchText}`);
    const { data, error } = await filteredGiftCards.json();

    if(!data || error) {
      updateAppValues({
        isGiftCardsLoading: false ,
        filteredGiftCards: null
      });
    }
    else {
      updateAppValues({
        isGiftCardsLoading: false ,
        filteredGiftCards: data
      });
    }  
  };
  
  /**
   * Updates searched text value to in-memory variable
   * Uses debounce technique to call API, if the diff of duration between the entered text is more than 300 milli-seconds
   * @param {*} param0 
   */
  const handleOnSearchTextChange = ({ target: { value } }) => {
    updateAppValues({searchedText: value});
    debouncedApiHelper(value);
  }
  
  return (
    <div className={searchFilterContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" style={{marginTop: '12px', marginRight: '4px'}}/>
      <FormControl>
        <TextField
          placeholder='Search by name etc.'  
          id='SearchFilterInput'
          type='text'
          variant='outlined'
          style={{backgroundColor: 'white', borderRadius: '10px'}}
          onChange={handleOnSearchTextChange}
          value={searchedText}
        />
      </FormControl>
    </div>
  );
};
export default SearchFilter;