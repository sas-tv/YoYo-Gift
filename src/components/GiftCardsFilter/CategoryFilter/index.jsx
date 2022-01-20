import { InputLabel, Select, FormControl, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';

import { AppContext } from '../../../utils/AppContext';

import { categoryFilterContainer } from './index.module.css';

const categoryFilterData = [
  'All Categories',
  'Ecommerce',
  'Entertainment',
  'Travel',
  'Health',
  'Food'
];

const CategoryFilter = () => {
  const { updateAppValues,
    appData } = useContext(AppContext);

  const handleOnCategoryChange = async ({ target: { value }}) => {
    updateAppValues({ 
      selectedGiftCategory: value,
      searchedText: '',
      isGiftCardsLoading: true ,
      filteredGiftCards: [] 
    });

    const isGiftCardAllCategory = value === 'All Categories';

    const filteredGiftCards = await fetch(`/api/giftcards${isGiftCardAllCategory ? `` : `?category=${value}`}`);
    const { data } = await filteredGiftCards.json();

    updateAppValues({
      isGiftCardsLoading: false ,
      filteredGiftCards: !data || data.length === 0 ? null : data
    });

  }
  return (
    <div className={categoryFilterContainer}>
      <FormControl>
        <InputLabel id='CategoryFilterLabel'>
          Category
        </InputLabel>
        <Select
          labelId='CategoryFilterLabel'
          id='CategoryFilterDropDown'
          value={appData.selectedGiftCategory}
          label='Category'
          onChange={handleOnCategoryChange}
          defaultValue={categoryFilterData[0]}
          >
            {categoryFilterData.map(categoryName => 
            <MenuItem 
              key={categoryName}
              value={categoryName}
            >
              {categoryName}
            </MenuItem>)}
          </Select>
      </FormControl>
    </div>
  );
};

export default CategoryFilter;