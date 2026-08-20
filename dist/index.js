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
let posts = [];
posts.push(newPost);
console.log(`${posts.length}`);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: Math.floor(Math.random() * 100) };
function formatUser(user) {
    console.log(`${user.name} has a ${user.score} score`);
}
formatUser(userOne);
formatUser({ name: 'Warrio', score: 45 });
const characters = [
    { id: 1, name: "Mario", fictional: true, role: "Plumber / Hero" },
    { id: 2, name: "Chris Evans", fictional: false, role: "Actor" },
    { id: 3, name: "Suphakorn", fictional: false, role: "Software Tester / Dev" }
];
const realPeople = characters.filter((person) => !person.fictional);
console.log("All Characters");
console.log(characters);
console.log("\nReal People");
console.log(realPeople);
//# sourceMappingURL=index.js.map