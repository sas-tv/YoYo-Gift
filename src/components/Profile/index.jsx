import { faIdCard, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { AppContext } from '../../utils/AppContext';
import OrderDetails from './OrderDetails';

import { profileContainer, profileDetail } from './index.module.css';
/**
 * This page renders the Profile page, it shows user's profile data and order history
 * @returns 
 */
const Profile = () => {
  const { 
    appData: { userProfile }
  } = useContext(AppContext);
  
  const { firstName, lastName, email, orders } = userProfile;
  
  return (
    <div className={profileContainer}>
      <h1>
        <FontAwesomeIcon icon={faIdCard} />
        User Profile
      </h1>

      <div className={profileDetail}>
        <h4>
          <FontAwesomeIcon icon={faUser} />
          {firstName} {lastName}
        </h4>

        <h4>
          <FontAwesomeIcon icon={faEnvelope} />
          {email}
        </h4>
      </div>

      <OrderDetails orders={orders} />
    </div>
  )
};

export default Profile;