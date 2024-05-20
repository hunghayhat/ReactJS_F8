// function Course (name, price) {
//     this.name = name,
//     this.price = price;

//     this.getName = function() {
//         return this.name;
//     }

//     const isSuccess = false;
// }

// Cấu trúc constructor giống như constructor function
class Course {
    constructor(name, price) {
        this.name = name,
            this.price = price
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    run() {
        const isSuccess = false;
        if (1) {
            isSuccess = true;
        }
    }
}

const phpCourse = new Course('PHP', 10000);
const jsCourse = new Course('Javascript', 5000);

console.log(phpCourse);