'use strict';

const success = (data) => {
  console.log(data);
  console.log('success');
};

const failure = (error) => {
  console.error(error);
  console.log('error');

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
