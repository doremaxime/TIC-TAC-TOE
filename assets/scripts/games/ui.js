'use strict';

const onGetSuccess = function (data) {
  if (data.game) {
    console.log(data.game.cells);
    $('#show-total-games').text('You have played ' + gameStore.games.length + ' games.');
  }
};

const onIndexSuccess = function (data) {
    console.log(data.games);
    $('#show-total-games').text('You have played ' + gameStore.games.length + ' games.');
};


const onError = function (response) {
  console.error(response);
};

const onCreateSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function (data) {
  console.log(data.game.cells);
  console.log(data.game.cell);
  console.log(data.game);
};

const onSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.log(data.games);
  }
};

module.exports = {
  onGetSuccess,
  onIndexSuccess,
  onError,
  onCreateSuccess,
  onPatchSuccess,
  onSuccess,
};
