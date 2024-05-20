const logger = (log) => {
    console.log(log);
}

logger('siuuu')

// trong trường hợp muốn trả về 1 Object => chèn 1 cặp ngoặc đơn
const sum = (a, b) => ({a: a, b: b})
console.log(sum(2, 5));

const obj = {
    name: 'JavaScript basic!',
    getName: () => {
        return this.name; //context
    }
}

console.log(obj.getName());
/*
Arrow function không thể đóng vai trò như 1 function constructor
*/
const Course =  function(name, price) {
    this.name = name,
    this.price = price;
}

const jsCourse = new Course ('Java', 1000)
console.log(jsCourse);