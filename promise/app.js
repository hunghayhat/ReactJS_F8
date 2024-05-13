var promise = new Promise(
    // Executor
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        //fake call API
        reject('Co loi');
    });

promise
    .then(function() {
        console.log('Check');
    })

    .catch(function(error) {
        console.log(error);
    })    
    .finally(function() {
        console.log('Done');
    })