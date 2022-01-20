import { LoadingButton } from '@mui/lab';
import Link from 'next/link';
import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons';

import FormField from '../FormField';
import { loginContainer, loginContainerBody, signUp } from './index.module.css';

/**
 * This page renders the login page of the application
 * @param {*} isSubmitting Helps block and load the spinner on the button, on click of Login button
 * @returns 
 */
const Login = ({isSubmitting}) => {
  const signUpMessage = `Don't have an account? `;
  return (
    <div className={loginContainer}>      
      <h1>Login</h1>

      {/* <div className={loginContainerBody}>Google Authentication here</div> */}
      
      <div className={loginContainerBody}>
        <FormField 
          name="email"
          label="Email"
          type="text"
          icon={faEnvelope}
        />

        <FormField 
          name="password"
          label="Password"
          type="password"
          icon={faUnlock}
        />
        
        <LoadingButton 
          type="submit"
          loading={isSubmitting}
          variant="contained"
          color="success"
        >
          Log In
        </LoadingButton>
      </div>

      <p><b>{signUpMessage}</b>
      <Link 
        href='/signup'
        passHref={true}
      >
        <b className={signUp}>Sign Up</b>
      </Link>
      </p>
    </div>
  );
}

export default Login;