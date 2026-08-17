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
const authorOne = { name: 'mario', avatar: 'pic here' };
const newPost = {
    title: 'my first post',
    body: 'blah blah',
    tags: ['tech', 'food'],
    create_at: new Date(),
    author: authorOne,
};
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
//# sourceMappingURL=index.js.map