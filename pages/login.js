import { Formik, Form } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import Login from '../src/components/Login';
import { loginValidator } from '../src/utils/validator';
import { AppContext } from '../src/utils/AppContext';

/**
 * Helps to render the login page
 * Redirects to last visited page, on successful login
 * @returns 
 */
const LoginPage = () => {
  const router = useRouter();
  const { redirect } = router.query;
  
  const { showToastMessage } = useContext(AppContext);
  /**
   * Handles submit operation for Login page
   * @param {object} values - The email and password of the user
   * @param {object} setSubmitting - Exposed by Formik, to enable the login button
   */
  const handleSubmit = async (values, {setSubmitting}) => {
    const reqBody = {...values};

    const loginResponse = await signIn('credentials', {
      redirect: false,
      email: reqBody.email,
      password: reqBody.password
    });

    const { error } = loginResponse;

    if(!error) {
      showToastMessage({ message: 'Login successful!', status: 'success'});
      router.replace(`/${redirect || ''}`);
    } else {
      showToastMessage({ message: error, status: 'error'});
    }
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{ email: '', password: ''}}
      onSubmit={handleSubmit}
      validationSchema={loginValidator}
    >
      {({ isSubmitting }) => (
        <Form>
          <Login isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;