const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayRandomUsers(data))
}
const displayRandomUsers = (users) => {
    const gender = document.getElementById('gender')
    gender.innerHTML = users.results[0].gender;

    const name1 = users.results[0].name.first
    document.getElementById('name').innerHTML = name1

    const location = users.results[0].location.country
    document.getElementById('location').innerHTML=location

    const picture = users.results[0].picture.thumbnail
    document.getElementById('image').innerHTML=picture
    // console.log(users.results[0].name)
    // console.log(name)
console.log(users)
}
loadRandomUsers()