import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";

import Profile from '../src/components/Profile';
import { AppContext } from '../src/utils/AppContext';

/**
 * Helps render the profile page for the user
 * If the user is not logged in, he/she is redirected to the login page
 * @returns 
 */
const ProfilePage = () => {

  const router = useRouter();
  const { 
    showToastMessage, 
    appData: { isProfileLoading, userProfile},
    updateAppValues 
  } = useContext(AppContext);

  //In-line styling
  const spinnerStyle = {
    alignItems:'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '15%'
  }

  /**
   * On page load, fetching user data and showing in UI
   * Showing notifications in case of error
   */
  useEffect(() => {
    try {
      async function getUserProfileData() {
        const profileResponse = await fetch('/api/user/profile');
        if(profileResponse.status == 200) {
          const { user } = await profileResponse.json();
          updateAppValues({userProfile: user});
        } else {
          const { error } = await profileResponse.json();
          showToastMessage({ message: error, status: 'error'});
          router.replace('login?redirect=profile');
        }
      }
      updateAppValues({isProfileLoading: true});
      getUserProfileData();
      updateAppValues({isProfileLoading: false});
    }
    catch(error) {
      console.log(error);
      updateAppValues({isProfileLoading: false});
      showToastMessage({ message: error, status: 'error'});
    }
  }, []);
  return (
    <Box 
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      {(isProfileLoading || Object.entries(userProfile).length === 0) ?
      <div style={spinnerStyle}>
       <CircularProgress color="success" />
      </div>
      : <Profile />}
    </Box>
  );
};

export default ProfilePage;