"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "John Doe",
          password:
            "$2b$12$ul7bvWpB9uVTFidMpyoxw.5bSXRgYt7VdoUQg/x.FsvnIMXFxUkEG", // AdminPass123 hashed
          firstname: "John",
          lastname: "Doe",
          email: "john.doe@gmail.com",
          role: "admin",
          active: true,
        },
        {
          username: "JPatrick",
          password: "$2a$10$examplehashedpassword", // hashed password
          firstname: "Jean",
          lastname: "Patrick",
          email: "jean.patrick@gmail.com",
          role: "manager",
          active: true,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};