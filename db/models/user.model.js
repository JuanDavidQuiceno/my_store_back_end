const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';
const UserSchema = {
  id: {
    allowNull: true,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate() {
    //model

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelNAme: 'User',
      timestamps: false
    }
  }
}

module.exports = { USER_TABLE, UserSchema, User };
