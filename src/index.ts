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

console.log(people[0]);
