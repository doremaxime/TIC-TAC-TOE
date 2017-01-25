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
  console.log('User was successfully deleted.');
};

const onPatchSuccess = function () {
  console.log('User was successfully edited.');
};

const onPostSuccess = function () {
  console.log('User was successfully added.');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess,
};
