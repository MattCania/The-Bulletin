import db from "../database.js";
import { DataTypes, Model } from "sequelize";

class BlogPosts extends Model {

	static associate(models){
		
	}
}

BlogPosts.init(
  {
	blogId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	accountId: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	blogTitle: {
		type: DataTypes.STRING,
		allowNull: false
	},
	blogContent: {
		type: DataTypes.STRING,
		allowNull: true
	},
	blogImage: {
		type: DataTypes.BLOB,
		allowNull: true
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	likes: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
  },
  {
    sequelize: db, 
    modelName: "BlogPosts",
	createdAt: true,
	updatedAt: true
  }
);

export default BlogPosts;
