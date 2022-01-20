import { useEffect, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

import { AppContext } from "../AppContext";

/**
 * Re-usable helper component to show notifications for the applications
 * @returns 
 */
const ToastMessage = () => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const { 
    toastMessage: { message, status}, 
    showToastMessage } = useContext(AppContext);

  /**
   * Opens the toast message component if there's a message
   */
  useEffect(() => {
    if(message)
      setOpenSnackBar(true);
  },[message]);

  /**
   * Closes the toast message component automatically after 5secs
   */
  const handleToastMessageClose = () => {
    setOpenSnackBar(false);
    showToastMessage({message: '', status: ''});
  }

  return (
      <Snackbar 
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={handleToastMessageClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert
          onClose={handleToastMessageClose}
          severity={status}
          sx={{ width:'100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
  );
};

export default ToastMessage;