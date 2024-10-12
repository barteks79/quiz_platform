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
   name: {
      trim: true,
      isLength: {
         options: { min: 3 },
         errorMessage: 'Please enter a longer username.'
      }
   },
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

export const createQuizValidation = checkSchema({
   title: {
      trim: true,
      isLength: {
         options: { min: 5 },
         errorMessage: 'Quiz title must be at least 5 characters long.',
      }
   },
   questions: {
      isArray: {
         options: { min: 3 },
         errorMessage: 'Quiz must consist of at least 3 questions.'
      }
   },
   'questions.*.content': {
      isString: {
         errorMessage: 'Question must be a string.'
      },
      isLength: {
         options: { min: 5, max: 60 },
         errorMessage: 'Question must be from 5 to 60 characters long.'
      }
   },
   'questions.*.answers': {
      custom: {
         options: (value) => {
            if (!Array.isArray(value)) {
               throw new Error('Answers must be an array.');
            }
            if (value.length < 2) {
               throw new Error('Questions must consist of at least 2 answers.');
            }
            if (value.length > 6) {
               throw new Error('Questions can\'t have more than 6 answers.');
            }
            return true;
         }
      }
   },
   'questions.*.answers.*.content': {
      exists: {
         errorMessage: 'Answer content is required.',
      },
   },
   'questions.*.answers.*.isCorrect': {
      exists: {
         errorMessage: 'Answer isCorrect is required.',
      },
      isBoolean: {
         errorMessage: 'Answer isCorrect must be true or false.'
      }
   },
   'questions.*.points': {
      exists: {
         errorMessage: 'Points are required.',
      },
      isInt: {
         options: { min: 1, max: 10 },
         errorMessage: 'Points must be a positive integer between 1 and 10.'
      }
   },
   'questions.*.isMultipleChoice': {
      exists: {
         errorMessage: 'Question isMultipleChoice is required.',
      },
      isBoolean: {
         errorMessage: 'Question isMultipleChoice must be true or false.'
      }
   },
   ageCategory: {
      isInt: {
         errorMessage: 'Age category must be a positive integer.'
      },
      custom: {
         options: (value) => {
            if (value !== 13 && value !== 16 && value !== 18) {
               throw new Error('Entered age category is not correct.');
            }
            return true;
         }
      }
   }
});