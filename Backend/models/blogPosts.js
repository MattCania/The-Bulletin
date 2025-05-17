import db from "../database.js";
import { DataTypes, Model } from "sequelize";

class BlogPosts extends Model {

	static associate(models){
		this.belongsTo(models.UserAccounts, {foreignKey: "accountId"})
		this.hasMany(models.BlogLikes, {foreignKey: "blogId"})
		this.hasMany(models.BlogComments, {foreignKey: "blogId"})
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
  },
  {
    sequelize: db, 
    modelName: "BlogPosts",
	createdAt: true,
	updatedAt: true
  }
);

export default BlogPosts;
