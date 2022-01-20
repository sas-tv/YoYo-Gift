import Head from "next/head";

const SEOHelper = ({ giftCard }) => {
  const title = giftCard?.name || 'YoYo Gift';
  const description = giftCard?.description || 'Shop unlimited giftcards for free!';
  const image = giftCard?.image || 'YoYo Gift';
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="image" content={image} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default SEOHelper;