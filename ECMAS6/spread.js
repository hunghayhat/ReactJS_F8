import {
    TYPE_LOG
} from './constant.js'

var arr1 = ['Javascript', 'PHP', 'Ruby'];

var arr2 = ['ReactJS', 'Dart'];

var arr3 = [...arr2, ...arr1];

console.log(arr3);

var obj1 = {
    name: 'Javascript'
};

var obj2 = {
    price: 1000
};

var obj3 = {
    ...obj1,
    ...obj2
};

console.log(obj3);

function logger(log, type = TYPE_LOG) {
   console[type](log);
};

// logger(...arr1)

export default logger;