'use strict';

const config = require('../config');
const store = require('../store');

const getIndex = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

// updates server every time a token is placed by user
const update = function (id, index, user, checkWinner) {
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
