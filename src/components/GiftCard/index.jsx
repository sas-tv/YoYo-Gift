import Image from "next/image";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import GiftCardImage from './GiftCardImage';
import GiftCardDetails from "./GiftCardDetails";
import GiftCardReviews from "./GiftCardReviews";
import HeaderField from "../HeaderField";
import { AppContext } from "../../utils/AppContext";

import { giftCardContainer, messageContainer, detailReviewContainer } from './index.module.css';

const Error_404_Image_Source = "/assets/404Error.jpg";

/**
 * Displays the gift card details
 * Like image, description, reviews etc
 * @param {*} param0 
 * @returns 
 */
const GiftCard = ({ 
  giftCard,
  error
}) => {
  const [isAddCartButtonLoading, setIsAddCartButtonLoading] = useState(false);
  
  const ratingCount = giftCard.reviews.length;
  let ratingsAverage = 0, reviewCount = 0;
  giftCard.reviews.map(review => {
    ratingsAverage += review.rating;
    if(review.review && review.review !== '')
      reviewCount++;
  });
  ratingsAverage /= ratingCount;
  ratingsAverage = (Math.round(ratingsAverage * 100)/ 100).toFixed(2);

  const { data:session } = useSession();
  const router = useRouter();

  const { 
    showToastMessage, 
    updateAppValues,
    appData: {
      cartItemsCount,
      cartItems
    }
 } = useContext(AppContext);

  const giftNameToSlug = giftCard.name
    .toString()
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-');
    
  /**
   * Adds the item to cart and redirects the user to cart page
   */
  const handleOnAddToCart = async () => {
    if(!session) {
      router.push(`/login?redirect=${giftNameToSlug}`);
    } else {
      setIsAddCartButtonLoading(true);
      const reqBody = { 
        name: giftCard.name, 
        image: giftCard.image 
      };
      
      const addToCartResponse = await fetch('/api/user/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
      });
      const { data, error } = await addToCartResponse.json();
      if(!data || error) {
        showToastMessage({ message: error, status:'error' });
      } else {
        showToastMessage({ message: data, status:'success' });
        updateAppValues({ cartItemsCount: cartItemsCount + 1, cartItems: [...cartItems, {
          name: giftCard.name,
          image: giftCard.image 
        }]});
        router.push('/cart');
      }
      setIsAddCartButtonLoading(false);
    }
  };

  return (
    <div className={giftCardContainer}>
      { !giftCard || giftCard === null || error ?
        <div className={messageContainer}> 
          <h1>{error}</h1>
          <Image alt="Not Found!" src={Error_404_Image_Source} height={300} width={500} />
          <HeaderField redirectValue='/' headerType='h3' headerValue='Back To Gift Cards List' icon={faLeftLong} />
        </div>
      : (
        <>
          <GiftCardImage 
            giftCard={giftCard}
            handleOnAddToCartButton={handleOnAddToCart}
            isButtonLoading={isAddCartButtonLoading}
          />
          <div className={detailReviewContainer}>
            <GiftCardDetails 
              giftCard={giftCard}
              ratingCount={ratingCount}
              ratingsAverage={ratingsAverage}
              reviewCount={reviewCount}
            />
            <GiftCardReviews 
              giftName={giftCard.name}
              reviews={giftCard.reviews}
              ratingCount={ratingCount}
              ratingsAverage={ratingsAverage}
              reviewCount={reviewCount}
            />
          </div>
        </>
      )}      
    </div>
  );
};

export default GiftCard;