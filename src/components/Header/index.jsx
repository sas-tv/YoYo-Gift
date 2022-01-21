import { useSession, signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faShoppingCart, faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import HeaderField from '../HeaderField';
import { AppContext } from '../../utils/AppContext';
import CategoryFilter from '../GiftCardsFilter/CategoryFilter';
import SearchFilter from '../GiftCardsFilter/SearchFilter';

import { header, headerButtonsRow, headerButtons, logOutButton, iconContainer } from './index.module.css';

/**
 * This page shows the header of the application and changes itself based on the user's login and logout
 * @returns Renders a Header page
 */
const Header = () => {
  const { data: session } = useSession();
  const {
    showToastMessage,
    updateAppValues
  } = useContext(AppContext);
  const router = useRouter();

  const isAppInHomePage = router.pathname === '/'; 

  useEffect(() => {
    async function onHeaderLoad() {
      if(session) {
        const cartResponse = await fetch('/api/user/cart');
        const { data, error } = await cartResponse.json();
        if(!data && error) {
          console.log(error);
        } else {
          if(!data) updateAppValues({ cartItems: [], cartItemsCount: 0 });
          else updateAppValues({ cartItems: data, cartItemsCount: data.length });
        }
      }
    }
    onHeaderLoad();
  }, [session]);

  /**
   * Log outs the user from the application, 
   * Redirects the appliation to the homepage
   * And shows a toast message accordingly
   */
  const handleLogOut = async () => {
    const logoutResponse = await signOut({
      redirect: false
    });
    showToastMessage({ message: 'Logout sucessful!', status: 'success'});
    updateAppValues({userProfile: {}, cartItemsCount: 0, cartItems:[]});
    router.replace('/');
  };

  const orHeaderStyle = {
    marginLeft: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  };
  return (
    
    <div className={header}>
      <div className={headerButtonsRow}>
        <Link href='/' passHref={true}>
          <Image alt="YOYO GIFT" src="/assets/yoyogifts.png" height={70} width={150} />
        </Link>
        {isAppInHomePage && <>
          <SearchFilter />
          <h3 style={orHeaderStyle}>OR</h3>
          <CategoryFilter />
        </>}
      </div>

      <div className={headerButtonsRow}>
        <HeaderField redirectValue='/' headerType='h3' headerValue='Home' icon={faHouse} />

        {session && <HeaderField redirectValue='/profile' headerType='h3' headerValue='Profile' icon={faUser}/>}

        {session && 
          <HeaderField 
            redirectValue='/cart' 
            headerType='h3' 
            headerValue='Cart' 
            icon={faShoppingCart}
            showBadge={true}
          />}
        
        {session ?
          <div className={headerButtons}>
            <button 
              onClick={handleLogOut}
              className={logOutButton}
            >
              <FontAwesomeIcon icon={faRightFromBracket} className={iconContainer} />
              <b>Log Out</b>
            </button>
          </div>
        : <HeaderField redirectValue='/login' headerType='h3' headerValue='Login' icon={faRightToBracket}/>
        }
      </div>
    </div>
    );
};

export default Header;