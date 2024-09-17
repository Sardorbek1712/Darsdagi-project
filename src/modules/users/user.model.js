import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config.js";


const User = sequelize.define("Users", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});


export default User;
