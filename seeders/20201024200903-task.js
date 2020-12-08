'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'Build an app',
      userId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Build an app',
      userId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }, down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
