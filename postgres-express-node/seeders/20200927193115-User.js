module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "john",
          password: "$2a$12$f1ok0/kir7fzIjxtnxYbCumgma0grzS0gWE6o0aeZRz.9.siVqBsG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "alice",
          password: "super secret",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "mirta",
          password: "my password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "jack",
          password: "0000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
