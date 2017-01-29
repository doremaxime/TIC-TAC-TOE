'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const showGamesSuccess = (data) => {
  $('.showInfo').show();
  $('.showInfo').text(data.games.length);
};

module.exports = {
  failure,
  success,
  showGamesSuccess,
};
