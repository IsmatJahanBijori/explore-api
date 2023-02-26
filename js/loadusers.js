function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>displayUser(users))
}

function displayUser(users){
    const usersList=document.getElementById('users-list')
    for(const userlist of users){
        const li=document.createElement('li')
        li.innerText=userlist.name;
        usersList.appendChild(li)
    }
}
// loadUsers()