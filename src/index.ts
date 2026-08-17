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