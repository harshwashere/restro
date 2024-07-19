const { z } = require("zod");

const signupSchema = new z.Schema({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(10, { message: "Email must be at least 3 charachters" })
    .max(255, { message: "Email must not be more than 255 charachters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(10, { message: "Email must be at least 3 charachters" })
    .max(255, { message: "Email must not be more than 255 charachters" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 charachters" })
    .max(10, { message: "Phone must not be more than 10 charachters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least 6 charachters" })
    .max(1024, { message: "Password can't be greater than 1024 charachters" }),
});

module.exports = signupSchema;
