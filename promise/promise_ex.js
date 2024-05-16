var users = [
    {
        id: 1,

        name: 'Hung Nguyen',
    },
    {
        id: 2,
        name: 'Mr Nguyen',
    },
    {
        id: 3,
        name: 'Ronaldo',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh chua ra video a',
    },
    {
        id:2,
        user_id: 2,
        content: 'Vua ra xong em oi!'
    }
];

function getComments() {
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve(comments);
        }, 1000)
    })
}

function getUsersById(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function(user){
            return userIds.includes(user.id)
        }) ;
        resolve(result);
    }, 1000)
}

// getComments()
//     .then(function(comments) {
//         var userIds = comments.map(function(comment) {
//             return comment.user_id;
//         })
//     })

getUsersById([1])
    .then(function(users) {
        console.log(users);
    });