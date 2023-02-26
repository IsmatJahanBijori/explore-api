
function placeholder1(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=>res.json())
.then(data=>console.log(data))
}
function placeholder2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data))
}
// placeholder()
// console.log("Sjdcdf")https://jsonplaceholder.typicode.com/users