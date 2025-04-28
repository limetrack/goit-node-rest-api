import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

export const User = sequelize.define(
  "User",
  {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    avatarURL: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    subscription: {
      type: DataTypes.ENUM,
      values: ["starter", "pro", "business"],
      defaultValue: "starter",
    },
    token: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);
