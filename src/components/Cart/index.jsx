import { Heading } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CartDelivery from './CartDelivery';

import CartItemsList from "./CartItemsList";

const Cart = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const { data:session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if(!session) {
      router.replace('/login?redirect=cart');
    }
  });

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
