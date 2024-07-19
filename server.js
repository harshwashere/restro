require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
// const reserveRoute = require("./router/reserve-router")
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
// const errorMiddleware = require("./middleware/error-middlware");
connectDb();

const corsOptions = {
  origin: "https://gardengrillrestaurant.netlify.app",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
};

app.use(cors(corsOptions));

// app.use(errorMiddleware)

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
// app.use("/api/reserveForm", reserveRoute)
app.use("/api/admin", adminRoute);

// app.use(errorMiddleware);

app.listen(PORT, (req, res) => {
  console.log(`Connected at ${PORT}`);
});
