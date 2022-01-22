import { Heading } from "@chakra-ui/react";
import { faStar, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import moment from 'moment';
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useContext } from "react";

import { AppContext } from "../../../utils/AppContext";

import { giftCardReviewsContainer, heading, giftCardReviewsRating, ratingContainer,
  countContainer, reviewItems, reviewer, reviewItemsInner, borderWrapper, reviewText,
  addReviewContainer, notLoggedInContainer, reviewRatingContainer } from './index.module.css';

/**
 * Displays all the reviews for the gift card and gives an option to post review to a signed in user
 * @param {*} param0 
 * @returns 
 */
const GiftCardReviews = ({ 
  giftName,
  reviews,
  ratingCount,
  ratingsAverage,
  reviewCount
}) => {
  const [rating, setRating] = useState('');
  const [ratingError, setRatingError] = useState('');
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { showToastMessage } = useContext(AppContext);
  const { data:session } = useSession();

  const giftNameToSlug = giftName
    .toString()
    .trim()
    .toLowerCase()
    .split(' ')
    .join('-');

  const handleOnAddReviewButton = async () => {
    if(!rating || rating == '') {
      setRatingError('Rating is required!');
      return;
    }
    else if(rating > 5 || rating <= 0) {
      setRatingError('Rating should be within zero to five!');
      return;
    }
    setIsLoading(true);
    const reqBody = {
      name: giftName,
      rating: rating, 
      review: review,
    };

    var addReviewResponse = await fetch('/api/giftcards/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    const { data, error } = await addReviewResponse.json();
    if(!data || error) {
      showToastMessage({ message: data, status: 'error' });
    } else {
      showToastMessage({ message: data, status: 'success' });
      setRating('');
      setReview('');
    }
    setIsLoading(false);
  };
  return (
    <div className={giftCardReviewsContainer}>
      <div className={borderWrapper}>
        <span className={heading}>Ratings & Reviews</span>
        
        <div className={giftCardReviewsRating}>
          <div className={ratingContainer}>
            {ratingsAverage}
            <FontAwesomeIcon icon={faStar} style={{margin: '2px 0 4px 0', height: '35px'}}/>
          </div>
          <div className={countContainer}>
            <span>{ratingCount} Rating(s)&nbsp;</span>
            <span>&</span>
            <span>&nbsp;{reviewCount} Review(s)</span>
          </div>
        </div>
      </div>

      <div className={borderWrapper}>
        {session ?
          <div className={addReviewContainer}>
            <Heading size="md">Review this product</Heading>
            <div>
              <TextField 
                id="rating"
                type="number"
                label="Rating"
                style={{
                  width: '250px',
                  marginRight: '16px'
                }}
                placeholder="Enter a rating"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={rating}
                onChange={(e) => {
                  const { target: { value }} = e;
                  setRating(value);
                  if(value && value !== '' && (value <= 5 && value > 0 ))
                    setRatingError('');
                }}
                error={ratingError !== ''}
                helperText={ratingError}
              />
              <TextField
                id="review"
                label="Review" 
                multiline
                placeholder="Enter a review"
                style={{
                  width: '300px'
                }}
                value={review}     
                onChange={(e) => setReview(e.currentTarget.value)}
              />
            </div>
            <LoadingButton
              type="submit"
              loading={isLoading}
              variant="contained"
              color="success"
              onClick={handleOnAddReviewButton}
              style={{
                width: '200px',
                height: '40px',
                marginTop: '12px'
              }}
              disabled={rating === ''}
            >
              ADD A REVIEW
            </LoadingButton>
          </div>
        : <div className={notLoggedInContainer}>
            <Heading size="md">🎉 LOGIN TO POST A REVIEW! 🎉</Heading>
            <Link href={`/login?redirect=${giftNameToSlug}`} passHref={true}>
              <LoadingButton
                type="submit"
                loading={false}
                variant="contained"
                color="success"
                style={{
                  width: '300px',
                  height: '40px'
                }}
              >
                LOGIN
              </LoadingButton>
            </Link>
          </div>
        }
      </div>

      {reviews.map((review, index) => (
        <div key={index}>
          {review.review && review.review !== '' ?
            <div className={reviewItems}>
              <div className={reviewItemsInner} style={index == reviewCount - 1 ? {borderBottom: `1px solid #878787`} : {}}>
                <div>
                  <FontAwesomeIcon icon={faCircleCheck} className={reviewer}/>
                  <span className={reviewer}>{review.reviewer}</span>
                  <span className={reviewer}>{moment(review.reviewDate).format("DD-MMM-YYYY")}</span>
                  <span className={reviewRatingContainer}>
                    {review.rating}
                    <FontAwesomeIcon icon={faStar} style={{margin: '2px 0 0 2px', height: '15px'}}/>
                  </span>
                </div>
                <span className={reviewText}>{review.review}</span>
              </div>
            </div>
          : <></> 
          }
        </div>
      ))}
    </div>
  );
};

export default GiftCardReviews;