import { SessionProvider } from 'next-auth/react';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Header from '../src/components/Header';
import { AppContextProvider } from '../src/utils/AppContext';
import ToastMessage from '../src/utils/ToastMessage';
import SEOHelper from '../src/utils/SEOHelper';

import '../styles/globals.css'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps} 
}) {
  return (
  <AppContextProvider>
    <SessionProvider session={session}>
      <SEOHelper giftCard={pageProps.giftCard} />
      <Header />
      <ToastMessage />
      <Component {...pageProps} />
    </SessionProvider>
  </AppContextProvider>
  );
}

export default MyApp
