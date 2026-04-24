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
            "$2b$12$ul7bvWpB9uVTFidMpyoxw.5bSXRgYt7VdoUQg/x.FsvnIMXFxUkEG", // hashed password
          firstname: "John",
          lastname: "Doe",
          email: "john.doe@gmail.com",
          role: "ADMINISTRATEUR",
          active: true,
        },
        {
          username: "JJaures",
          password: "$2a$10$examplehashedpassword", // hashed password
          firstname: "Jean",
          lastname: "Jaures",
          email: "jean.jaures@gmail.com",
          role: "GESTIONNAIRE_PORTEFEUILLE",
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
