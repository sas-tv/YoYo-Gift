import * as Yup from 'yup';

export const loginValidator = Yup.object().shape({
  email: Yup.string().email('Invalid Email!').required(`Email can't be empty!`),
  password: Yup.string().required(`Password can't be empty!`)
});

export const signUpValidator = Yup.object().shape({
  email: Yup.string().email('Invalid Email!').required(`Email can't be empty!`),
  password: Yup.string().required(`Password can't be empty!`),
  firstName: Yup.string().required(`First Name can't be empty!`),
  lastName: Yup.string().required(`Last Name can'be empty!`)
});