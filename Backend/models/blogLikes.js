import db from "../database.js";
import { DataTypes, Model } from "sequelize";

class BlogLikes extends Model {

	static associate(models){
		this.belongsTo(models.BlogPosts, {foreignKey: "blogId"})
	}
}

BlogLikes.init(
  {
	blogId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		allowNull: false,
	},
	accountId: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
  },
  {
    sequelize: db, 
    modelName: "BlogLikes",
	createdAt: true,
	updatedAt: true
  }
);

export default BlogLikes;
