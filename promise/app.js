var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        //fake call API
        resolve('123')
    });

var promise = Promise.resolve('Error!');

promise 
    .then(function (result) {
        console.log('result: ', result);
    })

    .catch(function(err) {
        console.log('Err: ', err);
    })
   
var promise1 = new Promise(
    function(resolve) {
        setTimeout(function() {
            resolve([2, 3])
        }, 2000);
    }
);

var promise2 = Promise.reject('Toang')

Promise.all([promise1, promise2])
    .then(function([result1, result2]) {
        console.log(result1.concat(result2));
    })

    .catch(function(err) {
        console.log(err);
    });