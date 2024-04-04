//   !!! QUERY TOOL  --- INSERT TO table_name (listed attributes) VALUES (values for each attributes) !!!!  
//Example: 
          //INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
          //VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

//MY NOTE: Sequelize is basically setting an new row that will be added to the DB using async promise (obj), 
//the "queryInterface" parameter here is essentially acting like the query interface of our DB

'use strict';

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('books', [
      {
        name: 'The Little Prince',
        author: 'Antoine de Saint-Exupéry',
        year_published: 1943,
        description: 'wise and enchanting fable that, in teaching the secret of what is really important in life, has changed forever the world for its readers.'
      },
      {
        name: 'Brave New World',
        author: 'Aldous Huxley',
        year_published: 1932,
        description: 'The novel examines a futuristic society, called the World State, that revolves around science and efficiency.'
      },
      {
        name: 'The Jungle',
        author: 'Upton Sinclair',
        year_published: 1905,
        description: 'a turn-of-the-century tale that the spotlighted revolting details about the meat Americans were eating'
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