import { Heading } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CartDelivery from './CartDelivery';

import CartItemsList from "./CartItemsList";

/**
 * Returns back the Cart page with all gifts in memory
 * @returns 
 */
const Cart = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const { data:session } = useSession();
  const router = useRouter();

  /**
   * Redirects to login page, if the user isn't signed in
   */
  useEffect(() => {
    if(!session) {
      router.replace('/login?redirect=cart');
    }
  });

  /**
   * Shows the second part of the page
   */
  const handlePlaceOrderButton = () => {
    setShowOrderForm(true);
  }

  return (
    <div>
      {!session ?
        <Heading>You are not logged in!</Heading>
      : <div>
          {!showOrderForm ?
            <CartItemsList 
              handlePlaceOrder={handlePlaceOrderButton}
            />
          : <CartDelivery />
          }
        </div>
      }
    </div>
  );
};

export default Cart;
