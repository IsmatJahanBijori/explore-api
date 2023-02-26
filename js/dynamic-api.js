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
    <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
    <button onclick="loadCountryDetails(${country.cca2})">Load Country</button>`
    const loadCountryDetails=code=>{
        const url=''
    }
    countriesContainer.appendChild(countryDiv)
    console.log(country)
}

}
loadCountries()

