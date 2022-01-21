import Head from "next/head";

const SEOHelper = ({ giftCard }) => {
  const title = giftCard?.name || 'YoYo Gift';
  const description = giftCard?.description || 'Shop unlimited giftcards for free!';
  const image = giftCard?.image || 'assets/yoyogifts.png';
  
  const imageURL = `${process.env.APP_URL}${image}`
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="image" content={imageURL} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageURL} />
    </Head>
  );
};

export default SEOHelper;