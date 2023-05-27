"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Posts", [
      {
        text: "My Dogs",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "The Legend of Zelda - Tears Of The Kingdom",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Posts", null, {});
  },
};
