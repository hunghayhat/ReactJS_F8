var promise = new Promise(
    // Executor
    function (resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()

        //fake call API
        resolve('123')
    });

promise
    .then(function () {
        return new Promise(function (resolve) {
            setTimeout(resolve, 3000)
        })
    })

    .then(function (data) {
        console.log(data);
    })


    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Done');
    })