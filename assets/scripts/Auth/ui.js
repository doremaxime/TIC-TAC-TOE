'use strict';

const events = require('./events');

const success = () => {
  //console.log(data);
  console.log('HIDING THE MODAL');
  $('#myModalLabel').modal('hide'); //trying to get the modal to hide.
  $('.myModalLabel').modal('hide'); //trying to get the modal to hide.
  $('.modal-dialog').modal('hide'); //trying to get the modal to hide.
  $('.modal-content').modal('hide'); //trying to get the modal to hide.
  $('#myModal').modal('hide'); //trying to get the modal to hide.
  $('.modal').modal('hide'); //trying to get the modal to hide.
  $('#modal').modal('hide'); //trying to get the modal to hide.
  $('.modal-fade').modal('hide'); //trying to get the modal to hide.
  $('.fade').modal('hide'); //trying to get the modal to hide.
  $('.btn-lg').modal('hide'); //trying to get the modal to hide.
};

const failure = (error) => {
  console.error(error);
};

const signOutSuccess = (data) => {
  console.log(data);
  $('.total-games').hide(); //trying to make the total games button disappear when signing out
};

module.exports = {
  failure,
  success,
  signOutSuccess,
};
