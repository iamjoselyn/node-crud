'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'books',
      'authorId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'authors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      } 
    );

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    // removeColumn ()

    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
