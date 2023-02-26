const user={
    name:'moni',
    age:'23',
    job:'student'
}
console.log(user)
console.log(typeof user)

// stringify
const userJson=JSON.stringify(user)
console.log(userJson)
console.log(typeof userJson)


// parse
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj)