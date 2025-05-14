import db from "../database.js";
import { DataTypes, Model } from "sequelize";

class UserProfiles extends Model {

	static associate(models){
		
	}
}

UserProfiles.init(
  {
	profileId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	accountId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	middleName: {
		type: DataTypes.STRING,
		allowNull: true
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	birthday: {
		type: DataTypes.STRING,
		allowNull: false
	},
	age: {
		type: DataTypes.STRING,
		allowNull: false
	},
  },
  {
    sequelize: db, 
    modelName: "UserProfiles",
	createdAt: true,
	updatedAt: true
  }
);

export default UserProfiles;
