const loadPhones = (searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url).then(res => res.json()).then(data => displayPhones(data.data, datalimit))
}

const displayPhones = (phones, datalimit) => {
    const phonesContainer = document.getElementById('phones-container')

    // error msg
    const noPhone = document.getElementById('no-phn-found')
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')

    }

    phonesContainer.textContent = ''

    const showAll = document.getElementById('show-all');
    if(datalimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }


    document.getElementById('search-field').value = ''
    // console.log(phones)  
    // .slice(0, 10)
    phones.forEach(phone => {
        // console.log(phone.phone_name)
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML = `
<div class="card">
  <img src="${phone.image}" class="card-img-top p-5"  alt="...">
  <div class="card-body">
    <h5 class="card-title">${phone.phone_name}</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">Details
</button>
</div>
`
        phonesContainer.appendChild(phoneDiv)
        toggleSpinner(false)
    }
    )
}
const processSearch = (dataLimit) =>{
    toggleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}


// search process
document.getElementById('btn-search').addEventListener('click', function () {
    toggleSpinner(true)
    processSearch(10)
})

// keypress event connection with searchPhone field
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10)
        // console.log(e)
    }
})


// show all button
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})

// loading
const toggleSpinner=(isloading)=>{
    const loadSpinner=document.getElementById('loader')
    if(isloading){
        loadSpinner.classList.remove('d-none')
    }
    else{
        loadSpinner.classList.add('d-none')
    }
}

// details button
const loadPhoneDetails = (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url).then(res => res.json()).then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = (phoneDetails) => {
    document.getElementById('phoneDetailsLabel').innerText = phoneDetails.phone_name
    document.getElementById('phoneDetailsbody').innerHTML = `
    <h4>${phoneDetails.brand}</h4>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>`
}



// search field
// const searchPhone = () => {
//     const searchValue = document.getElementById('search-field')
//     const searchText = searchValue.value
//     loadPhones(searchText)
// }



loadPhones('iphone')