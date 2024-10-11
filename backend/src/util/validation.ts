import { checkSchema } from 'express-validator';

export const loginValidation = checkSchema({
   email: {
      normalizeEmail: true,
      isEmail: {
         errorMessage: 'Please enter a valid email.'
      }
   },
   password: {
      isLength: {
         options: { min: 5 },
         errorMessage: 'Please enter a valid password.'
      }
   },
});

export const signupValidation = checkSchema({
   email: {
      normalizeEmail: true,
      isEmail: {
         errorMessage: 'Please enter a valid email.'
      }
   },
   password: {
      isLength: {
         options: { min: 5 },
         errorMessage: 'Please enter a valid password.'
      }
   },
   confirmPassword: {
      custom: {
         options: (value, { req }) => {
            if (value !== req.body.password) {
               throw new Error('Passwords do not match.');
            }
            return true;
         }
      }
   },
   age: {
      isInt: {
         errorMessage: 'Please enter a positive integer.',
      },
      custom: {
         options: (value) => {
            if (value < 13) {
               throw new Error('You must be at least 13 to create an account.');
            }
            if (value > 100 || value < 1) {
               throw new Error('Please enter a correct age.');
            }
            return true;
         }
      }
   }
});