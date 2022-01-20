import Image from 'next/image';
import Link from 'next/link';
import { LoadingButton } from "@mui/lab";
import { useState, useContext } from 'react';

import { AppContext } from '../../../../utils/AppContext';

import { cartItemContainer, imageContainer, nameContainer } from './index.module.css';

const CartItem = ({ 
  item: {
    name,
    image
  },
  index
}) => {
  const [isRemoveItemLoading, setIsRemoveItemLoading]= useState(false);

  const { appData: {
    cartItemsCount,
    cartItems
  },
    updateAppValues,
    showToastMessage
  } = useContext(AppContext);

  const giftNameToSlug = () => {
    return name
      .toString()
      .trim()
      .toLowerCase()
      .split(' ')
      .join('-');
  }

  const handleOnRemoveCartButton = async () => {
    setIsRemoveItemLoading(true);

    const removeCartItemResponse = await fetch(`/api/user/cart`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        image: image
      })
    });

    const { data, error } = await removeCartItemResponse.json();

    if(!data || error) {
      showToastMessage({ message: error, status:'error' });
    } else {
      showToastMessage({ message: data, status:'success' });
      const updatedCartItems = cartItems.filter(item => item.name !== name);
      updateAppValues({ cartItems:updatedCartItems, cartItemsCount:updatedCartItems.length });
    }

    setIsRemoveItemLoading(false);
  };

  return(
    <div key={index} className={cartItemContainer} 
      style={cartItemsCount-1 == index ? { borderBottom: '0.1px solid #878787' } : {}}
    >
      <div className={imageContainer}>
        <Link href={`/${giftNameToSlug(name)}`} passHref={true} >
          <Image 
            alt={name} 
            src={image}
            height={200}
            width={200}
          />
        </Link>
      </div>
      <div>
        <Link href={`/${giftNameToSlug(name)}`} passHref={true} >
          <span className={nameContainer}>{name}</span>
        </Link>
      </div>
      <div style={{alignItems: 'center'}}>
        <LoadingButton
          loading={isRemoveItemLoading}
          onClick={() => { handleOnRemoveCartButton(name) }}
          variant="outlined"
          color="success"
          style={{
            width: '150px',
            height: '40px',
            marginLeft: '48px'
          }}
        >
          REMOVE
        </LoadingButton>
      </div>
    </div>
  );
  
};

export default CartItem;