import { where } from "sequelize";
import User from "./user.model.js";

class CustomerController {
    #userModel;
    constructor() {
        this.#userModel = User;
    }

    createCustomer = async (req, res) => {
        try {
            console.log(req.body)
            const newCustomer = await this.#userModel.create(req.body);

            res.status(201).send({
                message: "Created",
                data: newCustomer
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating customer",
                error: error.message
            });
        }
    };

    getAllCustomers = async (req, res) => {
        try {
            const customers = await this.#userModel.findAll();
            res.status(200).send({
                data: customers
            });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching customers",
                error: error.message
            });
        }
    };

    getOneCustomer = async (req, res) => {
        try {
            const customer = await this.#userModel.findById(req.params.id);
            if (!customer) {
                return res.status(404).send({ message: "Customer not found" });
            }
            res.status(200).send({ data: customer });
        } catch (error) {
            res.status(500).send({
                message: "Error fetching customer",
                error: error.message
            });
        }
    };

    updateCustomer = async (req, res) => {
        try {
            const updatedCustomer = await this.#userModel.update(req.body,{where: {id:req.params.id}});
            if (!updatedCustomer) {
                return res.status(404).send({ message: "Customer not found" });
            }
            res.status(200).send({
                message: "Customer updated",
                data: updatedCustomer
            });
        } catch (error) {
            res.status(500).send({
                message: "Error updating customer",
                error: error.message
            });
        }
    };
    

    deleteCustomer = async (req, res) => {
        try {
            const deletedCustomer = await this.#userModel.findOne({ where: { id: req.params.id } });
    
            if (!deletedCustomer) {
                return res.status(404).send({ message: "Customer not found" });
            }
    
            await deletedCustomer.destroy();
    
            res.status(200).send({
                message: "Customer deleted",
                data: deletedCustomer
            });
        } catch (error) {
            res.status(500).send({
                message: "Error deleting customer",
                error: error.message
            });
        }
    };
    
}

export default new CustomerController();
