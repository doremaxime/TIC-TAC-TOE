'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const createSuccess = (data) => {
  console.log('ui onCreateGame checkpoint');
  console.log(data);
};

module.exports = {
  success,
  failure,
  createSuccess,
};
