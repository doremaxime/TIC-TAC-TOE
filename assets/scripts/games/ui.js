'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('User was successfully signed out.');
};

const onPatchSuccess = function (data) {
  console.log(data.game);
};

const onGetSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
    $('#show-game-info').text(data.game);
    $('.show-game-info').show();
  }
};

const onPostSuccess = function (data) {
  console.log(data);
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess,
  onGetSuccess,
};
