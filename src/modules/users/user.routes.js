import { Router } from "express";
import userController from "./user.controller.js";

const customerRouter = Router();

customerRouter
  .get("/", userController.getAllCustomers)
  .post("/add", userController.createCustomer)
  .patch("/update/:id", userController.updateCustomer)
  .delete("/delete/:id", userController.deleteCustomer);

export default customerRouter;
