import { LoadingButton } from '@mui/lab';
import { faEnvelope, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';

import FormField from '../FormField';
import { signUpContainer, signUpContainerBody } from './index.module.css';

/**
 * Renders sign up page for users to sign up themselves
 * @param {boolean} isSubmitting Helps block and load the spinner on the button, on click of Login button
 * @returns Signup JSX code with CSS
 */
const SignUp = ({isSubmitting}) => {
  return (
    <div className={signUpContainer}>
      <h1>Sign Up</h1>
      <div className={signUpContainerBody}>
        <FormField 
          name="firstName"
          label="First Name"
          type="text"
          icon={faUser}
        />

        <FormField 
          name="lastName"
          label="Last Name"
          type="text"
          icon={faUser}
        />
        
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
          Sign Up
        </LoadingButton>
      </div>
    </div>
  );
};

export default SignUp;