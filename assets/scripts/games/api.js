'use strict';

const config = require('../config');
const store = require('../store');

const getIndex = function () {
  console.log('api getIndex checkpoint');
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function (data) {
  console.log('api create checkpoint');
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const update = function (id, index, user, checkWinner) {
  console.log('api update checkpoint');
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
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
        over: checkWinner,
      },
    },
  });
};

module.exports = {
  getIndex,
  create,
  update,
};
