"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: 'mario',
    id: 1234,
};
let people = [
    { id: 1, name: 'mario', fictional: true },
    { id: 2, name: 'christ', fictional: false }
];
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
function addAllnumber(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllnumber([5, 4, 3, 2, 1]);
function formatGreeting(name, greeting) {
    const s = greeting + "," + name;
    return s;
}
const result = formatGreeting('mario', 'Sawatdee');
console.log(result);
//# sourceMappingURL=index.js.map