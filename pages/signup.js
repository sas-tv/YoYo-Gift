import { Formik, Form } from "formik";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/router";
import { useContext } from 'react';

import { signUpValidator } from '../src/utils/validator';
import SignUp from '../src/components/Signup';
import { AppContext } from '../src/utils/AppContext';

/**
 * Helps render the signup page
 * On successful signup, the user is logged in automatically and redirected to Homepage
 * @returns 
 */
const SignUpPage = () => {
  const router = useRouter();
  const { redirect } = router.query;

  const { showToastMessage } = useContext(AppContext);
  /**
   * Handles submit operation for Signup page, creates a user first and logs in him/her
   * @param {object} values - The first name, last name, email and password of the user
   * @param {object} setSubmitting - Exposed by Formik, to enable the login button
   */
  const handleSubmit = async (values, {setSubmitting}) => {
    const reqBody = {...values};

    try {
      const signupResponse = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(reqBody)
      });

      if(signupResponse.status === 200) {
        const { message } = await signupResponse.json();
        showToastMessage({ message: message, status: 'success'});

        const loginResponse = await signIn('credentials', {
          redirect: false,
          email: reqBody.email,
          password: reqBody.password
        });

        if(loginResponse.status === 200) {
          showToastMessage({ message: `Login successful!`, status: 'success'});
          router.replace(`/${redirect || ''}`);
        } else {
          showToastMessage({ message: `Something went wrong!`, status: 'error'});
        }

      } else {
        const { error } = await signupResponse.json();
        showToastMessage({ message: error, status: 'error'})
      }

    } catch(error) {
      console.log(error);
    }    
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{firstName: "", lastName:"", email:"", password:""}}
      validationSchema={signUpValidator}
      onSubmit={handleSubmit}
    >
      {({isSubmitting}) => (
        <Form>
          <SignUp isSubmitting={isSubmitting} />
        </Form>       
      )}
    </Formik>
  );
};

export default SignUpPage;