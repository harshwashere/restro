const express = require("express");
const route = express.Router();
const contactForm = require("../controllers/contact-contoller");

route.post("/contact", contactForm);

module.exports = route;
