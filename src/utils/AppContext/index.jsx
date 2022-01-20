import { useState, createContext } from 'react';

const toastMessageInitialValues = {
  message: null,
  status: null
};

const appInitialValues = {
  isProfileLoading: false,
  userProfile: {},
  isGiftCardsLoading: false,
  selectedGiftCategory: 'All Categories',
  searchedText: '',
  filteredGiftCards: null,
  cartItemsCount: 0,
  cartItems: []
};

/**
 * Helper function to update the in-memory data helper 
 */
export const AppContext = createContext();

/**
 * In-memory data helper for the application
 * @param {*} param0 
 * @returns 
 */
export const AppContextProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState(toastMessageInitialValues);
  const [appData, setAppData] = useState(appInitialValues);
  
  const showToastMessage = (data) => {
    setToastMessage(data);
  };

  const updateAppValues = (data) => {
    setAppData((prev) => ({...prev, ...data}));
  };
  
  return (
    <AppContext.Provider value={{toastMessage, showToastMessage, appData, updateAppValues}} >
      {children}
    </AppContext.Provider>  
  );
};