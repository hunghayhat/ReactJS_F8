// destructuring: Phân rã

var array = ['Javascript','PHP','Ruby'];

var [a, b,...rest] = array;

console.log(rest);

//Rest parametet: Lấy ra các phần tử còn lại 

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS '
    },
    description: 'description value'
}

//var {price,...newObject} => khai báo newObject là 1 object không có thuộc tính name

var {price,...rest} = course;

var {name, description = 'default description'} = course;
console.log(description);

function logger(...params) {
    console.log(params);
}

console.log(logger(1,2,3,4,5,5,6,7));