require('es6-promise');

var promise = Promise.reject("YOU DURN FAILED!");
promise.catch(console.error);