import { checkSchema } from "express-validator";

export const loginValidation = checkSchema({
   email: {
      normalizeEmail: true,
      isEmail: {
         errorMessage: "Please enter a valid email."
      }
   },
   password: {
      isLength: {
         options: { min: 5 },
         errorMessage: "Please enter a valid password."
      }
   }
});