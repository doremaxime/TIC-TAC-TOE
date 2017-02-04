'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const createSuccess = (data) => {
  console.log(data);
  console.log('success');
};

module.exports = {
  success,
  failure,
  createSuccess,
};
