import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";
export const Product = sequelize.define("Product", {
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

