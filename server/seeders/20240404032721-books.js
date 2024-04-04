'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('books', [
      {
        name: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        year_published: 1943
      },
      {
        name: 'Brave New World',
        author: 'Aldous Huxley',
        year_published: 1932
      },
      {
        name: 'The Jungle',
        author: 'Upton Sinclair',
        year_published: 1905
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};

//dummy commands for async up promise given by sequelize 
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    //dummy commands for async down promise given by sequelize 
        /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */