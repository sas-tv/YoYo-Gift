import Image from "next/image";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

import { giftCardContainer } from './index.module.css';

/**
 * This page is used to render a single gift card
 * @param {*} giftCard has image and name properties 
 * @returns 
 */
const GiftCard = ({ 
  giftCard: {
    image,
    name
  }
}) => {
  const router = useRouter();
  /**
   * This function converts the gift card name to a slug 
   * And redirects the application to the individual gift card page
   */
  const handleOnCardClick = () => {
    const nameToSlug = name
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
    router.push(`./${nameToSlug}`);
  }
  return (
    <Grid className={giftCardContainer} onClick={handleOnCardClick}>
      <Image 
        src={image} 
        alt={name} 
        height={200} 
        width={200}
      />
      <b>{name}</b>
    </Grid>
  );
};

export default GiftCard;