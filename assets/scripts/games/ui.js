'use strict';

const onGetSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
    $('#show-game-info').text(data.game.cells);
  }
};

const onIndexSuccess = function (data) {
  if (data.games) {
    console.log(data.games);
    for (let i = 0; i < data.games.length; i++) {
      $('#show-game-info').text(data.games);
    }
  }
};


const onError = function (response) {
  console.error(response);
};

const onPostSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function (data) {
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
  onPostSuccess,
  onPatchSuccess,
  onSuccess,
};
