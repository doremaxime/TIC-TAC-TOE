'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data.user) {
    console.log(data.user);
  } else {
    console.table(data.users);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('User was successfully signed out.');
};

const onPatchSuccess = function () {
  console.log('User was successfully edited.');
};

const onPostSuccess = function () {
  console.log('User was successfully added.');
};

const showGamesSuccess = (data) => {
  $('#signInModal').modal('hide');
  $('.show-game-info').show();
  $('.show-game-info').text(data);
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess,
  showGamesSuccess,
};
