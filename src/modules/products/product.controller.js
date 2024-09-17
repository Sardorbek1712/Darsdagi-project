import { Product } from "./product.model.js";


class ProductController {
    #productModel;
    constructor() {
        this.#productModel = Product;
    }

    createProduct = async (req, res) => {
        try {
            const { image, price, title, count } = req.body; 
            const newProduct = await this.#productModel.create({ image, price, title, count });
            res.status(201).send({
                message: "Product created",
                data: newProduct
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating product",
                error: error.message
            });
        }
    };

    getAllProducts = async (req, res) => {
        try {
            const products = await this.#productModel.findAll();
            res.status(200).send({
                data: products
            });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching products",
                error: error.message
            });
        }
    };

    getOneProduct = async (req, res) => {
        try {
            const product = await this.#productModel.findById(req.params.id);
            if (!product) {
                return res.status(404).send({ message: "Product not found" });
            }
            res.status(200).send({ data: product });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching product",
                error: error.message
            });
        }
    };

    updateProduct = async (req, res) => {
        try {
            const { image, price, title, count } = req.body; 
            const updatedProduct = await this.#productModel.update(req.body,{where: {id: req.params.id}});
            if (!updatedProduct) {
                return res.status(404).send({ message: "Product not found" });
            }
            res.status(200).send({
                message: "Product updated",
                data: updatedProduct
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating product",
                error: error.message
            });
        }
    };

    deleteProduct = async (req, res) => {
        try {
            const deletedProduct = await this.#productModel.destroy({ where: { id: req.params.id } });
            if (!deletedProduct) {
                return res.status(404).send({ message: "Product not found" });
            }
            res.status(200).send({
                message: "Product deleted",
                data: deletedProduct
            });
        } catch (error) {
            res.status(500).send({
                message: "Error deleting product",
                error: error.message
            });
        }
    };
}

export default new ProductController();
