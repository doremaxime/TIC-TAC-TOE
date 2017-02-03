'use strict';

const config = require('../config');
const store = require('../store');

const getIndex = function () {
  console.log('getIndex');
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function (data) {
  console.log('create');
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

// const show = function (id) {
//   console.log('show');
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//   });
// };

const update = function (index, user, gameOver) {
  console.log('update');
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      game: {
        cell: {
          index: index,
          value: user,
        },
        over: gameOver,
      },
    },
  });
};

// const updateGameStatus = function (over) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//     data: {
//         game: {
//           over: over,
//         },
//       },
//   });
// };

module.exports = {
  getIndex,
  create,
  // show,
  update,
  // updateGameStatus,
};
