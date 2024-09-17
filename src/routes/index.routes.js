import { Router } from "express";
import customerRouter from "../modules/users/user.routes.js";
import productRouter from "../modules/products/product.routes.js";
const routes = Router();

routes.use("/customers", customerRouter);
routes.use("/products", productRouter);

export default routes;
