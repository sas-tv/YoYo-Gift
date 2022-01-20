import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { giftCardDetailsContainer, giftCardDetailsRating, nameContainer, ratingContainer,
  countContainer, descriptionContainer, descriptionTextContainer } from './index.module.css';

const GiftCardDetails = ({
  giftCard: { 
    name,
    description
  },
  ratingCount,
  ratingsAverage,
  reviewCount
}) => {
  return (
    <div className={giftCardDetailsContainer}>
      <div className={nameContainer}>
        {name}
      </div>
      
      <div className={giftCardDetailsRating}>
        <div className={ratingContainer}>
          {ratingsAverage}
          <FontAwesomeIcon icon={faStar} style={{margin: '2px 0 0 2px', height: '15px'}}/>
        </div>
        <div className={countContainer}>
          <span>{ratingCount} Rating(s)&nbsp;</span>
          <span>&</span>
          <span>&nbsp;{reviewCount} Review(s)</span>
        </div>
      </div>
      
      <div className={descriptionContainer}>
        <div className={descriptionTextContainer}>Description</div>
        <div>{description}</div>      
      </div>
    </div>
  );
}

export default GiftCardDetails;