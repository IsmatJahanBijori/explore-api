const loadCountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=(countries)=>{
const countriesContainer=document.getElementById('countries-container')
for(const country of countries){
    const countryDiv=document.createElement('div')
    countryDiv.innerHTML=`
    <p>Country Name: ${country.name.common}</p>
    <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>`
    countriesContainer.appendChild(countryDiv)
    console.log(country)
}

// alternative way of jhankar bhai
// countries.forEach(country=>{
//     const countryDiv=document.createElement('div')
//     // console.log(country.name.common)
//     countryDiv.innerHTML=`
//     <h2>Name: ${country.name.common}</h2>`
//     countriesContainer.appendChild(countryDiv)

//  })

}
loadCountries()

