require('es6-promise');
var promise = new Promise(function (fulfill, reject) {
    fulfill("PROMISE VALUE");
});

function onRejected(error) {
    console.log(error.message);
}

promise.then(console.log, onRejected);
console.log("MAIN PROGRAM");