const logger = (log) => {
    console.log(log);
}

logger('message...')

const sum = (a, b) => a + b

console.log(sum(2, 2));

const course = {
    name: 'javascript basic!',
    getName: () => {
        return this.name;
    }
}

console.log(course.getName());

// ECMAScript 6 
function arrToObj (arr){
    return arr.reduce((key, value) => {
        key[value[0]] = value[1]
        return key
    },{})
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