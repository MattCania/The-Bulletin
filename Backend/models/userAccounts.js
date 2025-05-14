import db from "../database.js";
import { DataTypes, INTEGER, Model } from "sequelize";

class UserAccounts extends Model {

	static associate(models){

	}
}

UserAccounts.init(
  {
	accountId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		isEmail: true,
		allowNull: false
	},
	hashedPassword: {
		type: DataTypes.STRING,
		allowNull: false
	}
  },
  {
    sequelize: db, 
    modelName: "UserAccounts",
	createdAt: true,
	updatedAt: true
  }
);

export default UserAccounts;
