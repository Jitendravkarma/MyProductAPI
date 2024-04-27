import express from 'express';
import { status, product } from '../Controllers/Controller.js';
const Router = express.Router();
Router.route("/status").get(status);
Router.route("/product").get(product);
// Router.route("/register").post(register);
// Router.route("/login").post(login);

export default Router;