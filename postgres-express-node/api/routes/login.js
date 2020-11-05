const express = require("express");
const router = express.Router();

const LoginSchemas = require("./login.schemas");
const SchemaValidator = require("../middleware/validate");
const LoginController = require("../controllers/login.controller");

SchemaValidator.addSchemas(LoginSchemas);

module.exports = (rootRouter) => {
  rootRouter.use("/", router);

  router.get("/users", LoginController.login);

  
  router.post(
    "/user",
    SchemaValidator.validate("login"),
    LoginController.login
  );
};