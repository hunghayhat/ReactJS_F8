const logger = (log) => {
    console.log(log);
}

logger('message...')

const sum = (a, b) => a + b

console.log(sum(2, 2));

const course = {
    name: 'javascript basic!',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJs'
    }
}

var { name, description = 'default description'} = course;
console.log(course);
var {
    name,
    ...newObject
} = course
console.log(course.name)
console.log(newObject)
// ECMAScript 6 
function arrToObj(arr) {
    return arr.reduce((key, value) => {
        key[value[0]] = value[1]
        return key
    }, {})
}

// Expected results:

const obj1 = arrToObj([
    ['name', 'Son Dang'],
    ['age', 21],
    ['address', 'Ha Noi']
])
console.log(obj1)
// Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

const obj2 = arrToObj([
    ['name', 'Duc Long'],
    ['age', 18],
    ['address', 'Ha Noi']
])
console.log(obj2)
// Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }

// Destructuring, rest 
var array = ['Javascript', 'PHP', 'Ruby']

var [a, ...rest] = array
console.log(a)
console.log(rest)

function logger1(...parameter) {  
    console.log(parameter)
}
console.log(logger1(1,2,3,4,5,6,7,8))