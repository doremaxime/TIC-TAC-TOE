'use strict';

// TODO: Hide modal when successful signing in, sign out, and the password was corretcly changed.
// TODO: Show total-games when signing in. hide it when signing out.
// TODO: make .restart create a new game.

const success = (response) => {
  //console.log(data);
  //   store.user = response.user;
  //   console.log('HIDING THE MODAL 2');
  //   return store.user;
  // })
  console.log(response);
  console.log('HIDING THE MODAL sign in ui success');
  // $('#myModalLabel').modal('hide'); //trying to get the modal to hide.
  // $('.myModalLabel').modal('hide'); //trying to get the modal to hide.
  // $('.modal-dialog').modal('hide'); //trying to get the modal to hide.
  // $('.modal-content').modal('hide'); //trying to get the modal to hide.
  $('#myModal').modal('hide'); //trying to get the modal to hide.
  // $('.modal').modal('hide'); //trying to get the modal to hide.
  // $('#modal').modal('hide'); //trying to get the modal to hide.
  // $('.modal-fade').modal('hide'); //trying to get the modal to hide.
  // $('.fade').modal('hide'); //trying to get the modal to hide.
  // $('.btn-lg').modal('hide'); //trying to get the modal to hide.
};

const failure = (error) => {
  console.log('HITING THE MODAL ui failure');

  console.error(error);
};

const signOutSuccess = (data) => {
  console.log(data);
  // $('.total-games').hide(); //trying to make the total games button disappear when signing out
  console.log('HIDING THE MODAL ui sign out success');

};

module.exports = {
  failure,
  success,
  signOutSuccess,
};
