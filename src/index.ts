let user: {name:string, id: number} = {
    name: 'mario',
    id : 1234,
}

interface person{
    id: number,
    name: string,
    fictional: boolean
}

let people: person[]= [
    {id:1,name: 'mario',fictional: true},
    {id:2,name: 'christ',fictional: false}
]

function addTwoNumbers(a: number, b:number): number{
    return a+b;
}
const subtractTwoNumbers = (a: number, b:number): number => {
    return a-b;
}

function addAllnumber(items: number[]): void{
    const total = items.reduce((a,c) => a+c,0)
    console.log(total)
}

addAllnumber([5,4,3,2,1])

function formatGreeting(name:string, greeting: string){
    const s = greeting+ "," + name;
    return s
}

const result = formatGreeting('mario','Sawatdee')

interface Author{
    name: string,
    avatar: string,
}

const authorOne: Author = {name: 'mario', avatar: 'pic here'}

interface Post{
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author,
}

const newPost: Post = {
    title: 'my first post',
    body: 'blah blah',
    tags : ['tech','food'],
    create_at : new Date(),
    author: authorOne,
}

function createPost(post:Post): void{
    console.log(`Created post ${post.title} by ${post.author.name}`)

}

createPost(newPost);

let posts: Post[] = []
posts.push(newPost)
console.log(`${posts.length}`)



type Rgb = [number,number,number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r,g,b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne,colorTwo)


type User = {
    name: string,
    score: number,
}

const userOne: User = {name: 'mario', score: Math.floor(Math.random() * 100)}

function formatUser(user:User): void{
    console.log(`${user.name} has a ${user.score} score`)
}

formatUser(userOne)
formatUser({name: 'Warrio',score: 45})

interface Person {
    id: number,
    name: string,
    fictional: boolean,
    role?: string
}

const characters: Person[] =[
    { id: 1, name: "Mario", fictional: true, role: "Plumber / Hero" },
  { id: 2, name: "Chris Evans", fictional: false, role: "Actor" },
  { id: 3, name: "Suphakorn", fictional: false, role: "Software Tester / Dev" }
];

const realPeople = characters.filter((person) => !person.fictional);

console.log("All Characters");
console.log(characters)

console.log("\nReal People")
console.log(realPeople)

type UserInput = string | number;

function processUserId(id: UserInput){
    if(typeof id == "string"){
        console.log(`Processing string ID: ${id.toUpperCase()}`);
    }else if(typeof id == "number"){
        console.log(`Processing numeric ID: ${id.toFixed(0)}`);
    }
}

processUserId("user1");
processUserId(12);