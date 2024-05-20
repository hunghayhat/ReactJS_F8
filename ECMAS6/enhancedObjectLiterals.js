// Định nghĩa key - value cho object 
// định nghĩa(khai báo) method cho 1 object
// Định nghĩa key cho object dưới dạng biến 

// var name = 'JavaScript';
// var price = 1000;

// var course = {
//     name, 
//     price,
//     getName() {
//         return this.name;
//     }
// }

// console.log(course);

var fieldName = 'new-name';
var fieldPrice = 'price';

const course = {
    name: 'JavaScript',
    [fieldName]: 'java',
    [fieldPrice]: 10000
}
console.log(course);