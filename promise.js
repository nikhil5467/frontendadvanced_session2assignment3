/* =================================================== */
/**
 * Promises, provide a mechanism to handle the results and errors from asynchronous operations.
 * A Promise represents an operation that hasn't completed yet, but is expected in the future.
 */
/* =================================================== */

/**
 * [timeout description]
 * @param  {Number} duration [description]
 * @return {[type]}          [description]
 */
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})

/** ======================================================= */


var foo = new Promise(function (resolve, reject) {
  //Check if the current timestamp is an even number and resolve
  if (Date.now() % 2 === 0) {
    //Pass a status code of 200 to the success callback function
    resolve(200);
  } else {
    //Pass a status code of 404 to the failure callback function
    reject(404);
  }
});