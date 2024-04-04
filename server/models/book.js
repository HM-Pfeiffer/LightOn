//        !!! DEFINING SCHEMAS !!!
//MY NOTE: rules by which new attributes need to abide by


'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({ //some changes to sequelizes default - update values to objects (add key type to each object)
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, //added to make id primary key
      autoIncrement: true //added to increment id per new record (see notes for more details)
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_published: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Book',
    tableName: 'books', //this is the table or entity name
    timestamps: false //don't get extra columns on table once migrated 
  });
  return Book;
};