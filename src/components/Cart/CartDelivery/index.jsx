import { Heading } from "@chakra-ui/react";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { AppContext } from "../../../utils/AppContext";

const CartDelivery = () => {
  const { 
    appData: { cartItems },
    updateAppValues,
    showToastMessage
  } = useContext(AppContext);

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState('');
  
  const handleOnDeliverButton = async () => {
    var emailRegex = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
    if(!email.match(emailRegex)) {
      setEmailError('Please enter a valid email!');
      return;
    }

    setIsLoading(true);
    
    const cartItemsWithDate = cartItems.map(item => { 
      return {
        ...item, 
        orderDate: new Date(),
        email: email
      }
    });

    const placeOrderResponse = await fetch('/api/user/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItemsWithDate)
    });

    const { data, error } = await placeOrderResponse.json();
    if(!data || error) {
      showToastMessage({ message:error, status:'error' });
    } else {
      showToastMessage({ message:data, status:'success' });
      updateAppValues({
        cartItemsCount: 0,
        cartItems: []
      });
    }

    setIsLoading(false);

    router.push('/profile');
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <Heading size="md">Placing Order...</Heading>
      <TextField 
        id="email"
        type="email"
        label="Send to Email"
        style={{
          width: '250px',
          marginRight: '16px'
        }}
        placeholder="Enter an email for delivery"
        value={email}
        onChange={(e) => {
          const { target: { value }} = e;
          setEmail(value);
          setEmailError('');
        }}
        error={emailError !== ''}
        helperText={emailError}
      />
      <LoadingButton
        type="submit"
        loading={isLoading}
        variant="contained"
        color="success"
        onClick={handleOnDeliverButton}
        style={{
          width: '200px',
          height: '40px',
          marginTop: '12px'
        }}
        disabled={email === ''}
      >
        DELIVER
      </LoadingButton>
    </div>
  );
}

export default CartDelivery;