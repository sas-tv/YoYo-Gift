import { LoadingButton } from "@mui/lab";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { giftCardDetailsImageContainer, imageContainer } from './index.module.css';

const GiftCardImage = ({
  giftCard: { 
    name,
    image
  },
  handleOnAddToCartButton,
  isButtonLoading
}) => {
  return (
    <div className={giftCardDetailsImageContainer}>
      <div className={imageContainer}>
        <Image alt={name} src={image} height={450} width={500} />
      </div>
      <LoadingButton 
        type="submit"
        loading={isButtonLoading}
        variant="contained"
        color="success"
        onClick={handleOnAddToCartButton}
        style={{
          width: '500px',
          height: '40px',
          marginTop: '12px'
        }}
      >
        <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '8px' }}/>
        <b>ADD TO CART</b>
      </LoadingButton>
    </div>
  );
}

export default GiftCardImage;