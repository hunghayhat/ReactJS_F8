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