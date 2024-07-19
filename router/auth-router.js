const express = require("express");
const route = express.Router();
const controllers = require("../controllers/auth-controller");
const authMiddleware = require("../middleware/auth-middleware");
// const signupSchema = require("../ validators/auth-validator");
// const validate = require("../middleware/validate-middleware");

route.post("/register", controllers.register);
route.post("/login", controllers.login);
route.get("/getmenu", controllers.menudata);
route.get("/user", authMiddleware, controllers.user);
route.get("/adlogin", controllers.adlogin);
module.exports = route;
