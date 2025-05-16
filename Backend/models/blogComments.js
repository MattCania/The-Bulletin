import db from "../database.js";
import { DataTypes, Model } from "sequelize";

class BlogComments extends Model {

	static associate(models){
		
	}
}

BlogComments.init(
  {
	commentId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	blogId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	accountId: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	comment: {
		type: DataTypes.STRING,
		allowNull: true,
	}
  },
  {
    sequelize: db, 
    modelName: "BlogComments",
	createdAt: true,
	updatedAt: true
  }
);

export default BlogComments;
