import { useContext } from "react";
import { Heading } from "@chakra-ui/react";
import { LoadingButton } from "@mui/lab";
import { Divider } from "@mui/material";

import CartItem from "./CartItem";
import { AppContext } from '../../../utils/AppContext';

import { cartContainer, headerContainer } from './index.module.css';

/**
 * Displays the place order button with the list of items in the cart
 * @param {*} param0 
 * @returns 
 */
const CartItemsList = ({ handlePlaceOrder }) => {
  const { appData: {
    cartItemsCount,
    cartItems
  }
} = useContext(AppContext);

  return (
    <div className={cartContainer}>
      <div className={headerContainer}>
        <Heading>My Cart({cartItemsCount})</Heading>
        <LoadingButton
          type="submit"
          loading={false}
          variant="contained"
          color="success"
          onClick={handlePlaceOrder}
          style={{
            width: '200px',
            height: '40px',
            marginTop: '12px'
          }}
          disabled={cartItemsCount === 0}
        >
          PLACE ORDER
        </LoadingButton>
      </div>
      <Divider style={{marginBottom: '24px'}} />
      {cartItems.map((item, index) => (
        <CartItem 
          key={index} 
          item={item}
          index={index}
        />
      ))}

    </div>
  );
}

export default CartItemsList;
