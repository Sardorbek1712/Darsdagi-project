import { Router } from "express";
import productController from "./product.controller.js";


const productRouter = Router();

productRouter
  .get("/", productController.getAllProducts)
  .post("/add", productController.createProduct)
  .patch("/update/:id", productController.updateProduct)
  .delete("/delete/:id", productController.deleteProduct);

export default productRouter;
