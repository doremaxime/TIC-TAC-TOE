'use strict';

const config = require('../config.js');
const store = require('../store.js');
const game = require('../example');


const index = function () {
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

const show = function (id) {
  return $.ajax({
  url: config.apiOrigin + '/games/' + id,
  method: 'GET',
  headers: {
    Authorization: `Token token=${store.user.token}`,
    },
  });
};

const destroy = function(id){
  return $.ajax({
  url: config.apiOrigin + '/games/' + id,
  method: 'DELETE',
  headers: {
    Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (id, gameIndex, user, isGameOver) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      game: {
        cell: {
          index: gameIndex,
          value: user,
        },
        over: isGameOver,
      },
    },
  });
};



module.exports = {
  index,
  show,
  destroy,
  update,
  create,
};
