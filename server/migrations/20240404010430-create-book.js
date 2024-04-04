'use strict';
// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,      //note the following is autcreated from sequelizer - the ID
      //   primaryKey: true,                // but we are going to use the book_id as primary id so no need for it 
      //   type: Sequelize.INTEGER                //we can move the above values to book_id
      // },
      book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year_published: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      // createdAt: {
      //   allowNull: false,          //don't need these since we turned off timestamps: false
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};