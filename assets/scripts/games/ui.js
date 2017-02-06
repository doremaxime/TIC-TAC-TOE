'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const createSuccess = (response) => {
  console.log('ui onCreateGame checkpoint');
  console.log(response);
};

module.exports = {
  success,
  failure,
  createSuccess,
};
