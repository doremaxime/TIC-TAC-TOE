'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const showGamesSuccess = (data) => {
  $('#signInModal').modal('hide');
  $('.show-game-info').show();
  $('.show-game-info').text(data);
};

module.exports = {
  failure,
  success,
  showGamesSuccess,
};
