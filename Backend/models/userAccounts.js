import db from "../database.js";
import { DataTypes, Model } from "sequelize";

class UserAccounts extends Model {
  static associate(models) {
    UserAccounts.hasOne(models.UserProfiles, { foreignKey: "accountId" });
    UserAccounts.hasMany(models.BlogPosts, { foreignKey: "accountId" });
    UserAccounts.hasMany(models.BlogLikes, { foreignKey: "accountId" });
    UserAccounts.hasMany(models.BlogComments, { foreignKey: "accountId" });
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
      allowNull: false,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "UserAccounts",
    createdAt: true,
    updatedAt: true,
  }
);

export default UserAccounts;
